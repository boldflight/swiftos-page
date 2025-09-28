<script lang="ts">
	import { onMount } from 'svelte';
	import { bundledLanguages, getSingletonHighlighter } from 'shiki';
	import { theme as themeStore } from '$lib/stores/theme';

	export let code: string;
	export let language: string = 'swift';
	export let theme: string = 'one-dark-pro';

	let highlightedHtml = '';
	let mounted = false;
	let highlighter: any = null;

	// Function to update highlighted code based on current theme
	async function updateHighlighting() {
		if (!highlighter || !mounted) return;
		
		try {
			// Get current resolved theme from store
			const isDark = $themeStore.resolvedTheme === 'dark';
			const selectedTheme = isDark ? theme : 'github-light';

			highlightedHtml = highlighter.codeToHtml(code, {
				lang: language,
				theme: selectedTheme
			});
		} catch (error) {
			console.error('Shiki highlighting update failed:', error);
		}
	}

	onMount(async () => {
		try {
			highlighter = await getSingletonHighlighter({
				themes: [theme, 'github-light'],
				langs: Object.keys(bundledLanguages)
			});

			mounted = true;
			updateHighlighting();
		} catch (error) {
			console.error('Shiki highlighting failed:', error);
			// Fallback to plain text with basic styling
			highlightedHtml = `<pre><code>${code}</code></pre>`;
			mounted = true;
		}
	});

	// React to theme changes
	$: if (mounted && $themeStore.resolvedTheme) {
		updateHighlighting();
	}
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
	}

	:global(.shiki-container code) {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
		font-size: 0.875rem;
		text-align: left;
		display: block;
	}

	.fallback-code {
		background: #f8f9fa;
		border-radius: 0.5rem;
		padding: 1rem;
		text-align: left;
	}

	.fallback-code pre {
		margin: 0;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Code', monospace;
		font-size: 0.875rem;
		line-height: 1.5;
		text-align: left;
	}
</style>