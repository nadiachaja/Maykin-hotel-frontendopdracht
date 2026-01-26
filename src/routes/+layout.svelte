<script>
	import "$lib/global.css";
	import favicon from "$lib/assets/hotel.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<a href="#main-content" class="skip-link"> Skip to content </a>
<header>
	<a href="/">
		<h1>My Hotels</h1>
	</a>
</header>

<main id="main-content">
	{@render children()}
</main>

<style>
	.skip-link {
		position: absolute;
		z-index: 1000;
		margin: 1em;
		padding: 1em;
		background-color: var(--color-cta);
		border-radius: .5em;
		color: var(--secondary-color);
		text-decoration: none;
		transform: translateY(-200%);
		transition: transform 0.3s;

		&:focus {
			transform: translate(0%);
		}
	}

	header {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		padding: 0.5em;
	}

	a {
		text-decoration: none;
	}

	h1 {
		margin: 0em 0em 0em 0.5em;
		padding: 0.5em;
		font-size: var(--font-size-medium);
		font-weight: var(--font-weight-normal);
		color: var(--secondary-color);
	}
</style>
