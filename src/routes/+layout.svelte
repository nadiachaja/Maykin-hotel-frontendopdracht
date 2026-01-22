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

</style>