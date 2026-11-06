import {
  copenaghenPhotos,
  type CopenhagenPhotoId,
} from "@/lib/copenaghen-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: CopenhagenPhotoId; caption: string };
const albums = {
  "tivoli-lego": {
    label: "Tivoli e una tappa da LEGO",
    note: "L’inizio della nostra passeggiata, tra i giardini e il negozio LEGO.",
    layout: "pair",
    photos: [
      {
        id: "tivoli-ingresso",
        caption: "Davanti a Tivoli",
      },
      {
        id: "lego-negozio",
        caption: "La nostra tappa da LEGO",
      },
    ],
  },
  centro: {
    label: "Camminando verso Nyhavn",
    note: "Vie pedonali, piazze e piccoli scorci lungo il percorso.",
    layout: "centered",
    photos: [
      {
        id: "via-pedonale",
        caption: "Tra le vie del centro",
      },
      {
        id: "piazza-giardini",
        caption: "Una pausa tra i giardini",
      },
      {
        id: "piazza-statua",
        caption: "Uno sguardo alla piazza",
      },
    ],
  },
  nyhavn: {
    label: "Nyhavn, il nostro posto preferito",
    note: "Le facciate colorate, le barche e i riflessi sul canale.",
    layout: "mixed",
    photos: [
      {
        id: "nyhavn-canale",
        caption: "Lungo il canale",
      },
      {
        id: "nyhavn-colori",
        caption: "La nostra cartolina di Copenaghen",
      },
    ],
  },
  "nyhavn-ritratti": {
    label: "Noi, tra i colori di Nyhavn",
    note: "Qualche ritratto e una foto insieme davanti al nostro angolo preferito.",
    layout: "pair",
    photos: [
      {
        id: "nyhavn-ritratto",
        caption: "Una sosta sul canale",
      },
      {
        id: "nyhavn-sorriso",
        caption: "Tra barche e facciate",
      },
      {
        id: "nyhavn-ricordo",
        caption: "Un altro ricordo da qui",
      },
      {
        id: "insieme-nyhavn",
        caption: "La nostra foto insieme",
      },
    ],
  },
  "nyhavn-panorami": {
    label: "Le prospettive del canale",
    note: "Nyhavn cambia con la luce, ma resta uno dei nostri ricordi più belli.",
    layout: "landscape",
    photos: [
      {
        id: "nyhavn-facciate",
        caption: "I colori lungo l’acqua",
      },
      {
        id: "nyhavn-banchina",
        caption: "Passeggiando sulla banchina",
      },
      {
        id: "nyhavn-barca",
        caption: "Una barca davanti alle case",
      },
    ],
  },
  canali: {
    label: "Tra canali e banchine",
    note: "Le prospettive sull’acqua che accompagnano il ricordo della crociera.",
    layout: "centered",
    photos: [
      {
        id: "canale-architetture",
        caption: "L’acqua e la città moderna",
      },
      {
        id: "canale-ritratto",
        caption: "Un ricordo sulla banchina",
      },
      {
        id: "canale-barche",
        caption: "Tra le barche e i ponti",
      },
      {
        id: "canale-mattoni",
        caption: "Le facciate sull’acqua",
      },
      {
        id: "canale-sosta",
        caption: "Una pausa lungo l’acqua",
      },
    ],
  },
  amalienborg: {
    label: "Amalienborg e la guardia",
    note: "Il palazzo, la piazza e i dettagli della nostra visita.",
    layout: "centered",
    photos: [
      {
        id: "amalienborg-palazzo",
        caption: "La piazza del palazzo",
      },
      {
        id: "amalienborg-guardia",
        caption: "La guardia al palazzo",
      },
      {
        id: "amalienborg-statua",
        caption: "Al centro della piazza",
      },
    ],
  },
  "chiesa-marmo": {
    label: "La chiesa di marmo",
    note: "I nostri ritratti all’esterno e lo sguardo verso la cupola.",
    layout: "three",
    photos: [
      {
        id: "chiesa-marmo-ritratto",
        caption: "Davanti alla chiesa",
      },
      {
        id: "chiesa-marmo-ricordo",
        caption: "Un’altra foto prima di entrare",
      },
      {
        id: "chiesa-marmo-interno",
        caption: "Con gli occhi verso la cupola",
      },
    ],
  },
  kastellet: {
    label: "Una passeggiata a Kastellet",
    note: "L’acqua, gli edifici rossi e un altro angolo della città.",
    layout: "pair",
    photos: [
      {
        id: "kastellet-acqua",
        caption: "Lungo il percorso",
      },
      {
        id: "kastellet-case-rosse",
        caption: "Tra gli edifici rossi",
      },
    ],
  },
  mulino: {
    label: "Il mulino di Kastellet",
    note: "Due ricordi tra il verde e le pale del mulino.",
    layout: "mixed",
    photos: [
      {
        id: "kastellet-mulino",
        caption: "Davanti al mulino",
      },
      {
        id: "kastellet-mulino-verde",
        caption: "Una sosta nel verde",
      },
    ],
  },
  sirenetta: {
    label: "La nostra tappa dalla Sirenetta",
    note: "Una foto accanto a uno dei simboli di Copenaghen.",
    layout: "single",
    photos: [
      {
        id: "sirenetta",
        caption: "Un ricordo con la Sirenetta",
      },
    ],
  },
  christiania: {
    label: "Tra i colori di Christiania",
    note: "Insegne, botteghe e piccoli scorci della nostra passeggiata.",
    layout: "centered",
    photos: [
      {
        id: "christiania-pausa",
        caption: "Una pausa durante il giro",
      },
      {
        id: "christiania-insegne",
        caption: "Le insegne colorate",
      },
      {
        id: "christiania-murale",
        caption: "Una bottega del quartiere",
      },
      {
        id: "christiania-strada",
        caption: "Lungo la strada",
      },
      {
        id: "christiania-colori",
        caption: "Tra verde e colori",
      },
      {
        id: "christiania-bancarelle",
        caption: "Tra le bancarelle",
      },
    ],
  },
  alto: {
    label: "Copenaghen dall’alto",
    note: "La vista dalla torre e una foto durante la visita.",
    layout: "mixed",
    photos: [
      {
        id: "torre-ritratto",
        caption: "Un ricordo alla torre",
      },
      {
        id: "copenaghen-panorama",
        caption: "I tetti della città",
      },
    ],
  },
  "ultimi-canali": {
    label: "Ancora un momento lungo i canali",
    note: "Altre due fotografie da portare a casa con noi.",
    layout: "pair",
    photos: [
      {
        id: "canale-ultimo-ritratto",
        caption: "Un’ultima sosta sull’acqua",
      },
      {
        id: "canale-barca-rossa",
        caption: "Una cartolina lungo il canale",
      },
    ],
  },
  sera: {
    label: "Le luci della sera",
    note: "Un’ultima immagine della città, tra tavolini e fili di luci.",
    layout: "single",
    photos: [
      {
        id: "copenaghen-sera",
        caption: "La città si accende",
      },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function CopenhagenPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...copenaghenPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
