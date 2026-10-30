import { tuscanyPhotos, type TuscanyPhotoId } from "@/lib/tuscany-photos";
import { PhotoGallery } from "./photo-gallery";

type PhotoEntry = { id: TuscanyPhotoId; caption: string };
const albums = {
  "pisa-centro": {
    label: "A piedi per Pisa",
    note: "Il centro, uno sguardo verso il cielo e il Lungarno: il nostro giro a piedi.",
    layout: "three",
    photos: [
      { id: "passeggiata-pisa", caption: "Tra le strade del centro" },
      { id: "pisa-ruota", caption: "Uno sguardo verso il cielo" },
      { id: "lungarno", caption: "La luce sul Lungarno" },
    ],
  },
  "pisa-insieme": {
    label: "Noi e la Torre",
    note: "La Torre vista tante volte in fotografia. Questa volta, nella foto ci siamo anche noi.",
    layout: "mixed",
    photos: [
      { id: "torre-di-pisa-ritratto", caption: "Ai piedi della Torre" },
      { id: "insieme-a-pisa", caption: "La nostra cartolina da Pisa" },
    ],
  },
  "pisa-miracoli": {
    label: "Sguardi su Piazza dei Miracoli",
    note: "Dal panorama dall’alto ai dettagli del marmo: i nostri ricordi della piazza.",
    layout: "four",
    photos: [
      { id: "duomo-dall-alto", caption: "Il Duomo dall’alto" },
      { id: "battistero-dettagli", caption: "Le trame del Battistero" },
      {
        id: "battistero-ritratto",
        caption: "Un ricordo davanti al Battistero",
      },
      { id: "torre-e-fontana", caption: "Una sosta accanto alla fontana" },
    ],
  },
  "san-gimignano-borgo": {
    label: "Dentro il borgo",
    note: "Pietra, torri e vicoli: il nostro primo sguardo su San Gimignano.",
    layout: "three",
    photos: [
      { id: "vicoli-san-gimignano", caption: "La strada tra le case" },
      { id: "architetture-san-gimignano", caption: "Pietra e cielo azzurro" },
      { id: "torri-san-gimignano", caption: "Le torri sopra la piazza" },
    ],
  },
  "san-gimignano-colline": {
    label: "Una pausa sulle colline",
    note: "Ci siamo fermati anche qui, tra le mura e il paesaggio toscano.",
    layout: "landscape",
    photos: [
      { id: "panorama-san-gimignano", caption: "Un affaccio sulla Toscana" },
      { id: "affaccio-colline", caption: "Il paesaggio oltre le mura" },
      {
        id: "ritratto-colline",
        caption: "Un ricordo con le colline alle spalle",
      },
    ],
  },
  "san-gimignano-incontri": {
    label: "Incontri lungo la strada",
    note: "Dante tra i vicoli e un piccolo incontro alla finestra.",
    layout: "mixed",
    photos: [
      { id: "dante-san-gimignano", caption: "Dante, nel cuore del borgo" },
      {
        id: "gatto-alla-finestra",
        caption: "Qualcuno ci osserva dalla finestra",
      },
    ],
  },
  "san-gimignano-piazza": {
    label: "Una sosta in piazza",
    note: "La piazza, i tavolini e la nostra pausa da Dondoli, prima di rimetterci in cammino.",
    layout: "pair",
    photos: [
      {
        id: "piazza-san-gimignano",
        caption: "Il tempo di una pausa in piazza",
      },
      { id: "gelateria-dondoli", caption: "La nostra tappa golosa" },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: PhotoEntry[] }
>;

export function TripPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...tuscanyPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
