<script>
    export let data;
    const { hotels } = data;
    import outsidehotel from "$lib/assets/hotels.jpg";
</script>

<svelte:head>
    <title>Hotels</title>
    <meta name="description" content="Hotels" />
</svelte:head>

<div class="container">
    <article>
        {#each hotels as hotel}
            <a href="/hotel/{hotel.id}">
                <div class="all-info">
                    <img src={outsidehotel} alt="" />
                        <h2>{hotel.HotelInfo.Name}</h2>
                        <div class="info-extra">
                            <p class="available">Available</p>
                            <p class="price">
                                {hotel.HotelInfo.Price.replace("*", "")}
                            </p>
                        </div>
                    <p class="description">
                        Dit hotel biedt moderne en comfortabele accommodaties,
                        ideaal voor zowel zakelijke reizigers als
                        vakantiegangers. De kamers zijn ruim opgezet en van alle
                        gemakken voorzien, waaronder luxe bedden en een fijne
                        werkplek. Gasten kunnen rekenen op een uitstekende
                        service, een gastvrije sfeer en faciliteiten die
                        bijdragen aan een ontspannen en zorgeloos verblijf.
                    </p>
                </div>
            </a>
        {/each}
    </article>
</div>

<style>
    .container {
        padding: 2em;
    }

    article {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2em;
    }

    a {
        text-decoration: none;
    }

    .all-info {
        background-color: var(--secondary-color);
        border-radius: 0.5em;
        display: flex;
        flex-direction: column;
        align-items: start;
        box-shadow: 0 0px 5px var(--primary-color);
        height: 100%;
        justify-content: space-between;
    }

    .info-extra {
        display: flex;
        gap: 1em;
        margin: 0em 1em;
    }

    img {
        border-radius: .5em .5em 0em 0em;
        object-fit: cover;
        width: 100%;
        height: auto;
        margin: 0em 0em 1em 0em;
    }

    h2 {
        font-size: var(--font-size-large);
        margin: 0em 1em;
        color: var(--primary-color);
        font-weight: var(--font-weight-bold);
    }

    .available {
        background-color: var(--color-success);
        color: var(--secondary-color);
        padding: 0.5em;
        font-size: var(--font-size-small);
        max-width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
    }

    .price {
        background-color: var(--color-price);
        color: var(--secondary-color);
        padding: 0.5em;
        font-size: var(--font-size-small);
        max-width: fit-content;
        height: fit-content;
    }

    .description {
        font-size: var(--font-size-small);
        color: var(--primary-color);
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 1em;
    }
</style>
