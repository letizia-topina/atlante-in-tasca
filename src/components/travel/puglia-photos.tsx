import { pugliaPhotos, type PugliaPhotoId } from "@/lib/puglia-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: PugliaPhotoId; caption: string };
const albums = {
  "matera-panorami": {
    label: "Matera, case e luce sui Sassi",
    note: "La nostra prima tappa oltre il confine pugliese, tra pietra e panorami.",
    layout: "three",
    photos: [
      { id: "matera-case-in-pietra", caption: "Le case una accanto all’altra" },
      { id: "matera-luce-sui-sassi", caption: "La luce calda sui Sassi" },
      {
        id: "matera-architetture",
        caption: "Archi e pietra lungo la passeggiata",
      },
    ],
  },
  "matera-ricordi": {
    label: "I nostri ricordi di Matera",
    note: "Tra una passeggiata e l’altra, abbiamo tenuto anche queste cartoline.",
    layout: "four",
    photos: [
      { id: "matera-ritratto-sassi", caption: "Un ricordo davanti ai Sassi" },
      { id: "matera-passeggiata", caption: "Camminando tra le case" },
      { id: "matera-ricordo-panorama", caption: "Con Matera alle spalle" },
      { id: "matera-sotto-arco", caption: "Una cornice di pietra" },
    ],
  },
  "bari-citta": {
    label: "Arriviamo a Bari",
    note: "Dai viali della città alla passeggiata nel centro storico.",
    layout: "pair",
    photos: [
      { id: "bari-palme", caption: "Palme e cielo azzurro" },
      { id: "bari-viale", caption: "Le strade della città" },
    ],
  },
  "bari-vecchia": {
    label: "Tra i vicoli di Bari Vecchia",
    note: "Stradine, botteghe e piazze lungo il nostro giro a piedi.",
    layout: "four",
    photos: [
      { id: "bari-vicolo", caption: "Tavolini e muri in pietra" },
      { id: "bari-tra-le-case", caption: "Tra le case del centro" },
      { id: "bari-stradine", caption: "Una strada dietro l’altra" },
      { id: "bari-piazza", caption: "Una sosta in piazza" },
    ],
  },
  "bari-sapori": {
    label: "Nella via delle orecchiette",
    note: "Le orecchiette sui telai e i taralli che abbiamo scelto come souvenir.",
    layout: "pair",
    photos: [
      { id: "bari-orecchiette", caption: "Le orecchiette ad asciugare" },
      { id: "bari-taralli", caption: "I sapori da portare a casa" },
    ],
  },
  "bari-mare": {
    label: "Bari, verso il mare",
    note: "La passeggiata continua tra il lungomare, il porto e i nostri ritratti.",
    layout: "three",
    photos: [
      { id: "bari-porto", caption: "Le barche lungo il porto" },
      { id: "ritratto-lungomare-bari", caption: "Un ricordo sul lungomare" },
      { id: "bari-ruota-ritratto", caption: "Una foto davanti alla ruota" },
    ],
  },
  "alberobello-panorami": {
    label: "Alberobello, un paesaggio di trulli",
    note: "Tetti conici, facciate bianche e le strade della nostra passeggiata.",
    layout: "landscape",
    photos: [
      { id: "alberobello-panorama", caption: "Il panorama dei trulli" },
      { id: "alberobello-tetti", caption: "Pietra e cielo sopra i tetti" },
      { id: "alberobello-vicolo", caption: "La strada tra i trulli" },
    ],
  },
  "alberobello-dettagli": {
    label: "I piccoli dettagli di Alberobello",
    note: "Botteghe, fiori e porte: le cose che abbiamo fotografato lungo il cammino.",
    layout: "four",
    photos: [
      { id: "alberobello-bottega", caption: "Curiosando tra le botteghe" },
      { id: "alberobello-fiori", caption: "Una nota di giallo" },
      { id: "alberobello-dettagli", caption: "Una porta tra i trulli" },
      { id: "alberobello-strada", caption: "Ancora una passeggiata" },
    ],
  },
  "alberobello-ricordi": {
    label: "Noi, tra i trulli",
    note: "Le nostre foto ricordo, prima del rientro ad Altamura.",
    layout: "four",
    photos: [
      { id: "alberobello-ritratto-muretto", caption: "Una sosta sul muretto" },
      { id: "alberobello-ritratto-trullo", caption: "Davanti a un trullo" },
      { id: "alberobello-porta", caption: "Una cornice per il viaggio" },
      { id: "alberobello-insieme", caption: "La nostra cartolina insieme" },
    ],
  },
  "forno-altamura": {
    label: "Il Forno di Santa Caterina",
    note: "Il banco, l’ingresso e il sacchetto dei nostri acquisti: i ricordi più golosi di Altamura.",
    layout: "landscape",
    photos: [
      { id: "forno-banco-focacce", caption: "Le focacce sul banco" },
      { id: "forno-ingresso", caption: "L’ingresso del forno" },
      {
        id: "forno-sacchetto",
        caption: "I nostri acquisti, pronti per il ritorno",
      },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function PugliaPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...pugliaPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
