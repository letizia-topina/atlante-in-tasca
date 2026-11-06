import { parisPhotos, type ParisPhotoId } from "@/lib/paris-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: ParisPhotoId; caption: string };
const albums = {
  "luci-natale": {
    label: "Parigi, vestita per Natale",
    note: "Gli Champs-Élysées, le vetrine e le luci delle nostre prime passeggiate.",
    layout: "three",
    photos: [
      {
        id: "natale-vetrine",
        caption: "Le vetrine illuminate",
      },
      {
        id: "natale-dior",
        caption: "Decorazioni tra le facciate",
      },
      {
        id: "natale-ritratto",
        caption: "Una foto tra le luci",
      },
    ],
  },
  arco: {
    label: "La nostra prima sera all’Arco di Trionfo",
    note: "Una prima cartolina da Parigi, insieme.",
    layout: "four",
    photos: [
      {
        id: "arco-insieme",
        caption: "Noi due all’Arco di Trionfo",
      },
      {
        id: "arco-ritratto",
        caption: "Una foto davanti all’Arco",
      },
      {
        id: "parigi-notte-insieme",
        caption: "Noi due in cima all’Arco di Trionfo",
      },
      {
        id: "arco-cartolina",
        caption: "Una cartolina, la città sullo sfondo",
      },
    ],
  },
  "louvre-esterno": {
    label: "L’arrivo al Louvre",
    note: "La piramide, il cortile e l’inizio della nostra visita.",
    layout: "three",
    photos: [
      {
        id: "louvre-piramide",
        caption: "La piramide nel cortile",
      },
      {
        id: "louvre-cortile",
        caption: "Un altro sguardo al Louvre",
      },
      {
        id: "louvre-ritratto-esterno",
        caption: "Una foto davanti alla piramide",
      },
    ],
  },
  "louvre-sale": {
    label: "Dentro le sale del Louvre",
    note: "Cortili coperti, scalinate e i nostri ritratti nel museo.",
    layout: "museum",
    photos: [
      {
        id: "louvre-cortile-interno",
        caption: "Il cortile sotto la vetrata",
      },
      {
        id: "louvre-vetrata-ritratto",
        caption: "Tra le sale del museo",
      },
      {
        id: "louvre-scalinata",
        caption: "La grande scalinata",
      },
      {
        id: "louvre-scalinata-ritratto",
        caption: "Un ricordo sulle scale",
      },
      {
        id: "louvre-ritratto-sala",
        caption: "Una pausa tra le sale",
      },
    ],
  },
  "louvre-opere": {
    label: "Le opere del Louvre",
    note: "Le nostre fotografie di dipinti e sculture, raccolte nello stesso collage.",
    layout: "museum",
    photos: [
      {
        id: "louvre-antichita",
        caption: "Le antichità del museo",
      },
      {
        id: "louvre-scultura-dettaglio",
        caption: "Un dettaglio della scultura",
      },
      {
        id: "louvre-scultura",
        caption: "Una seconda prospettiva",
      },
      {
        id: "louvre-scultura-finestra",
        caption: "La scultura davanti alla finestra",
      },
      {
        id: "louvre-scultura-luce",
        caption: "Tra marmo e luce",
      },
      {
        id: "louvre-nike",
        caption: "La Nike di Samotracia",
      },
      {
        id: "louvre-incoronazione",
        caption: "L’incoronazione di Napoleone",
      },
      {
        id: "louvre-dipinto-insieme",
        caption: "Noi due davanti al dipinto",
      },
      {
        id: "louvre-liberta",
        caption: "La Libertà che guida il popolo",
      },
    ],
  },
  tuileries: {
    label: "Una pausa alle Tuileries",
    note: "Le sedie del giardino e le facciate intorno a noi, durante la passeggiata.",
    layout: "three",
    photos: [
      {
        id: "tuileries-ritratto",
        caption: "Una pausa in giardino",
      },
      {
        id: "tuileries-ricordo",
        caption: "Il nostro ricordo alle Tuileries",
      },
      {
        id: "parigi-facciate",
        caption: "Le facciate lungo il nostro giro",
      },
    ],
  },
  mercatini: {
    label: "Il Natale tra gli chalet",
    note: "Un giro tra le bancarelle delle Tuileries.",
    layout: "pair",
    photos: [
      {
        id: "mercatino-ingresso",
        caption: "L’ingresso del mercatino",
      },
      {
        id: "mercatino-chalet",
        caption: "Uno chalet vestito a festa",
      },
    ],
  },
  eiffel: {
    label: "La Torre Eiffel, da vicino",
    note: "La Torre tra le strade e i nostri ritratti durante la passeggiata.",
    layout: "centered",
    photos: [
      {
        id: "eiffel-ritratto",
        caption: "Un ricordo ai piedi della Torre",
      },
      {
        id: "eiffel-passeggiata",
        caption: "Una foto lungo il nostro giro",
      },
      {
        id: "parigi-vie-ritratto",
        caption: "La Torre tra le facciate",
      },
      {
        id: "parigi-vie-ricordo",
        caption: "Un altro ricordo con la Torre",
      },
      {
        id: "eiffel-tra-le-case",
        caption: "La Torre incorniciata dalle case",
      },
    ],
  },
  montmartre: {
    label: "Montmartre, tra vicoli e mulini",
    note: "Le strade che abbiamo percorso, con le decorazioni di Natale e i nostri ricordi.",
    layout: "mosaic",
    photos: [
      {
        id: "montmartre-piazza",
        caption: "Le decorazioni tra i locali della piazza",
      },
      {
        id: "montmartre-botteghe",
        caption: "Tra le botteghe del quartiere",
      },
      {
        id: "montmartre-sacro-cuore",
        caption: "Il Sacré-Cœur tra le strade",
      },
      {
        id: "montmartre-mulino",
        caption: "Il Moulin de la Galette",
      },
      {
        id: "pigalle-moulin-rouge",
        caption: "Un ricordo davanti al Moulin Rouge",
      },
    ],
  },
  "senna-notte": {
    label: "La nostra Parigi di notte",
    note: "La Torre Eiffel illuminata sulla Senna, tra i riflessi della città.",
    layout: "single",
    photos: [
      {
        id: "eiffel-notte",
        caption: "La Torre Eiffel accesa sul fiume",
      },
    ],
  },
  orangerie: {
    label: "Le opere dell’Orangerie",
    note: "Le Ninfee e un nostro ricordo nelle sale: un collage tutto dedicato all’Orangerie.",
    layout: "museum",
    photos: [
      {
        id: "orangerie-ninfee",
        caption: "Le Ninfee lungo la parete",
      },
      {
        id: "orangerie-ninfee-blu",
        caption: "Un altro sguardo alle Ninfee",
      },
      {
        id: "orangerie-ritratto",
        caption: "Dentro il paesaggio dipinto",
      },
    ],
  },
  opera: {
    label: "Dentro l’Opéra Garnier",
    note: "Scale, soffitti e decorazioni: ci siamo fermati a guardare anche verso l’alto.",
    layout: "mosaic",
    photos: [
      {
        id: "opera-ritratto",
        caption: "Un ritratto tra le decorazioni",
      },
      {
        id: "opera-scale-ritratto",
        caption: "Sulla scalinata dell’Opéra",
      },
      {
        id: "opera-dettagli",
        caption: "I dettagli delle sale",
      },
      {
        id: "opera-soffitto",
        caption: "Lo sguardo verso il soffitto",
      },
      {
        id: "opera-insieme",
        caption: "Il nostro ricordo insieme",
      },
    ],
  },
  lafayette: {
    label: "Natale alle Galeries Lafayette",
    note: "Le decorazioni sotto la cupola e una vetrina di macarons.",
    layout: "pair",
    photos: [
      {
        id: "lafayette-natale",
        caption: "L’allestimento di Natale sotto la cupola",
      },
      {
        id: "laduree-macarons",
        caption: "I colori dei macarons",
      },
    ],
  },
  "notre-dame": {
    label: "Intorno a Notre-Dame",
    note: "La facciata, l’interno e i nostri ricordi sull’Île de la Cité e lungo la passeggiata.",
    layout: "four",
    photos: [
      {
        id: "notre-dame-facciata",
        caption: "La facciata di Notre-Dame",
      },
      {
        id: "notre-dame-interno",
        caption: "L’interno della cattedrale",
      },
      {
        id: "notre-dame-ritratto",
        caption: "Un ricordo con Notre-Dame alle spalle",
      },
      {
        id: "shakespeare-libreria",
        caption: "La vetrina di Shakespeare and Company",
      },
    ],
  },
  "soste-golose": {
    label: "Le nostre soste golose",
    note: "La vetrina della boulangerie e il nostro piccolo assaggio.",
    layout: "pair",
    photos: [
      {
        id: "boulangerie-vetrina",
        caption: "Le sfoglie in vetrina",
      },
      {
        id: "parigi-spuntino",
        caption: "Il momento dell’assaggio",
      },
    ],
  },
  orsay: {
    label: "Le opere del Musée d’Orsay",
    note: "Dipinti e sculture fotografati a Orsay, riuniti nello stesso collage.",
    layout: "museum",
    photos: [
      {
        id: "orsay-ballerina",
        caption: "La piccola ballerina",
      },
      {
        id: "orsay-dipinto-sala",
        caption: "Uno dei dipinti della visita",
      },
      {
        id: "orsay-danza",
        caption: "Una scena di danza",
      },
      {
        id: "orsay-ritratto-dipinto",
        caption: "Un ritratto tra le opere",
      },
      {
        id: "orsay-notte-stellata",
        caption: "Le luci dipinte sul fiume",
      },
      {
        id: "orsay-autoritratto",
        caption: "Un autoritratto di Van Gogh",
      },
      {
        id: "orsay-camera",
        caption: "La camera dipinta da Van Gogh",
      },
      {
        id: "orsay-figura-paesaggio",
        caption: "Una figura nel paesaggio",
      },
      {
        id: "orsay-colori",
        caption: "Colori e movimento sulla tela",
      },
      {
        id: "orsay-campo",
        caption: "Un paesaggio tra le opere",
      },
      {
        id: "orsay-ballo",
        caption: "Il ballo e la folla nel dipinto",
      },
    ],
  },
  "sainte-chapelle": {
    label: "Le vetrate della Sainte-Chapelle",
    note: "La luce tra le vetrate e una foto insieme, prima di continuare il giro.",
    layout: "pair",
    photos: [
      {
        id: "sainte-chapelle-vetrate",
        caption: "Lo sguardo verso le vetrate",
      },
      {
        id: "sainte-chapelle-insieme",
        caption: "Noi due nella Sainte-Chapelle",
      },
    ],
  },
  rivoli: {
    label: "Dentro il 59 Rivoli",
    note: "Pareti, scale e opere del nostro giro tra gli atelier.",
    layout: "pair",
    photos: [
      {
        id: "rivoli-scale",
        caption: "Le scale dipinte",
      },
      {
        id: "rivoli-parete",
        caption: "Una parete piena di opere",
      },
      {
        id: "rivoli-atelier",
        caption: "Uno degli spazi degli artisti",
      },
      {
        id: "rivoli-dettaglio",
        caption: "Un dettaglio tra i colori",
      },
    ],
  },
  "cedric-grolet": {
    label: "La nostra tappa da Cédric Grolet",
    note: "Il banco dei dolci e l’ingresso vestito a festa: un altro ricordo goloso di Parigi.",
    layout: "pair",
    photos: [
      { id: "cedric-grolet-vetrina", caption: "I dolci dietro la vetrina" },
      {
        id: "cedric-grolet-ingresso",
        caption: "Cédric Grolet Opéra, in versione natalizia",
      },
    ],
  },
  caramelle: {
    label: "Il negozio delle nostre caramelle francesi",
    note: "Tra confezioni e scatole colorate, abbiamo scelto anche un souvenir da assaggiare.",
    layout: "single",
    photos: [
      {
        id: "negozio-caramelle",
        caption: "La nostra sosta per le caramelle francesi",
      },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function ParisPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...parisPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
