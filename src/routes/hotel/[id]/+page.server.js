import { error } from '@sveltejs/kit'; // Importeer de error helper

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const { id } = params;

    try {
        const res = await fetch(`https://raw.githubusercontent.com/WillGardella/hotels/master/json/${id}.json`);
        
        if (!res.ok) {
            // Dit is de juiste manier in SvelteKit:
            throw error(404, {
                message: `Hotel met ID ${id} niet gevonden`
            });
        }

        const hotel = await res.json();

        return {
            hotel
        };
    } catch (err) {
        // Als het al een SvelteKit error is (zoals de 404 hierboven), gooi hem dan opnieuw
        if (err.status) throw err;

        // Voor onverwachte fouten (zoals netwerkfouten)
        console.error(`Fout bij laden hotel ${id}:`, err);
        throw error(500, 'Er is iets misgegaan bij het ophalen van de hotelgegevens.');
    }
}