<script lang="ts">
	import BackgroundIcons from '$lib/components/BackgroundIcons.svelte';
	import LandingSection from '$lib/components/LandingSection.svelte';
	import LandingHero from '$lib/components/LandingHero.svelte';
	import LandingCard from '$lib/components/LandingCard.svelte';
	import LandingCTA from '$lib/components/LandingCTA.svelte';
	import Icon from '@iconify/svelte';
	import { marked } from 'marked';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// Process markdown content
	const helloHtml = data.hello ? marked(data.hello) : '';
	const basicRouteHtml = data.basicRoute ? marked(data.basicRoute) : '';
</script>

<svelte:head>
	<title>{data.page?.title || 'Hummingbird'}</title>
	<meta name="description" content={data.page?.description || 'The Web Framework for Swift'} />
	<meta property="og:title" content={data.page?.title || 'Hummingbird'} />
	<meta property="og:description" content={data.page?.description || 'The Web Framework for Swift'} />
</svelte:head>

<div class="display-flex relative">
	<div id="icons" class="absolute inset-0 -z-10">
		<BackgroundIcons />
	</div>

	<LandingSection class="md:py-0 sm:py-0">
		<LandingHero 
			description={data.page?.hero?.description}
			links={data.page?.hero?.links}
		>
			{#snippet headline()}
				{#if data.page?.hero?.headline}
					<a
						href={data.page.hero.headline.to}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30 hover:bg-orange-100 dark:hover:bg-orange-400/20 transition-colors"
						aria-label={data.page.hero.headline.label}
					>
						{data.page.hero.headline.label}
						{#if data.page.hero.headline.icon}
							<Icon icon={data.page.hero.headline.icon} class="ml-1 w-4 h-4" />
						{/if}
					</a>
				{/if}
			{/snippet}

			{#snippet children()}
				<div class="logo-container text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
					<span class="logo-overlay">Hummingbird</span>
				</div>
			{/snippet}

			{#snippet bottom()}
				<div class="mt-16">
					<LandingCard class="line-numbered-code">
						{#if helloHtml}
							<div class="prose dark:prose-invert max-w-none">
								{@html helloHtml}
							</div>
						{/if}
					</LandingCard>
				</div>
			{/snippet}
		</LandingHero>
	</LandingSection>

	<LandingSection 
		class="md:py-0 sm:py-0"
		title={data.page?.features?.title}
		description={data.page?.features?.description}
		headline={data.page?.features?.headline}
	>
		<div class="landing-grid" id="features">
			{#each (data.page?.features?.items || []) as item}
				<LandingCard
					title={item.title}
					description={item.description}
					icon={item.icon}
				/>
			{/each}
		</div>
	</LandingSection>

	<LandingSection class="md:py-0 sm:py-0">
		<LandingHero
			title={data.page?.ecosystem?.title}
			description={data.page?.ecosystem?.description}
			links={data.page?.ecosystem?.links}
			align="left"
		>
			{#snippet children()}
				<LandingCard class="line-numbered-code">
					{#if basicRouteHtml}
						<div class="prose dark:prose-invert max-w-none">
							{@html basicRouteHtml}
						</div>
					{/if}
				</LandingCard>
			{/snippet}
		</LandingHero>
	</LandingSection>

	<LandingSection>
		<LandingCTA
			title={data.page?.cta?.title}
			description={data.page?.cta?.description}
			links={data.page?.cta?.links}
		/>
	</LandingSection>
</div>

<style>
	#icons {
		position: static;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	@media (max-width: 500px) {
		.logo-container {
			font-size: 32pt;
		}

		.line-numbered-code {
			font-size: 9.5pt;
		}
	}

	.logo-overlay::before {
		width: 2em;
		height: 2em;
		margin-left: -1.7em;
		margin-top: -0.5em;
		position: absolute;
		content: '';
		background-image: url("/logo@400px.png");
		background-size: 2em;
		background-repeat: no-repeat;
	}

	.logo-overlay {
		margin-left: 1.5em;
	}

	.line-numbered-code {
		max-width: calc(min(90vw, 40em, 100%));
		overflow: none;
		white-space: pre-wrap;
		margin: 0 auto;
	}

	:global(.line-numbered-code pre) {
		line-height: 1.625;
		counter-reset: lines;
	}

	:global(.line-numbered-code pre code) {
		display: flex;
		flex-direction: column;
	}

	:global(.line-numbered-code pre code .line) {
		display: inline-table;
		min-height: 1rem;
	}

	@media (min-width: 500px) {
		:global(.line-numbered-code pre code .line::before) {
			counter-increment: lines;
			content: counter(lines);
			width: 1rem;
			margin-right: 1.5rem;
			display: inline-block;
			text-align: left;
			color: rgba(115, 138, 148, 0.4);
		}
	}

	:global(.line-numbered-code pre code .highlight) {
		background-color: #363b46;
		display: block;
		margin-right: -1em;
		margin-left: -1em;
		padding-right: 1em;
		padding-left: 0.75em;
		border-left: 0.25em solid red;
	}
</style>