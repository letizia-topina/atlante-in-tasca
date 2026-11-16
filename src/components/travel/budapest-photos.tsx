import { budapestPhotos, type BudapestPhotoId } from "@/lib/budapest-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: BudapestPhotoId; caption: string };
const albums = {
  centro: {
    label: "Le prime immagini di Pest",
    note: "Il nostro primo giro, tra strade e tram.",
    layout: "pair",
    photos: [
      {
        id: "pest-carretto",
        caption: "Un dettaglio lungo la strada",
      },
      {
        id: "pest-tram",
        caption: "I tram di Budapest",
      },
    ],
  },
  "ponte-catene": {
    label: "Sul Ponte delle Catene",
    note: "Le strutture del ponte e gli scorci del nostro primo giro.",
    layout: "landscape",
    photos: [
      {
        id: "ponte-catene-torre",
        caption: "Tra le torri e le catene",
      },
      {
        id: "ponte-catene-ingresso",
        caption: "All’ingresso del ponte",
      },
      {
        id: "ponte-catene-struttura",
        caption: "Lungo la passerella",
      },
    ],
  },
  "ponte-ritratti": {
    label: "Noi, sul Ponte delle Catene",
    note: "Qualche ritratto durante la passeggiata sul ponte.",
    layout: "pair",
    photos: [
      {
        id: "ponte-ritratto",
        caption: "Un ricordo sulla passerella",
      },
      {
        id: "ponte-lampione",
        caption: "Una sosta sul ponte",
      },
      {
        id: "ponte-sorriso",
        caption: "Un altro ricordo da qui",
      },
      {
        id: "ponte-prospettiva",
        caption: "Guardando lungo il ponte",
      },
    ],
  },
  parlamento: {
    label: "Il Parlamento, da vicino",
    note: "Le facciate, la cupola e i punti di vista della nostra passeggiata.",
    layout: "centered",
    photos: [
      {
        id: "parlamento-facciata",
        caption: "Il primo sguardo al Parlamento",
      },
      {
        id: "parlamento-cupola",
        caption: "La cupola e i giardini",
      },
      {
        id: "parlamento-dettagli",
        caption: "Tra le facciate",
      },
      {
        id: "parlamento-piazzale",
        caption: "Il piazzale del Parlamento",
      },
      {
        id: "parlamento-passeggiata",
        caption: "Proseguendo la passeggiata",
      },
    ],
  },
  "parlamento-ritratti": {
    label: "Le nostre cartoline dal Parlamento",
    note: "Ritratti e una fotografia insieme davanti al palazzo.",
    layout: "centered",
    photos: [
      {
        id: "parlamento-ritratto",
        caption: "Una foto davanti al palazzo",
      },
      {
        id: "parlamento-sosta",
        caption: "Una pausa accanto alle aiuole",
      },
      {
        id: "parlamento-di-spalle",
        caption: "Guardando verso il palazzo",
      },
      {
        id: "parlamento-ricordo",
        caption: "Un altro ricordo del giro",
      },
      {
        id: "parlamento-insieme",
        caption: "La nostra foto insieme",
      },
      {
        id: "parlamento-sguardo",
        caption: "Lo sguardo verso la cupola",
      },
    ],
  },
  "parlamento-tram": {
    label: "Un tram, un altro scorcio di Pest",
    note: "Altre due immagini della passeggiata nei pressi del Parlamento.",
    layout: "mixed",
    photos: [
      {
        id: "parlamento-alberi",
        caption: "Tra gli alberi del piazzale",
      },
      {
        id: "parlamento-tram",
        caption: "Il tram che attraversa il centro",
      },
    ],
  },
  mattia: {
    label: "La chiesa di Mattia",
    note: "La torre, la facciata e il tetto decorato sotto il cielo di giugno.",
    layout: "centered",
    photos: [
      {
        id: "mattia-torre",
        caption: "La torre della chiesa",
      },
      {
        id: "mattia-tetto",
        caption: "Il tetto e le guglie",
      },
      {
        id: "mattia-ingresso",
        caption: "Davanti all’ingresso",
      },
      {
        id: "mattia-piazza",
        caption: "La piazza davanti alla chiesa",
      },
    ],
  },
  "mattia-ritratti": {
    label: "Davanti alla chiesa di Mattia",
    note: "Due ricordi della nostra tappa a Buda.",
    layout: "mixed",
    photos: [
      {
        id: "mattia-ritratto",
        caption: "Un ritratto davanti alla chiesa",
      },
      {
        id: "mattia-ricordo",
        caption: "Un’altra foto da qui",
      },
    ],
  },
  "bastione-panorami": {
    label: "I panorami dal Bastione dei Pescatori",
    note: "Le torri, i tetti e il Danubio, guardando verso Pest.",
    layout: "pair",
    photos: [
      {
        id: "bastione-torre",
        caption: "Una torre sul panorama",
      },
      {
        id: "bastione-tetti",
        caption: "I tetti ai nostri piedi",
      },
      {
        id: "bastione-danubio",
        caption: "Lo sguardo sul Danubio",
      },
      {
        id: "bastione-panorama",
        caption: "La nostra cartolina di Budapest",
      },
    ],
  },
  "bastione-archi": {
    label: "Tra gli archi del Bastione",
    note: "I ritratti e la nostra foto insieme, affacciati sulla città.",
    layout: "pair",
    photos: [
      {
        id: "bastione-arco-ritratto",
        caption: "Una sosta sotto gli archi",
      },
      {
        id: "bastione-arco-sorriso",
        caption: "Con la città sullo sfondo",
      },
      {
        id: "bastione-insieme",
        caption: "Noi due, al Bastione",
      },
      {
        id: "bastione-arco-ricordo",
        caption: "Un altro ritratto tra gli archi",
      },
    ],
  },
  "bastione-ritratti": {
    label: "Un ricordo sulle terrazze",
    note: "I nostri ritratti, tra le torri e il panorama.",
    layout: "pair",
    photos: [
      {
        id: "bastione-terrazza-ritratto",
        caption: "Sulla terrazza",
      },
      {
        id: "bastione-terrazza-ricordo",
        caption: "Un’altra foto sulle terrazze",
      },
      {
        id: "bastione-parapetto",
        caption: "Tra il parapetto e le torri",
      },
      {
        id: "bastione-citta-ritratto",
        caption: "Con Budapest alle spalle",
      },
    ],
  },
  "bastione-percorso": {
    label: "Il percorso tra le torri",
    note: "Le scalinate e i passaggi della nostra passeggiata.",
    layout: "mixed",
    photos: [
      {
        id: "bastione-passaggio",
        caption: "Un passaggio tra gli archi",
      },
      {
        id: "bastione-scalinate",
        caption: "Tra scalinate e torri",
      },
    ],
  },
  "pausa-buda": {
    label: "Una pausa con vista a Buda",
    note: "Un’altra fotografia del nostro giro, davanti alla chiesa di Mattia.",
    layout: "single",
    photos: [
      {
        id: "buda-pausa",
        caption: "Una pausa davanti alla chiesa",
      },
    ],
  },
  "castello-panorami": {
    label: "Il Danubio dalle terrazze di Buda",
    note: "I ponti, il fiume e le prospettive della città dal percorso del castello.",
    layout: "pair",
    photos: [
      {
        id: "buda-fiume",
        caption: "Il fiume dalla terrazza",
      },
      {
        id: "buda-panorama",
        caption: "I ponti e la città",
      },
      {
        id: "buda-terrazza",
        caption: "Guardando verso Pest",
      },
      {
        id: "buda-ponte-catene",
        caption: "Il Ponte delle Catene dall’alto",
      },
    ],
  },
  "castello-ricordi": {
    label: "Lungo le terrazze del castello",
    note: "Il panorama e un ritratto durante la nostra passeggiata.",
    layout: "pair",
    photos: [
      {
        id: "buda-vista-verticale",
        caption: "Un altro sguardo sul fiume",
      },
      {
        id: "buda-ritratto",
        caption: "Un ricordo dalla terrazza",
      },
    ],
  },
  miniature: {
    label: "Piccole scoperte lungo il cammino",
    note: "Le miniature che abbiamo fotografato durante la nostra caccia al tesoro.",
    layout: "centered",
    photos: [
      {
        id: "miniatura-finestra",
        caption: "Una figura alla finestra",
      },
      {
        id: "miniatura-topolino",
        caption: "Un piccolo incontro sul muro",
      },
      {
        id: "miniatura-sub",
        caption: "Un dettaglio tra le pietre",
      },
      {
        id: "miniatura-monopattino",
        caption: "Una scoperta sul parapetto",
      },
    ],
  },
  vajdahunyad: {
    label: "Il Castello di Vajdahunyad",
    note: "Il ponte, il cortile e le facciate della nostra visita all’esterno.",
    layout: "landscape",
    photos: [
      {
        id: "vajdahunyad-facciata",
        caption: "Il castello sull’acqua",
      },
      {
        id: "vajdahunyad-ponte",
        caption: "Il percorso verso il castello",
      },
      {
        id: "vajdahunyad-ingresso",
        caption: "Tra le torri e il cortile",
      },
    ],
  },
  "vajdahunyad-dettagli": {
    label: "Tra le facciate del castello",
    note: "Due dettagli incontrati lungo il giro a Vajdahunyad.",
    layout: "pair",
    photos: [
      {
        id: "vajdahunyad-cortile",
        caption: "Un angolo del cortile",
      },
      {
        id: "vajdahunyad-dettaglio",
        caption: "Con gli occhi verso l’alto",
      },
    ],
  },
  dracula: {
    label: "La nostra ricerca di Dracula",
    note: "La piccola figura che abbiamo cercato tra le mura di Vajdahunyad.",
    layout: "pair",
    photos: [
      {
        id: "dracula-castello",
        caption: "Una figura tra le mura",
      },
      {
        id: "dracula-dettaglio",
        caption: "Il tempo di guardarla da vicino",
      },
    ],
  },
  eroi: {
    label: "Una tappa in Piazza degli Eroi",
    note: "La piazza e il monumento durante il nostro giro.",
    layout: "landscape",
    photos: [
      {
        id: "piazza-eroi",
        caption: "Il monumento nella piazza",
      },
    ],
  },
  "ruin-bar": {
    label: "Tra i colori dei ruin bar",
    note: "Un interno pieno di oggetti e dettagli da osservare.",
    layout: "single",
    photos: [
      {
        id: "ruin-bar-interno",
        caption: "Un angolo del ruin bar",
      },
    ],
  },
  tramonto: {
    label: "Sulla riva, prima della crociera",
    note: "Due ritratti con il Parlamento nella luce della sera.",
    layout: "pair",
    photos: [
      {
        id: "danubio-tramonto",
        caption: "Guardando verso il Parlamento",
      },
      {
        id: "danubio-tramonto-ritratto",
        caption: "Un ricordo prima di salire a bordo",
      },
    ],
  },
  mercato: {
    label: "Tra i banchi del mercato",
    note: "Le bancarelle e gli oggetti incontrati durante gli ultimi acquisti.",
    layout: "landscape",
    photos: [
      {
        id: "mercato-interno",
        caption: "L’interno del mercato",
      },
      {
        id: "mercato-oggetti",
        caption: "Curiosando tra gli oggetti",
      },
      {
        id: "mercato-tessuti",
        caption: "Tra tessuti e colori",
      },
      {
        id: "mercato-souvenir",
        caption: "Gli ultimi souvenir",
      },
      {
        id: "mercato-scaffali",
        caption: "Le vetrine delle bancarelle",
      },
    ],
  },
  liberta: {
    label: "Sul Ponte della Libertà",
    note: "Le strutture verdi del ponte e il nostro ultimo giro lungo il fiume.",
    layout: "mixed",
    photos: [
      {
        id: "liberta-strutture",
        caption: "Il verde del ponte",
      },
      {
        id: "liberta-panorama",
        caption: "Lo sguardo lungo il ponte",
      },
    ],
  },
  "liberta-ritratti": {
    label: "Noi, sul Ponte della Libertà",
    note: "Due ritratti dell’ultima giornata a Budapest.",
    layout: "pair",
    photos: [
      {
        id: "liberta-ritratto",
        caption: "Un ricordo sul ponte",
      },
      {
        id: "liberta-ricordo",
        caption: "Un’altra foto prima di ripartire",
      },
    ],
  },
  "liberta-miniatura": {
    label: "Un altro piccolo tesoro sul ponte",
    note: "La ricerca delle miniature ci ha accompagnati anche nell’ultimo giro.",
    layout: "single",
    photos: [
      {
        id: "liberta-miniatura",
        caption: "Una miniatura tra i dettagli del ponte",
      },
    ],
  },
  "fat-policeman": {
    label: "Gli ultimi incontri nel centro di Pest",
    note: "Il Fat Policeman e un piccolo orsetto tra i cuori.",
    layout: "pair",
    photos: [
      {
        id: "fat-policeman",
        caption: "Il Fat Policeman",
      },
      {
        id: "orsetto-cuori",
        caption: "Un orsetto tra i cuori",
      },
    ],
  },
  "tel-aviv-cafe": {
    label: "La nostra tappa al Tel Aviv Cafe",
    note: "La facciata del locale dove abbiamo fatto colazione nell’ultima giornata a Budapest.",
    layout: "single",
    photos: [{ id: "tel-aviv-cafe", caption: "L’ingresso del Tel Aviv Cafe" }],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function BudapestPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...budapestPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
