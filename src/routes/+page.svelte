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
        {#each hotels as hotel}
            <div>
                <h2>{hotel.HotelInfo.Name}</h2>
                <p></p>
                <p></p>
                <p>
                    Dit hotel biedt moderne en comfortabele accommodaties,
                    ideaal voor zowel zakelijke reizigers als vakantiegangers.
                    De kamers zijn ruim opgezet en van alle gemakken voorzien,
                    waaronder luxe bedden en een fijne werkplek. Gasten kunnen
                    rekenen op een uitstekende service, een gastvrije sfeer en
                    faciliteiten die bijdragen aan een ontspannen en zorgeloos
                    verblijf.
                </p>
                <!-- <p>{hotel.Reviews[0].Content.substring(0, 150)}...</p> -->
            </div>
        {/each}
    </article>
</div>

<!-- 
<h1>Hotels</h1>
<div class="grid">
  {#each hotels as hotel}
    <div class="card">
      <h2>{hotel.HotelInfo.Name}</h2>
      <p>{hotel.HotelInfo.Address.City}, {hotel.HotelInfo.Address.Country}</p>
      <a href="/hotel/{hotel.HotelInfo.HotelID}">Bekijk details</a>
    </div>
  {/each}
</div> -->

<style>
</style>
