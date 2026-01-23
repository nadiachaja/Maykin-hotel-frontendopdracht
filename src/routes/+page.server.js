/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {

    const hotelIds = [100407, 100504, 100505, 100507, 100508, 100509, 100513]; 

    const fetchPromises = hotelIds.map(async (id) => {
        try {
            const res = await fetch(`https://raw.githubusercontent.com/WillGardella/hotels/master/json/${id}.json`);
            
            if (!res.ok) {
                console.error(`Hotel ${id} niet gevonden`);
                return null;
            }

            return await res.json();
        } catch (err) {
            console.error(`Fout bij laden hotel ${id}:`, err);
            return null;
        }
    });

    const allResults = await Promise.all(fetchPromises);
    
    const hotels = allResults.filter(h => h !== null);

    return {
        hotels: hotels
    };
}