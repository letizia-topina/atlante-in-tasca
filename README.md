# Atlante in Tasca

A playful Italian travel journal for two, built with Next.js 16.4.3 (the latest stable release at setup), React 19, TypeScript, Tailwind CSS 4, and shadcn/ui. Cream, terracotta, olive, and original vector illustrations give it a warm journal feel.

## Run with Bun

```sh
bun install --frozen-lockfile
bun dev
```

Open http://localhost:3000. Bun 1.4.4 or newer is required. All application scripts explicitly select the Bun runtime. No environment variables, database, or external search service are needed.

```sh
bun test        # Search and metadata checks
bun run lint
bun run typecheck
bun run build
bun start       # Serve the production build
```

## Write a trip

Create `content/trips/your-trip-slug.mdx`. Its filename becomes `/viaggi/your-trip-slug`. Add images to `public/images/` and use their `/images/...` paths.

```mdx
---
title: "Un weekend a Lisbona"
description: "Tram, vicoli e piccoli posti da ricordare."
date: "2026-10-24"
destination: "Lisbona"
country: "Portogallo"
region: "Europa"
duration: 3
cover: "/images/lisbona.jpg"
coverAlt: "Un tram giallo tra le strade di Lisbona"
tags: ["Città", "Weekend"]
featured: false
draft: false
---

Il nostro viaggio comincia qui.

## Il primo giorno

Scrivi in Markdown: titoli, liste, link, citazioni e tabelle sono supportati.

<TravelNote>
Un appunto pratico da tenere in tasca.
</TravelNote>
```

`region` must be `Italia`, `Europa`, or `Mondo`. Dates must be quoted strings in `YYYY-MM-DD` format. Required metadata is validated during the build. `draft: true` excludes an article from listings and public routes. `featured: true` selects the homepage postcard; if several are featured, the newest wins. Articles sort by date. Reading time is automatic.

Only compile MDX written by trusted project authors: MDX can execute code. There is no public upload endpoint or CMS. To publish new articles, add the file and images and rebuild/redeploy the application.

Search runs in the browser and matches article text, titles, descriptions, destinations, countries, and tags, ignoring accents and case. Multiple words must all match; destination filters combine with search. For a very large archive, replace the client-side index with server-side search.

The journal contains seven real stories across Italy and Europe. Shared MDX illustrations `<TuscanyRoute />` and `<TuscanyWeekend />` live in `src/components/travel/tuscany-itinerary.tsx`. The route is a schematic, not a navigation map; it deliberately includes no invented distances or driving times. Shared navigation and footer are in `src/components/site-header.tsx`; palette and layouts are in `src/app/globals.css`. Fonts are bundled locally, with no font-service requests.

## UI and installed skills

shadcn/ui was installed from the terminal using:

```sh
bunx --bun shadcn@latest init -d -y
bunx --bun shadcn@latest add badge card input separator -y
```

The CLI also installed Button. Components live in `src/components/ui/` and use Base UI primitives.

Requested design skills are committed under `.agents/skills/`:

- `better-ui`: https://github.com/jakubkrehel/skills
- `emil-design-eng`: https://github.com/emilkowalski/skills

The original remote skills command encountered missing macOS Xcode command-line tools. Both upstream repositories were downloaded via GitHub archives and installed with `bunx skills add <local-repository> --skill <name> --agent codex --yes`. Future remote CLI updates require working Git (`xcode-select --install` on macOS).

## Illustrations and photographs

The current cover is the couple’s selfie in front of the Tower of Pisa (`/images/toscana/insieme-a-pisa.webp`). `coverPosition` in the MDX frontmatter controls its focal point across the homepage, card, and article. The original SVG illustration is retained as an available asset. There are no stock photos or sample trips. The article includes all 19 personal photographs from the supplied “Pisa e Sangi” folder. Optimized WebP copies live in `public/images/toscana/`; their dimensions and alt text are in `src/lib/tuscany-photos.ts`. RAW originals were converted with macOS `sips`, then resized and encoded with Sharp; orientation is applied and camera metadata is stripped. Originals remain untouched in Downloads. Seven `<TripPhotos group="..." />` blocks in the MDX place the photographs next to their corresponding paragraphs. Grouping, captions, and the keyboard-accessible lightbox live in `src/components/travel/trip-photos.tsx`. Frames preserve original image proportions. The illustrated itinerary remains alongside the photos. The closing `<SouvenirNote places="Pisa · San Gimignano">` block presents the souvenirs as a pinned paper note; its text stays editable and searchable in the MDX.

## Browser verification

With Chrome installed and `bun dev` running, run `bun run test:browser`. It checks the real story, search, the Italy filter, empty results, illustrated itinerary links, removed sample routes, image decoding, desktop/mobile layouts, and navigation. Set `BASE_URL` to test a different local server.

The Amalfi Coast article is `content/trips/costiera-amalfitana.mdx`, with 23 personal photographs in `public/images/costiera/` and metadata in `src/lib/costiera-photos.ts`. `<CostieraPhotos />`, `<CostieraRoute />`, and `<CostieraDays />` provide its albums and three-day itinerary. Both articles reuse `photo-gallery.tsx` for the same frames and accessible lightbox, and `SouvenirNote` for souvenirs. Publication dates are separate from travel dates; no travel dates were supplied.

The third story, `content/trips/puglia-matera.mdx`, covers the couple’s first road trip, with Altamura as a base and stops in Matera (Basilicata), Bari, and Alberobello. It uses `<PugliaRoute />`, `<PugliaDays />`, and `<PugliaPhotos />`. All 32 personal photographs from “Puglia e Matera” are optimized to WebP in `public/images/puglia/`, with dimensions and alt text in `src/lib/puglia-photos.ts`. Ten albums sit under their matching Matera, Bari, Alberobello, and bakery paragraphs; the bakery section has its own three-image album. The cover is the warm panorama of Matera (`matera-luce-sui-sassi.webp`). The original SVG cover remains available as an unused asset. Its publication date is 2026-10-31; exact travel dates were not supplied.

The Paris Christmas story is `content/trips/parigi-natale.mdx`, published under `Europa` and listed on the dedicated `/europa` page. Its 76 photographs are optimized in `public/images/parigi/`, with metadata in `src/lib/paris-photos.ts`. Twenty `<ParisPhotos />` albums include separate museum collages for Louvre, Orangerie, and Orsay; CSS columns preserve each painting’s full image and its lightbox. Gallery assignments were reviewed visually and cross-checked against original photo location metadata where available; public WebP copies do not retain camera/location EXIF. `<ParisOverview />` and `<ParisDays />` present five days without claiming exact walking routes or current admission conditions.

The three latest Paris photographs add Cédric Grolet Opéra (counter and Christmas entrance) and the candy shop. The story and souvenir note include the French sweets; no unconfirmed shop name or pastry purchase was added.

Paris photo corrections: the night portrait on the Arc de Triomphe terrace belongs to the Arc album. The two street portraits featuring the Eiffel Tower sit with the other Eiffel photographs. Rivoli uses the shared two-column grid; the five Eiffel photographs use centered wrapping rows. All 76 photographs remain present once in the article galleries.

Copenhagen and Malmö are separate European stories (`/viaggi/copenaghen`, `/viaggi/malmo`). The third-day section in Copenhagen links to Malmö through `<RelatedTrip />`; Malmö links back to `/viaggi/copenaghen#giorno-3`. Copenhagen’s three-day duration includes the excursion; Malmö is a one-day visit. Copenhagen now uses a personal photograph of Nyhavn as its cover. Malmö now uses a personal photograph of Stortorget; the former illustrated cover remains available as an unused asset. Both narratives use the supplied itinerary and memories, without asserting current prices or general crime/safety guarantees. `nordic-itinerary.tsx` provides their illustrated overview and day plans.

All 25 photographs in the supplied Malmo folder are optimized in `public/images/malmo/`, with metadata in `src/lib/malmo-photos.ts`. Nine `<MalmoPhotos />` albums sit under the matching centre, bridge, church, windmill, and waterfront paragraphs. Portraits remain uncropped and the existing keyboard-accessible lightbox is reused.

All 41 photographs in the supplied Copenhagen folder are optimized in `public/images/copenaghen/`, with metadata in `src/lib/copenaghen-photos.ts`. Fifteen `<CopenhagenPhotos />` albums accompany the matching paragraphs, with natural proportions and the shared accessible lightbox. The HEIC church interior was converted locally before optimization; originals remain untouched.

The Vienna Christmas story is `content/trips/vienna-natale.mdx`, published under Europe on 2026-11-07 (publication date, not a supplied travel date). It uses `<ViennaOverview />`, `<ViennaDays />`, and twenty `<ViennaPhotos />` galleries. The 64 source files in Downloads/Vienna contain two byte-identical duplicates (`IMG_1157.HEIC` and `IMG_1197.HEIC`), so 62 distinct photographs are optimized in `public/images/vienna/`. Belvedere and Albertina paintings have separate museum collages. The cover shows the illuminated Rathausplatz market entrance. All original files remain untouched; public copies have no camera/location EXIF. The souvenir note records two Christmas ornaments from Rathausplatz, magnets and a bookmark. Historical itinerary prices are not presented as current fares.
