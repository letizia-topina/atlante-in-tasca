import { viennaPhotos, type ViennaPhotoId } from "@/lib/vienna-photos";
import { PhotoGallery } from "./photo-gallery";
type Entry = { id: ViennaPhotoId; caption: string };
const albums = {
  prater: {
    label: "Il Prater, tra luci e altezza",
    note: "L’ingresso, le giostre e lo sguardo dall’alto: il nostro primo pomeriggio viennese.",
    layout: "three",
    photos: [
      {
        id: "prater-ingresso",
        caption: "L’inizio della serata",
      },
      {
        id: "prater-dall-alto",
        caption: "Il Prater ai nostri piedi",
      },
      {
        id: "prater-giostra",
        caption: "Le luci del luna park",
      },
    ],
  },
  rathaus: {
    label: "Rathausplatz, il nostro Natale viennese",
    note: "Il municipio acceso, l’albero e le bancarelle: uno dei ricordi più belli del viaggio.",
    layout: "three",
    photos: [
      {
        id: "rathaus-mercatini",
        caption: "Il municipio e il mercatino",
      },
      {
        id: "rathaus-albero",
        caption: "Sotto le luci dell’albero",
      },
      {
        id: "rathaus-luci",
        caption: "Guardando verso il municipio",
      },
    ],
  },
  "rathaus-ricordi": {
    label: "Noi, tra le luci di Rathausplatz",
    note: "Qualche ritratto da conservare insieme al ricordo della piazza.",
    layout: "three",
    photos: [
      {
        id: "rathaus-ritratto",
        caption: "Tra giostra e municipio",
      },
      {
        id: "rathaus-cuori",
        caption: "Sotto gli alberi illuminati",
      },
      {
        id: "rathaus-cartolina",
        caption: "Una cartolina dalla piazza",
      },
    ],
  },
  "rathaus-dettagli": {
    label: "Le decorazioni da portare a casa",
    note: "Tra gli addobbi e l’ingresso illuminato del mercatino.",
    layout: "pair",
    photos: [
      {
        id: "palline-natalizie",
        caption: "Tra le palline di Natale",
      },
      {
        id: "rathaus-arco",
        caption: "L’arco di luci natalizie",
      },
    ],
  },
  "belvedere-ricordi": {
    label: "I nostri ricordi al Belvedere",
    note: "Le sale, la scalinata e qualche foto durante la visita.",
    layout: "three",
    photos: [
      {
        id: "belvedere-scalinata-ritratto",
        caption: "Sulla scalinata",
      },
      {
        id: "belvedere-giuditta-ritratto",
        caption: "Un ricordo tra le opere",
      },
      {
        id: "belvedere-insieme",
        caption: "Insieme al museo",
      },
    ],
  },
  "belvedere-opere": {
    label: "Le opere del Belvedere",
    note: "Il nostro collage dalle sale del museo, con i dipinti fotografati per intero.",
    layout: "museum-centered",
    photos: [
      {
        id: "belvedere-giuditta",
        caption: "Tra oro e dettagli",
      },
      {
        id: "belvedere-bacio",
        caption: "Il Bacio",
      },
      {
        id: "belvedere-ritratto",
        caption: "Un ritratto tra i colori",
      },
      {
        id: "belvedere-fiori",
        caption: "Figure e fiori",
      },
      {
        id: "belvedere-figure",
        caption: "Le figure e le linee",
      },
      {
        id: "belvedere-paesaggio",
        caption: "Tra gli alberi dipinti",
      },
      {
        id: "belvedere-cavaliere",
        caption: "Un cavaliere nella cornice",
      },
    ],
  },
  "belvedere-sale": {
    label: "Tra le sale del palazzo",
    note: "Anche gli spazi del museo fanno parte del ricordo della visita.",
    layout: "pair",
    photos: [
      {
        id: "belvedere-scultura",
        caption: "Un dettaglio nelle sale",
      },
      {
        id: "belvedere-scalinata",
        caption: "La scalinata del palazzo",
      },
    ],
  },
  "belvedere-giardini": {
    label: "All’aperto, davanti al Belvedere",
    note: "Il giardino e i nostri ritratti, sotto il cielo d’inverno.",
    layout: "three",
    photos: [
      {
        id: "belvedere-giardino",
        caption: "Lo sguardo sul giardino",
      },
      {
        id: "belvedere-giardino-ritratto",
        caption: "Una pausa nel giardino",
      },
      {
        id: "belvedere-giardino-ricordo",
        caption: "Un altro ricordo del palazzo",
      },
    ],
  },
  biblioteca: {
    label: "Tra i libri e le sale dell’Hofburg",
    note: "Scaffali, affreschi e un globo, prima di tornare all’aperto.",
    layout: "centered",
    photos: [
      {
        id: "biblioteca-cupola",
        caption: "Con gli occhi verso l’alto",
      },
      {
        id: "biblioteca-scaffali",
        caption: "Tra gli scaffali",
      },
      {
        id: "biblioteca-sala",
        caption: "La grande sala",
      },
      {
        id: "biblioteca-globo",
        caption: "Un dettaglio da vicino",
      },
      {
        id: "biblioteca-ritratto",
        caption: "Un ricordo tra i libri",
      },
      {
        id: "hofburg-esterno",
        caption: "Di nuovo all’aperto",
      },
    ],
  },
  hundertwasser: {
    label: "Tra le facciate di Hundertwasserhaus",
    note: "Un cambio di colori e forme lungo la nostra passeggiata.",
    layout: "pair",
    photos: [
      {
        id: "hundertwasser-insieme",
        caption: "Noi, davanti alle facciate",
      },
      {
        id: "hundertwasser-facciate",
        caption: "Tra le forme e i colori",
      },
    ],
  },
  "hundertwasser-botteghe": {
    label: "Tra botteghe e dettagli colorati",
    note: "Altri due scorci della nostra sosta in questa parte di Vienna.",
    layout: "pair",
    photos: [
      {
        id: "hundertwasser-botteghe",
        caption: "Curiosando tra le botteghe",
      },
      {
        id: "hundertwasser-passaggio",
        caption: "Un angolo pieno di dettagli",
      },
    ],
  },
  "centro-natale": {
    label: "Il centro vestito a festa",
    note: "Le vie illuminate e i grandi fiocchi sulle facciate.",
    layout: "three",
    photos: [
      {
        id: "centro-luminarie",
        caption: "Camminando sotto le luci",
      },
      {
        id: "centro-fiocco-notte",
        caption: "Il fiocco di sera",
      },
      {
        id: "centro-fiocco",
        caption: "Un dettaglio da ricordare",
      },
    ],
  },
  schonbrunn: {
    label: "Schönbrunn, sotto il cielo d’inverno",
    note: "Il nostro giro all’esterno del palazzo, tra piazzale e mercatino.",
    layout: "three",
    photos: [
      {
        id: "schonbrunn-ritratto",
        caption: "Un ricordo con l’ombrello",
      },
      {
        id: "schonbrunn-mercatino",
        caption: "Tra palazzo e bancarelle",
      },
      {
        id: "schonbrunn-palazzo",
        caption: "Il piazzale del palazzo",
      },
    ],
  },
  "schonbrunn-dettagli": {
    label: "Il Natale davanti a Schönbrunn",
    note: "L’albero, le bancarelle e le decorazioni che abbiamo fotografato.",
    layout: "three",
    photos: [
      {
        id: "schonbrunn-decorazioni",
        caption: "Le decorazioni in vetrina",
      },
      {
        id: "schonbrunn-bancarella",
        caption: "I colori delle bancarelle",
      },
      {
        id: "schonbrunn-albero",
        caption: "L’albero davanti al palazzo",
      },
    ],
  },
  sacher: {
    label: "Una tappa al Café Sacher",
    note: "La facciata e i suoi dettagli natalizi, nelle nostre fotografie.",
    layout: "three",
    photos: [
      {
        id: "sacher-ingresso",
        caption: "Gli addobbi all’ingresso",
      },
      {
        id: "sacher-insegna",
        caption: "L’insegna accesa",
      },
      {
        id: "sacher-facciata",
        caption: "Uno sguardo alla facciata",
      },
    ],
  },
  "sacher-dolci": {
    label: "La nostra pausa dolce",
    note: "Due piatti, una pausa al caldo e il tempo di fermarci.",
    layout: "pair",
    photos: [
      {
        id: "sacher-dolci",
        caption: "Un dolce a testa",
      },
      {
        id: "sacher-tavolo",
        caption: "La nostra pausa al tavolo",
      },
    ],
  },
  "sacher-interni": {
    label: "I dettagli del Café Sacher",
    note: "Le sale e una pagina da sfogliare durante la sosta.",
    layout: "pair",
    photos: [
      {
        id: "sacher-sala",
        caption: "Tra rosso, oro e lampadari",
      },
      {
        id: "sacher-menu",
        caption: "Una pagina al tavolo",
      },
    ],
  },
  "albertina-opere": {
    label: "Le opere dell’Albertina",
    note: "Un collage dei quadri fotografati durante la visita.",
    layout: "museum-centered",
    photos: [
      {
        id: "albertina-ballerine",
        caption: "Le ballerine",
      },
      {
        id: "albertina-blu",
        caption: "Figure nel blu",
      },
      {
        id: "albertina-giallo",
        caption: "Tra giallo e colori",
      },
      {
        id: "albertina-ritratto",
        caption: "Un ritratto dipinto",
      },
      {
        id: "albertina-azzurro",
        caption: "Segni sull’azzurro",
      },
      {
        id: "albertina-rosso",
        caption: "Segni sul rosso",
      },
      {
        id: "albertina-geometrie",
        caption: "Tra le geometrie",
      },
    ],
  },
  "albertina-ricordi": {
    label: "Noi, tra le sale dell’Albertina",
    note: "Altri due ricordi della nostra visita, davanti alle opere.",
    layout: "pair",
    photos: [
      {
        id: "albertina-visita",
        caption: "Davanti alle opere",
      },
      {
        id: "albertina-paesaggio",
        caption: "Un’ultima sosta tra i quadri",
      },
    ],
  },
  "santo-stefano": {
    label: "Dentro Santo Stefano",
    note: "L’ultima visita, con gli occhi rivolti verso le volte.",
    layout: "single",
    photos: [
      {
        id: "santo-stefano-interno",
        caption: "Sotto le volte della cattedrale",
      },
    ],
  },
} satisfies Record<
  string,
  { label: string; note: string; layout: string; photos: Entry[] }
>;
export function ViennaPhotos({ group }: { group: keyof typeof albums }) {
  const album = albums[group];
  return (
    <PhotoGallery
      album={{
        ...album,
        photos: album.photos.map((entry) => ({
          ...viennaPhotos[entry.id],
          caption: entry.caption,
        })),
      }}
    />
  );
}
