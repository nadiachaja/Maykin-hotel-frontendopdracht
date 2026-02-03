<script>
    /** @type {import('./$types').PageData} */
    export let data;

    $: ({ hotel } = data);

    $: description = `Welkom bij ${hotel.HotelInfo?.Name || "ons hotel"}. 
     Dit verblijf staat bekend om zijn uitstekende service en comfortabele kamers. 
     Of u nu reist voor zaken of ontspanning, wij bieden een gastvrije omgeving 
     met moderne faciliteiten. Gelegen op een gunstige locatie, is dit hotel 
     de ideale uitvalsbasis om de omgeving te verkennen. Gasten waarderen 
     vooral de netheid en de vriendelijke sfeer die ons team dagelijks verzorgt.`;

    import hotelroomJPG from "$lib/assets/hotelroom.jpg";
    import hotelroomAVIF from "$lib/assets/hotelroom.avif";
    import hotelroomWEBP from "$lib/assets/hotelroom.webp";
</script>

<svelte:head>
    <title>Hotel</title>
    <meta name="description" content="Hotel" />
</svelte:head>

<div class="page-wrapper">
    {#if hotel && hotel.HotelInfo && hotel.HotelInfo.Address}
        <div class="container">
            <section class="info">
                <h2>{hotel.HotelInfo.Name}</h2>
                <p class="description">{description}</p>
                <div class="highlights-wrapper">
                    <p class="hightlights-text"><strong>Highlights:</strong></p>
                    <ul>
                        <li>Gratis WiFi</li>
                        <li>Luxe bedden</li>
                        <li>Mooie omgeving</li>
                    </ul>
                </div>
                <p class="adress">
                    <strong>Address details:</strong>{@html hotel.HotelInfo
                        .Address}
                </p>
            </section>

            <aside class="booking-sidebar">
                <article class="main-card">
                    <picture>
                        <source srcSet={hotelroomAVIF} type="image/avif" />
                        <source srcSet={hotelroomWEBP} type="image/webp" />
                        <img
                            class="hotel-room-img"
                            src={hotelroomJPG}
                            alt={hotel.HotelInfo.Name}
                            width="300"
                            height="200"
                            fetchpriority="high"
                        />
                    </picture>
                    <div class="card-info">
                        <h3>{hotel.HotelInfo.Name}</h3>
                        <p class="main-price">
                            Available from <span
                                >{hotel.HotelInfo.Price.replace("*", "")}</span
                            > per night
                        </p>
                        <button class="order-button">Order now</button>
                    </div>
                </article>
            </aside>
        </div>

        <div class="container-rooms">
            <article class="room-card">
                <picture>
                    <source srcSet={hotelroomAVIF} type="image/avif" />
                    <source srcSet={hotelroomWEBP} type="image/webp" />
                    <img
                        class="hotel-room-img"
                        src={hotelroomJPG}
                        alt={hotel.HotelInfo.Name}
                        height="150"
                        width="250"
                        fetchpriority="high"
                    />
                </picture>
                <div class="room-info">
                    <h4>Standard room</h4>
                    <p class="room-description">
                        Comfortable room including breakfast.
                    </p>
                    <p class="price">
                        Price per night: {hotel.HotelInfo.Price.replace(
                            "*",
                            "",
                        )}
                    </p>
                </div>
            </article>

            <article class="room-card">
                <picture>
                    <source srcSet={hotelroomAVIF} type="image/avif" />
                    <source srcSet={hotelroomWEBP} type="image/webp" />
                    <img
                        class="hotel-room-img"
                        src={hotelroomJPG}
                        alt={hotel.HotelInfo.Name}
                        height="150"
                        width="250"
                        fetchpriority="high"
                    />
                </picture>
                <div class="room-info">
                    <h4>Luxe Suite</h4>
                    <p class="room-description">
                        Spacious room with a beautiful view.
                    </p>
                    <p class="price">
                        Price per night: {hotel.HotelInfo.Price.replace(
                            "*",
                            "",
                        )}
                    </p>
                </div>
            </article>

            <article class="room-card">
                <picture>
                    <source srcSet={hotelroomAVIF} type="image/avif" />
                    <source srcSet={hotelroomWEBP} type="image/webp" />
                    <img
                        class="hotel-room-img"
                        src={hotelroomJPG}
                        alt={hotel.HotelInfo.Name}
                        height="150"
                        width="250"
                        fetchpriority="high"
                    />
                </picture>
                <div class="room-info">
                    <h4>Deluxe Sea View Room</h4>
                    <p class="room-description">
                        Comfortable room overlooking the sea
                    </p>
                    <p class="price">
                        Price per night: {hotel.HotelInfo.Price.replace(
                            "*",
                            "",
                        )}
                    </p>
                </div>
            </article>
        </div>
    {/if}
    <section class="reviews-section">
        <h5>Reviews</h5>

        <div class="reviews-list">
            {#each hotel.Reviews.slice(0, 10) as review}
                <details class="review-item">
                    <summary class="review-title">
                        {review.Title?.replace("underfined", "")}
                    </summary>
                    <p class="name-date">
                        <strong>{review.Author}</strong> – {review.Date}
                    </p>
                    <p class="review-content">{review.Content}</p>
                </details>
            {/each}
        </div>
    </section>
</div>

<style>
    .page-wrapper {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
    }

    .info {
        background-color: var(--color-neural);
        padding: 0.5em;
        margin: 1em 0em 0em 0em;
        border-radius: 0.5em;
    }

    h2 {
        margin: 0.5em 1em;
        font-size: var(--font-size-extra-large);
    }

    .description {
        margin: 0.5em 1em;
        font-size: var(--font-size-small);
    }

    .hightlights-text {
        margin: 1em 0em 0em 0.5em;
    }

    ul {
        margin: 0.5em 0em 0em 0em;
    }

    :global(.adress address) {
        font-style: normal;
    }

    .adress {
        margin: 1em 0.5em;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 1em;

        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    .main-card {
        border-radius: 0.5em;
        box-shadow: var(--box-shadow);
        border: var(--border);

        @media (min-width: 700px) {
            position: sticky;
            top: 6em;
        }
    }

    .hotel-room-img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 0.5em 0.5em 0em 0em;
    }

    .card-info {
        text-align: center;
        padding: 0em 0.5em 1em 0.5em;
    }

    h3 {
        font-size: var(--font-size-large);
    }

    .order-button {
        width: 100%;
        background-color: var(--color-cta);
        padding: 0.5em;
        color: var(--secondary-color);
        border: none;
        font-size: var(--font-size-medium-small);
        border-radius: 1em;

        &:focus {
            outline: 3px solid var(--color-cta);
            outline-offset: 0.2em;
        }
    }

    .container-rooms {
        display: flex;
        flex-direction: column;
        gap: 1em;

        @media (min-width: 650px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 900px) {
            display: flex;
            flex-direction: row;
        }
    }

    .room-card {
        border-radius: 0.5em;
        box-shadow: var(--box-shadow);
        border: var(--border);
    }

    .room-info {
        text-align: center;
    }

    h4 {
        font-size: var(--font-size-medium);
        margin: 0.5em;
    }

    h5 {
        font-size: var(--font-size-medium-small);
    }

    .reviews-list {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 0em;

        @media (min-width: 700px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1280px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    .review-item {
        list-style: none;
        background-color: var(--color-neural);
        padding: 1em;
        border-radius: 0.5em;
    }

    details summary {
        list-style: none;
    }

    details summary::after {
        content: "Read more";
        display: flex;
        font-weight: var(--font-weight-bold);
        color: var(--primary-color);
        text-decoration: underline;
    }

    details[open] summary::after {
        content: "Read less";
        text-decoration: underline;
    }
</style>
