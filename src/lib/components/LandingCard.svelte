<script lang="ts">
	import Icon from '@iconify/svelte';

	let { 
		title = '',
		description = '',
		icon = '',
		class: className = '',
		children = undefined
	} = $props();
</script>

<div class="card p-6 {className} {className.includes('line-numbered-code') ? 'bg-white dark:bg-white border-gray-200' : ''}">
	{#if icon}
		<div class="mb-4">
			<div class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-orange-100 dark:bg-orange-900/20">
				<Icon {icon} class="w-6 h-6 text-orange-600 dark:text-orange-400" />
			</div>
		</div>
	{/if}

	{#if title}
		<h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
			{title}
		</h3>
	{/if}

	{#if description}
		<p class="text-gray-600 dark:text-gray-400">
			{description}
		</p>
	{/if}

	{#if children}
		<div class="card-content">
			{@render children()}
		</div>
	{/if}
</div>