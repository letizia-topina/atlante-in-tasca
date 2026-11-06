import { malmoPhotos, type MalmoPhotoId } from "@/lib/malmo-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: MalmoPhotoId; caption: string };
const albums = {
  "centro-panorami": {
    label: "Stortorget, il nostro primo sguardo",
    note: "La piazza e le sue facciate, nelle prospettive che abbiamo fotografato durante il giro.",
    layout: "pair",
    photos: [
      {
        id: "stortorget-arrivo",
        caption: "L’arrivo nella piazza",
      },
      {
        id: "stortorget-panorama",
        caption: "Uno sguardo d’insieme",
      },
      {
        id: "stortorget-passeggiata",
        caption: "Di nuovo tra le facciate",
      },
      {
        id: "stortorget-luce",
        caption: "I colori di Stortorget",
      },
    ],
  },
  "centro-ritratti": {
    label: "I nostri ricordi in centro",
    note: "Tra le passeggiate in piazza abbiamo tenuto anche qualche ritratto.",
    layout: "three",
    photos: [
      {
        id: "ritratto-piazza",
        caption: "Un ritratto nella piazza",
      },
      {
        id: "ritratto-statua",
        caption: "Una foto davanti alla statua",
      },
      {
        id: "ritratto-facciate",
        caption: "Tra i fiori e le facciate",
      },
    ],
  },
  "centro-dettagli": {
    label: "Tra le vie di Malmö",
    note: "Sculture, edifici e indicazioni incontrati lungo la passeggiata.",
    layout: "centered",
    photos: [
      {
        id: "sculture-centro",
        caption: "Le sculture lungo la strada",
      },
      {
        id: "facciata-mattoni",
        caption: "Una facciata in mattoni",
      },
      {
        id: "indicazioni-parco",
        caption: "Le indicazioni lungo il nostro giro",
      },
    ],
  },
  ponte: {
    label: "Le scarpe sul ponte Davidshallsbron",
    note: "Le scarpe degli artisti, il canale e una pausa lungo l’acqua.",
    layout: "landscape",
    photos: [
      {
        id: "ponte-scarpe",
        caption: "Le scarpe lungo il ponte",
      },
      {
        id: "scarpe-dettaglio",
        caption: "Un dettaglio da vicino",
      },
      {
        id: "ritratto-canale",
        caption: "Un ricordo accanto al canale",
      },
    ],
  },
  "san-pietro": {
    label: "La chiesa di San Pietro",
    note: "La torre in mattoni e la chiesa tra le strade della città.",
    layout: "pair",
    photos: [
      {
        id: "san-pietro-torre",
        caption: "La torre della chiesa",
      },
      {
        id: "san-pietro-strada",
        caption: "San Pietro tra le facciate",
      },
    ],
  },
  mulino: {
    label: "Tra il verde e il mulino",
    note: "Una passeggiata all’aperto e i nostri ritratti davanti al mulino.",
    layout: "landscape",
    photos: [
      {
        id: "passeggiata-verde",
        caption: "Il percorso tra il verde e il mare",
      },
      {
        id: "mulino-ritratto",
        caption: "Un ricordo davanti al mulino",
      },
      {
        id: "mulino-ricordo",
        caption: "Un’altra foto tra le sue pale",
      },
    ],
  },
  lungomare: {
    label: "Malmö, affacciata sul mare",
    note: "Gli scogli, il paesaggio e le nostre soste sul lungomare.",
    layout: "landscape",
    photos: [
      {
        id: "lungomare-panorama",
        caption: "Gli scogli e l’orizzonte",
      },
      {
        id: "lungomare-di-spalle",
        caption: "Guardando verso il mare",
      },
      {
        id: "lungomare-sosta",
        caption: "Il tempo di una pausa",
      },
    ],
  },
  "turning-torso": {
    label: "Il Turning Torso, tra acqua e verde",
    note: "Un’altra prospettiva di Malmö, con il suo profilo moderno sullo sfondo.",
    layout: "mixed",
    photos: [
      {
        id: "salvagente-torso",
        caption: "Un dettaglio con il grattacielo sullo sfondo",
      },
      {
        id: "turning-torso-panorama",
        caption: "Il Turning Torso oltre il prato e l’acqua",
      },
    ],
  },
  "ricordi-mare": {
    label: "Noi, sul lungomare",
    note: "Un ricordo insieme e una foto davanti al mare, prima di continuare il viaggio.",
    layout: "mixed",
    photos: [
      {
        id: "insieme-lungomare",
        caption: "La nostra cartolina insieme",
      },
      {
        id: "ritratto-scultura-mare",
        caption: "Una pausa davanti al mare",
      },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function MalmoPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...malmoPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
