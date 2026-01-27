/** @type {import('./$types').PageServerLoad} */
export const ssr = true;
export async function load({ fetch, url }) {

    const page = Number(url.searchParams.get('page')) || 1; //huidige pagina bepalen
  
    const limit = 8;   //hoeveel hotels op een pagina mogen
    const offset = (page - 1) * limit; //op welke pagina je begint
  
    //haalt de json bestanden op 
    const hotelIds = [
      100407, 100504, 100505, 100507, 100508, 100509,
      100527, 100537, 100538, 100540, 100542, 100544,
      100547, 100554, 100560, 100561, 100562, 100564
    ];
  
    const fetchPromises = hotelIds.map(async (id) => {
      try {
        const res = await fetch(`https://raw.githubusercontent.com/WillGardella/hotels/master/json/${id}.json`); //data ophalen
  
        if (!res.ok) return null;
        return await res.json();
    } 
      catch {
        return null;
      }
    });
  
    const allResults = await Promise.all(fetchPromises);
    const hotels = allResults.filter(Boolean);
  
    const totalHotels = hotels.length;
    const totalPages = Math.ceil(totalHotels / limit); //aantal pagina's berekenen
  
    const paginatedHotels = hotels.slice(offset, offset + limit); //aantal pagina's
  
    return {
      hotels: paginatedHotels,
      page,
      totalPages,
      totalHotels
    };
  }