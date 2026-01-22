<script>
export let data;
  
  const { hotels } = data;

</script>

<svelte:head>
    <title>Hotels</title>
    <meta name="description" content="Hotels" />
</svelte:head>

<div>
    <article>
        <img src="" alt="" />
        <div>
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </article>
</div>

<h1>Hotels</h1>
<div class="grid">
  {#each hotels as hotel}
    <div class="card">
      <h2>{hotel.HotelInfo.Name}</h2>
      <p>{hotel.HotelInfo.Address.City}, {hotel.HotelInfo.Address.Country}</p>
      <a href="/hotel/{hotel.HotelInfo.HotelID}">Bekijk details</a>
    </div>
  {/each}
</div>


<style>

</style>