<script lang="ts">
	import { onMount } from 'svelte';
	import { bundledLanguages, getSingletonHighlighter } from 'shiki';

	export let code: string;
	export let language: string = 'swift';
	export let theme: string = 'one-dark-pro';

	let highlightedHtml = '';
	let mounted = false;

	onMount(async () => {
		try {
			const highlighter = await getSingletonHighlighter({
				themes: [theme, 'github-light'],
				langs: Object.keys(bundledLanguages)
			});

			// Use dark theme in dark mode, light theme in light mode
			const isDark = document.documentElement.classList.contains('dark');
			const selectedTheme = isDark ? theme : 'github-light';

			highlightedHtml = highlighter.codeToHtml(code, {
				lang: language,
				theme: selectedTheme
			});
			mounted = true;
		} catch (error) {
			console.error('Shiki highlighting failed:', error);
			// Fallback to plain text with basic styling
			highlightedHtml = `<pre><code>${code}</code></pre>`;
			mounted = true;
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
	}

	:global(.shiki-container code) {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
		font-size: 0.875rem;
	}

	.fallback-code {
		background: #f8f9fa;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.fallback-code pre {
		margin: 0;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
		font-size: 0.875rem;
		line-height: 1.5;
	}
</style>