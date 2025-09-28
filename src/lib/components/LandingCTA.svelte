<script lang="ts">
	import Icon from '@iconify/svelte';

	let { 
		title = '',
		description = '',
		links = []
	} = $props();
</script>

<div class="bg-orange-50 dark:bg-gray-900 rounded-2xl p-8 lg:p-12 text-center">
	{#if title}
		<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
			{title}
		</h2>
	{/if}

	{#if description}
		<p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
			{description}
		</p>
	{/if}

	{#if links && links.length > 0}
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			{#each links as link}
				<a
					href={link.to}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center justify-center rounded-full px-8 py-4 text-lg font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors
						{link.size === 'xl' ? 'px-10 py-5 text-xl' : ''}"
				>
					{#if link.leadingIcon}
						<Icon icon={link.leadingIcon} class="w-5 h-5 mr-2" />
					{/if}
					{link.label}
					{#if link.trailingIcon}
						<Icon icon={link.trailingIcon} class="w-5 h-5 ml-2" />
					{/if}
				</a>
			{/each}
		</div>
	{/if}
</div>