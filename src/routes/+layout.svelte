<script>
	import "$lib/global.css";
	import favicon from '$lib/assets/hotelsign.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<header>
    <p>My Hotels</p>
</header>

{@render children()}
