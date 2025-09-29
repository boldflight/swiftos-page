<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const page = data.page;
</script>

<svelte:head>
	<title>{page.title}</title>
	<meta name="description" content={page.description} />
</svelte:head>

<!-- Hero Section -->
<section class="pt-24 pb-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center">
			<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
				{page.hero.title}
			</h1>
			<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.hero.description}
			</p>
			{#if page.hero.headline}
				<div class="mt-8">
					<a 
						href={page.hero.headline.to} 
						class="inline-flex items-center gap-x-2 rounded-full bg-orange-50 dark:bg-orange-900/20 px-4 py-2 text-sm font-semibold text-orange-600 dark:text-orange-400 ring-1 ring-inset ring-orange-500/10 dark:ring-orange-400/20 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
					>
						{page.hero.headline.label}
						<i class="{page.hero.headline.icon} h-4 w-4"></i>
					</a>
				</div>
			{/if}
		</div>
	</div>
</section>

<!-- Revolutionary Interface Paradigms -->
<section class="py-16 bg-gray-50 dark:bg-gray-900/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				{page.paradigms.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.paradigms.description}
			</p>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each page.paradigms.items as item}
				<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
					<div class="flex items-center gap-4 mb-6">
						<div class="flex-shrink-0">
							<i class="{item.icon} h-8 w-8 text-orange-500"></i>
						</div>
						<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
							{item.title}
						</h3>
					</div>
					<div class="prose prose-gray dark:prose-invert max-w-none">
						{@html item.description.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Composable Architecture -->
<section class="py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				{page.composition.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.composition.description}
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each page.composition.items as item}
				<div class="text-center">
					<div class="flex justify-center mb-6">
						<div class="flex-shrink-0 p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full">
							<i class="{item.icon} h-8 w-8 text-orange-500"></i>
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						{item.title}
					</h3>
					<div class="prose prose-gray dark:prose-invert max-w-none text-sm">
						{@html item.description.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Conversational Computing -->
<section class="py-16 bg-gray-50 dark:bg-gray-900/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				{page.conversation.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.conversation.description}
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each page.conversation.items as item}
				<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
					<div class="flex items-center gap-3 mb-4">
						<i class="{item.icon} h-6 w-6 text-orange-500"></i>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							{item.title}
						</h3>
					</div>
					<div class="prose prose-gray dark:prose-invert max-w-none text-sm">
						{@html item.description.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Ambient Intelligence -->
<section class="py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				{page.intelligence.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.intelligence.description}
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each page.intelligence.items as item}
				<div class="text-center">
					<div class="flex justify-center mb-6">
						<div class="flex-shrink-0 p-4 bg-orange-100 dark:bg-orange-900/20 rounded-full">
							<i class="{item.icon} h-8 w-8 text-orange-500"></i>
						</div>
					</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
						{item.title}
					</h3>
					<div class="prose prose-gray dark:prose-invert max-w-none text-sm">
						{@html item.description.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Digital Sovereignty -->
<section class="py-16 bg-gray-50 dark:bg-gray-900/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				{page.sovereignty.title}
			</h2>
			<p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
				{page.sovereignty.description}
			</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each page.sovereignty.items as item}
				<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700">
					<div class="flex items-center gap-3 mb-4">
						<i class="{item.icon} h-6 w-6 text-orange-500"></i>
						<h3 class="text-lg font-semibold text-gray-900 dark:text-white">
							{item.title}
						</h3>
					</div>
					<div class="prose prose-gray dark:prose-invert max-w-none text-sm">
						{@html item.description.replace(/\n\n/g, '</p><p>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/^/, '<p>').replace(/$/, '</p>')}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-orange-50 dark:bg-orange-900/20 rounded-3xl p-12 text-center">
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
				{page.cta.title}
			</h2>
			<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
				{page.cta.description}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				{#each page.cta.links as link}
					<a 
						href={link.to}
						class="inline-flex items-center gap-x-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors {link.color === 'gray' ? 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700' : 'bg-orange-500 text-white hover:bg-orange-600'}"
					>
						<i class="{link.leadingIcon} h-4 w-4"></i>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	</div>
</section>