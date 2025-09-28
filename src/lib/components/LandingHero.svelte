<script lang="ts">
	import Icon from '@iconify/svelte';

	let { 
		title = '',
		description = '',
		links = [],
		align = 'center',
		headline = undefined,
		bottom = undefined,
		children = undefined
	} = $props();
</script>

<div class="hero-container {align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right'}">
	{#if headline}
		<div class="mb-6">
			{@render headline()}
		</div>
	{/if}

	{#if title}
		<h1 class="logo-container text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
			{@html title}
		</h1>
	{/if}

	{#if description}
		<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl {align === 'center' ? 'mx-auto' : ''}">
			{description}
		</p>
	{/if}

	{#if links && links.length > 0}
		<div class="flex flex-col sm:flex-row gap-4 {align === 'center' ? 'justify-center' : align === 'left' ? 'justify-start' : 'justify-end'} mb-8">
			{#each links as link}
				<a
					href={link.to}
					target={link.target || '_self'}
					class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2
						{link.color === 'gray' ? 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600' : 'bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-500'}
						{link.size === 'xl' ? 'px-6 py-3 text-base' : ''}"
				>
					{#if link.icon && !link.trailing}
						<Icon icon={link.icon} class="w-5 h-5 mr-2" />
					{/if}
					{link.label}
					{#if link.icon && link.trailing}
						<Icon icon={link.icon} class="w-5 h-5 ml-2" />
					{/if}
				</a>
			{/each}
		</div>
	{/if}

	{#if children}
		<div class="hero-content">
			{@render children()}
		</div>
	{/if}

	{#if bottom}
		<div class="hero-bottom">
			{@render bottom()}
		</div>
	{/if}
</div>