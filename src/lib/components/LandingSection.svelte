<script lang="ts">
	let { 
		children, 
		title = '', 
		description = '', 
		headline = '',
		class: className = ''
	} = $props();
</script>

<section class="landing-section {className}">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
		{#if headline}
			<div class="text-center mb-4">
				<span class="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-600/20 dark:bg-orange-400/10 dark:text-orange-400 dark:ring-orange-400/30">
					{headline}
				</span>
			</div>
		{/if}
		
		{#if title || description}
			<div class="text-center mb-16">
				{#if title}
					<h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
						{title}
					</h2>
				{/if}
				{#if description}
					<p class="mt-4 text-lg text-gray-600 dark:text-gray-400">
						{description}
					</p>
				{/if}
			</div>
		{/if}
		
		{@render children()}
	</div>
</section>