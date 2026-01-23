<script>
	import "$lib/global.css";
	import favicon from '$lib/assets/hotel.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <h1>My Hotels</h1>
</header>

{@render children()}


<style>
header{
	background-color: var(--primary-color);
	color: var(--secondary-color);
}

h1{
	margin: 0;
	padding: .5em;
	font-size: var(--font-size-medium);
	font-weight: var(--font-weight-normal);
}
</style>