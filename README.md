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

The journal contains two real stories: Pisa/San Gimignano and the Amalfi Coast. Shared MDX illustrations `<TuscanyRoute />` and `<TuscanyWeekend />` live in `src/components/travel/tuscany-itinerary.tsx`. The route is a schematic, not a navigation map; it deliberately includes no invented distances or driving times. Shared navigation and footer are in `src/components/site-header.tsx`; palette and layouts are in `src/app/globals.css`. Fonts are bundled locally, with no font-service requests.

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
