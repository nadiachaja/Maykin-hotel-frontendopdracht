<script>
	import "$lib/global.css";
	import favicon from "$lib/assets/hotel.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
	<a href="/">
		<h1>My Hotels</h1>
	</a>
</header>

{@render children()}

<style>
	header {
		background-color: var(--primary-color);
		color: var(--secondary-color);
		padding: .5em;
	}

	a{
		text-decoration: none;
	}

	h1 {
		margin: 0em 0em 0em .5em;
		padding: 0.5em;
		font-size: var(--font-size-medium);
		font-weight: var(--font-weight-normal);
		color: var(--secondary-color);

	}
</style>
