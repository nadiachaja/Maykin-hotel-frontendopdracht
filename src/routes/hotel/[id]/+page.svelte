<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
    $: ({ hotel } = data); 
</script>

<svelte:head>
    <title>Hotel</title>
    <meta name="description" content="Hotel" />
</svelte:head>


{#if hotel && hotel.HotelInfo && hotel.HotelInfo.Address}
<section>
    <h2>{hotel.HotelInfo.Name}</h2>
    <p></p>
    <p>Address details: <span>{@html hotel.HotelInfo.Address}</span></p>
</section>

<article>
    <img src="" alt="">
    <h3>{hotel.HotelInfo.Name}</h3>
    <p>Available from per night</p>
    <button>Order now</button>
</article>

<article>
    <div>
    <img src="" alt="">
    <h4></h4>
    <p></p>
</div>
    <p>Price per night: {hotel.HotelInfo.Price.replace("*", "")}</p>
</article>
{/if}