import { costieraPhotos, type CostieraPhotoId } from "@/lib/costiera-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: CostieraPhotoId; caption: string };
const albums = {
  traghetto: {
    label: "La Costiera dal traghetto",
    note: "Il mare come strada, i borghi come orizzonte. E noi, a bordo.",
    layout: "landscape",
    photos: [
      { id: "costa-dal-traghetto", caption: "La costa scorre accanto a noi" },
      { id: "amalfi-dal-mare", caption: "Amalfi, vista dal mare" },
      {
        id: "insieme-sul-traghetto",
        caption: "La nostra cartolina dal traghetto",
      },
    ],
  },
  amalfi: {
    label: "Il nostro primo approdo",
    note: "La piazza, il Duomo e una foto insieme: i nostri ricordi di Amalfi.",
    layout: "landscape",
    photos: [
      { id: "lungomare-amalfi", caption: "Il lungomare, appena arrivati" },
      { id: "duomo-amalfi", caption: "La scalinata del Duomo" },
      { id: "insieme-amalfi", caption: "Noi due ad Amalfi" },
    ],
  },
  positano: {
    label: "Positano, un mosaico sul mare",
    note: "Una casa sopra l’altra, un angolo diverso a ogni passo.",
    layout: "landscape",
    photos: [
      { id: "panorama-positano", caption: "Il panorama che ci ha conquistati" },
      { id: "architetture-positano", caption: "Facciate, campanili e mare" },
      { id: "case-positano", caption: "Le case lungo il pendio" },
    ],
  },
  "positano-ritratti": {
    label: "Fermarsi ogni pochi passi",
    note: "Tra una passeggiata e l’altra, ci siamo tenuti anche questi ricordi.",
    layout: "four",
    photos: [
      { id: "affaccio-positano", caption: "Guardando il borgo" },
      { id: "sorriso-sul-mare", caption: "Un sorriso sul mare" },
      { id: "ritratto-tra-le-case", caption: "Con Positano alle spalle" },
      { id: "guardando-il-mare", caption: "Una pausa all’orizzonte" },
    ],
  },
  "positano-saluti": {
    label: "Ancora uno sguardo a Positano",
    note: "Le barche, la luce e i panorami che ci siamo portati a casa.",
    layout: "landscape",
    photos: [
      { id: "barche-positano", caption: "Le barche davanti alla costa" },
      { id: "ritratto-positano", caption: "Tra gli alberi e il borgo" },
      { id: "luce-positano", caption: "La luce sul nostro viaggio" },
    ],
  },
  "vietri-marina": {
    label: "Il mare di Vietri",
    note: "Prima delle botteghe e dei vicoli, il nostro sguardo verso la marina.",
    layout: "pair",
    photos: [
      { id: "marina-vietri", caption: "La spiaggia e le case sul mare" },
      { id: "molo-vietri", caption: "Il molo e la costa" },
    ],
  },
  "vietri-colori": {
    label: "Tra vicoli e ceramiche",
    note: "A Vietri abbiamo ritrovato i colori anche sulle pareti e nei parapetti.",
    layout: "mixed",
    photos: [
      { id: "vicolo-vietri", caption: "Una scalinata piena di colori" },
      {
        id: "ceramiche-vista-mare",
        caption: "Le ceramiche incontrano il mare",
      },
    ],
  },
  "vietri-belvedere": {
    label: "Un ultimo affaccio sul blu",
    note: "Vietri, i suoi belvedere e gli ultimi ricordi prima del ritorno.",
    layout: "three",
    photos: [
      { id: "mare-vietri", caption: "Il mare dal belvedere" },
      { id: "ritratto-ceramiche", caption: "Tra le ceramiche e il cielo" },
      { id: "ricordo-vietri", caption: "Un’altra cartolina da tenere" },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function CostieraPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...costieraPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
