<script lang="ts">
	import AppHeader from '$lib/components/AppHeader.svelte';
	import AppFooter from '$lib/components/AppFooter.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta property="og:image" content="https://hummingbird.codes/social-media-card.png" />
	<meta name="twitter:image" content="https://hummingbird.codes/twitter-card.png" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<AppHeader />

<main class="min-h-screen">
	{@render children()}
</main>

<AppFooter />