# TestCase Hotelwebsite Recharted
Platform voor het bekijken van hotels en pakketreizen. Gebruikers kunnen hotels doorzoeken, bekijken en informatie over prijzen en faciliteiten zien.
- Lijstweergave van hotels met prijsrange en korte beschrijving.
- Paginering voor meerdere hotels.
- Detailpagina’s met hotelinformatie.

## Inhoudsopgave

  * [Installatie](#installatie)
  * [Technische stack](#technische-stack)
  * [Design](#design)
  * [Kenmerken](#kenmerken)
  * [Structuur](#structuur)

  ## Installatie
1. Open een code editor programma
2. Clone de code van de repository main branch en zorg dat je 'contribute for my own purposes' aanklikt.
3. Gebruik de main branche of maak een feature branche aan.
4. Type in "npm install" zodat je de nodige dependencies download.
5. Type in "npm run dev" of "npm run dev -- --open" zodat het project kan gestart worden.
6. Klik op de local host als je npm run dev hebt gedaan en je ziet het project of het project start automatische op met npm run -- --open.

## Technische stack
![SvelteKit 5](https://img.shields.io/badge/SvelteKit-5-FF3E00?style=flat&logo=svelte&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-4A4A55?style=flat&logo=svelte&logoColor=FF3E00)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)


  ## Design
  Voor het project was al een wireframe aanwezig deze heb ik gebruikt voor het ontwerp.<br>
  Ik heb gekeken naar kleuren, font, font-size, border-radius, border en box-shadow die heb ik in een css bestand gezet als custom properties. <br>
<img width="395" height="514" alt="Scherm­afbeelding 2026-01-27 om 14 07 06" src="https://github.com/user-attachments/assets/cb53c584-47b9-44fe-92fa-f7c8281087a8" />

## Kenmerken
**Hotels:**
Haalt de gegevens op vanuit JSON-bestanden die server-side beschikbaar zijn. Toont de hotels.
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L2-L3
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L17
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L31

**Paginering:**
Gebruikt goto uit SvelteKit voor navigatie tussen pagina’s. Maakt de buttons voor de pagina's. Bewerkend hoeveel pagina die moet laden en hoeveel per pagina er komen.
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L4
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L53-L122
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.server.js#L5-L8
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.server.js#L32-L42

**Responsive:**
Gebuikt media queries om het responsive te maken. Begin met mobile first.
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/hotel/%5Bid%5D/%2Bpage.svelte#L251-L265

**Svelte head:**
Gebruik dit om de titel te laten zien in de browser bij het kopje.
https://github.com/nadiachaja/Maykin-hotel-frontendopdracht/blob/873ac2b6bdad4a12db3a05641af646b25ed52307/src/routes/%2Bpage.svelte#L10-L13

## Structuur
```md
/src
├── /routs
│   ├── page.svelte
│   ├── page.server.js
│   ├── layout.svelte
│   └── /hotel
│       ├── page.svelte
│       └── page.server.js
└── /lib
    └── /assets

