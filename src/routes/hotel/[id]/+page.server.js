import { error } from '@sveltejs/kit'; 

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {
    const { id } = params;

    try {
        const res = await fetch(`https://raw.githubusercontent.com/WillGardella/hotels/master/json/${id}.json`);
        
        if (!res.ok) {
            throw error(404, {
                message: `Hotel met ID ${id} niet gevonden`
            });
        }

        const hotel = await res.json();

        return {
            hotel
        };
    } catch (err) {
        if (err.status) throw err;

        console.error(`Fout bij laden hotel ${id}:`, err);
        throw error(500, 'Er is iets misgegaan bij het ophalen van de hotelgegevens.');
    }
}