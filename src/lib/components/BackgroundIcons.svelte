<script lang="ts">
	import Icon from '@iconify/svelte';

	let y = 5;
	const step = 7;

	function classes() {
		return Math.random() < 0.5 ? 'floating' : 'floating-inverse';
	}

	function randomPositionStyle() {
		const left = Math.random() < 0.5;
		const x = Math.random() * 25;
		y += step;

		return {
			position: 'absolute',
			top: `${y}%`,
			left: `${left ? x + 5 : x + 70}%`
		};
	}

	const icons = [
		{ icon: 'simple-icons:mongodb', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:linux', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:postgresql', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:oracle', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:apachekafka', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:mysql', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:apachecassandra', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:sqlite', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:awslambda', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:swagger', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:jsonwebtokens', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:webauthn', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:aws', style: randomPositionStyle(), classes: classes() },
		{ icon: 'simple-icons:mqtt', style: randomPositionStyle(), classes: classes() }
	];
</script>

<div class="icon-container">
	{#each icons as iconData, index}
		<Icon
			icon={iconData.icon}
			class="{iconData.classes}"
			style="position: {iconData.style.position}; top: {iconData.style.top}; left: {iconData.style.left};"
		/>
	{/each}
</div>

<style>
	.icon-container {
		width: 100vw;
		height: 100vh;
	}

	:global(.floating),
	:global(.floating-inverse) {
		width: 50px;
		height: 50px;
		opacity: 0.09;
	}

	:global(.floating) {
		animation: fadeIn 1.5s ease-in-out, float 4s ease-in-out infinite;
	}

	:global(.floating-inverse) {
		animation: fadeIn 1.5s ease-in-out, floatinverse 4s ease-in-out infinite;
	}

	@keyframes fadeIn {
		0% { opacity: 0; }
		100% { opacity: 0.09; }
	}

	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	@keyframes floatinverse {
		0% {
			transform: translateY(-10px);
		}
		50% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(-10px);
		}
	}
</style>