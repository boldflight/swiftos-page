<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { bundledLanguages, getSingletonHighlighter } from "shiki";
  import { theme } from "$lib/stores/theme";

  export let code: string;
  export let language: string = "swift";
  export let codeTheme: string = "one-dark-pro";

  let highlightedHtml = "";
  let mounted = false;
  let highlighter: any = null;
  let resolvedTheme = "light";
  let unsubscribe: (() => void) | null = null;

  // Function to update highlighted code based on current theme
  async function updateHighlighting() {
    if (!highlighter || !mounted) return;

    try {
      // Get current resolved theme from store
      const isDark = resolvedTheme === "dark";
      const selectedTheme = isDark ? codeTheme : "github-light";

      highlightedHtml = highlighter.codeToHtml(code, {
        lang: language,
        theme: selectedTheme,
      });
    } catch (error) {
      console.error("Shiki highlighting update failed:", error);
    }
  }

  onMount(async () => {
    try {
      console.log("Loading Shiki highlighter...");
      highlighter = await getSingletonHighlighter({
        themes: [codeTheme, "github-light"],
        langs: Object.keys(bundledLanguages),
      });
      console.log("Shiki highlighter loaded successfully");

      // Subscribe to resolved theme changes
      unsubscribe = theme.resolvedTheme.subscribe((value) => {
        resolvedTheme = value;
        console.log(
          "Theme changed, updating highlighting. currentTheme:",
          resolvedTheme,
        );
        if (mounted) {
          updateHighlighting();
        }
      });

      mounted = true;
      updateHighlighting();
    } catch (error) {
      console.error("Shiki highlighting failed:", error);
      console.log("Using fallback highlighting");
      // Fallback to plain text with basic styling
      highlightedHtml = `<pre><code>${code}</code></pre>`;
      mounted = true;
    }
  });

  onDestroy(() => {
    if (unsubscribe) {
      unsubscribe();
    }
  });
</script>

{#if mounted}
  <div class="shiki-container">
    {@html highlightedHtml}
  </div>
{:else}
  <div class="fallback-code">
    <pre><code>{code}</code></pre>
  </div>
{/if}

<style>
  :global(.shiki-container pre) {
    margin: 0;
    padding: 1rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    line-height: 1.5;
    text-align: left;
    @apply bg-transparent !important;
  }

  :global(.shiki-container code) {
    font-family: "SF Mono", "Monaco", "Inconsolata", "Fira Code", monospace;
    font-size: 0.875rem;
    text-align: left;
    display: block;
  }

  .fallback-code {
    @apply bg-white dark:bg-gray-900 rounded-lg p-4 text-left;
  }

  .fallback-code pre {
    @apply m-0 font-mono text-sm leading-6 text-left;
  }
</style>
