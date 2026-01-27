<script>
    export let data;
    const { hotels } = data;
    import { goto } from "$app/navigation"; //voor de navigatie
    import outsidehotelJPG from "$lib/assets/hotels.jpg";
    import outsidehotelWEBP from "$lib/assets/hotels.webp";
    import outsidehotelAVIF from "$lib/assets/hotels.avif";
</script>

<svelte:head>
    <title>Hotels</title>
    <meta name="description" content="Hotels" />
</svelte:head>

<div class="container">
    <article>
        {#each hotels as hotel}
            <a href="/hotel/{hotel.HotelInfo.HotelID}">
                <div class="all-info">
                    <picture>
                        <source srcSet={outsidehotelAVIF} type="image/avif" />
                        <source srcSet={outsidehotelWEBP} type="image/webp" />
                        <img
                            src={outsidehotelJPG}
                            alt="Outside hotel"
                            width="300"
                            height="200"
                            fetchpriority=high
                        />
                    </picture>
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

<nav>
    <ul>
        <!-- alleen zichtbaar als je niet op de eerste pagina zit -->
        {#if Number(data.page) > 1}
            <li>
                <button
                    class="navigation-btn"
                    onclick={() => goto(`/?page=${Number(data.page) - 1}`)}
                    aria-label="Previous page"
                >
                    Previous
                </button>
            </li>
        {/if}

        <!-- pagina 1 -->
        {#if Number(data.page) > 1}
            <li>
                <button onclick={() => goto("/?page=1")}>1</button>
            </li>
        {/if}

        <!-- pagina 2 en hoger -->
        {#if Number(data.page) > 2}
            <li>
                <button onclick={() => goto(`/?page=${Number(data.page) - 1}`)}>
                    {Number(data.page) - 1}
                </button>
            </li>
        {/if}

        <!-- als je op een pagina ziet dan kan je niet meer op de pagina klikken -->
        <li>
            <button class="active" disabled>
                {data.page}
            </button>
        </li>

        <!-- laat 2 pagina zien bij previous-->
        {#if Number(data.page) < data.totalPages - 1}
            <li>
                <button onclick={() => goto(`/?page=${Number(data.page) + 1}`)}>
                    {Number(data.page) + 1}
                </button>
            </li>
        {/if}

        <!-- laatste pagina-->
        {#if Number(data.page) < data.totalPages}
            <li>
                <button onclick={() => goto(`/?page=${data.totalPages}`)}>
                    {data.totalPages}
                </button>
            </li>
        {/if}

        <!-- alleen zichtbaar als je niet op de laatste pagina zit -->
        {#if Number(data.page) < data.totalPages}
            <li>
                <button
                    class="navigation-btn"
                    onclick={() => goto(`/?page=${Number(data.page) + 1}`)}
                    aria-label="Next page"
                >
                    Next
                </button>
            </li>
        {/if}
    </ul>
</nav>

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
        outline: none;

        &:focus {
            outline: 3px solid var(--primary-color);
            outline-offset: .5em;

		}
    }

    .all-info {
        background-color: var(--secondary-color);
        border-radius: 0.5em;
        display: flex;
        flex-direction: column;
        align-items: start;
        box-shadow: var(--box-shadow);
        border: var(--border);
        height: 100%;
        justify-content: flex-start;
    }

    .info-extra {
        display: flex;
        gap: 1em;
        margin: 0em 1em;
    }
    
    picture {
        display: block;
        width: 100%;
        aspect-ratio: 3 / 2;
        overflow: hidden;
        border-radius: 0.5em 0.5em 0em 0em;
    }

    picture img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        margin: 0em 0em 1em 0em;
    }

    h2 {
        font-size: var(--font-size-large);
        margin: 1em 1em 0em;
        color: var(--primary-color);
        font-weight: var(--font-weight-bold);
    }

    .available {
        background-color: var(--color-success);
        color: var(--primary-color);
        padding: 0.5em;
        font-size: var(--font-size-small);
        max-width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
    }

    .price {
        background-color: var(--color-price);
        color: var(--primary-color);
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
        margin-top: auto;
    }

    ul {
        display: flex;
        justify-content: center;
        list-style: none;
        padding: 1em;
        gap: 0.5em;
        align-items: center;
    }

    button {
        padding: 1em;
        border: none;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border-radius: 0.5em;
    }

    .active:disabled {
        background-color: var(--disabled-color);
    }
</style>
