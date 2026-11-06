import {
  Building2,
  Footprints,
  Ship,
  ShoppingBag,
  TrainFront,
  Utensils,
} from "lucide-react";
type Stop = { icon: typeof Footprints; text: string };
type Day = { title: string; stops: Stop[] };
const copenhagenDays: Day[] = [
  {
    title: "L’arrivo e Nyhavn",
    stops: [
      {
        icon: TrainFront,
        text: "Arriviamo da Fiumicino e raggiungiamo il centro in metro, poi lasciamo i bagagli a casa.",
      },
      {
        icon: ShoppingBag,
        text: "Passiamo nei pressi di Tivoli e ci fermiamo nel negozio LEGO vicino ai giardini.",
      },
      {
        icon: Footprints,
        text: "Piazza del Municipio, Strøget e Magstræde, camminando verso Nyhavn.",
      },
      {
        icon: Ship,
        text: "La crociera sui canali, poi la spesa e la cena a casa.",
      },
    ],
  },
  {
    title: "Tra guardie, canali e quartieri",
    stops: [
      {
        icon: Building2,
        text: "Amalienborg e cambio della guardia, poi la Frederiks Kirke.",
      },
      {
        icon: Footprints,
        text: "Kastellet e il mulino, la Sirenetta e la sua versione geneticamente modificata.",
      },
      {
        icon: Footprints,
        text: "Dopo il pranzo al sacco, Christianshavn, Christiania e la Torre di Christiansborg.",
      },
      {
        icon: Utensils,
        text: "Continuiamo a passeggiare tra i quartieri e concludiamo con la cena da POPL.",
      },
    ],
  },
  {
    title: "Una giornata a Malmö",
    stops: [
      {
        icon: TrainFront,
        text: "Partiamo in treno da Copenaghen per la nostra parentesi in Svezia.",
      },
      {
        icon: Footprints,
        text: "Il centro di Malmö, il castello dall’esterno, i giardini e il lungomare.",
      },
      {
        icon: ShoppingBag,
        text: "Le ultime cartoline e calamite, prima di proseguire verso l’aeroporto per il ritorno.",
      },
    ],
  },
];
function DayCards({ days, label }: { days: Day[]; label: string }) {
  return (
    <div
      className={`weekend-plan ${days.length === 3 ? "weekend-plan--three" : days.length === 1 ? "weekend-plan--single" : ""}`}
      aria-label={label}
    >
      {days.map((day, index) => (
        <section className="day-card" key={day.title}>
          <div className="day-heading">
            <Footprints size={22} strokeWidth={1.5} aria-hidden="true" />
            <span>
              {days.length === 1
                ? "LA NOSTRA GIORNATA"
                : `GIORNO ${String(index + 1).padStart(2, "0")}`}
            </span>
          </div>
          <h3>{day.title}</h3>
          <ol>
            {day.stops.map(({ icon: Icon, text }) => (
              <li key={text}>
                <Icon size={17} aria-hidden="true" />
                <span>{text}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
export function CopenhagenDays() {
  return (
    <DayCards
      days={copenhagenDays}
      label="I nostri tre giorni tra Copenaghen e Malmö"
    />
  );
}
export function CopenhagenOverview() {
  return (
    <figure
      className="route-figure route-figure--nordic"
      aria-labelledby="copenhagen-route-title"
    >
      <div className="figure-heading">
        <span className="eyebrow terracotta">LA NOSTRA PARENTESI DANESE</span>
        <span className="figure-tag">
          <Ship size={14} aria-hidden="true" /> Canali, passeggiate e un treno
          per la Svezia
        </span>
      </div>
      <h2 id="copenhagen-route-title">
        Due giorni a Copenaghen, poi un salto a Malmö.
      </h2>
      <svg
        className="nordic-skyline"
        viewBox="0 0 720 240"
        role="img"
        aria-labelledby="nordic-svg-title"
      >
        <title id="nordic-svg-title">
          Un ricordo illustrato delle case colorate di Nyhavn, dei canali e del
          collegamento con la Svezia
        </title>
        <rect width="720" height="240" fill="#e4ece7" />
        <circle cx="594" cy="48" r="24" fill="#d6b46f" />
        <g stroke="#8b8068" strokeWidth="2">
          <path d="M64 158V70h48v88" fill="#c87e61" />
          <path d="m64 70 24-27 24 27" fill="#b56a52" />
          <path d="M116 158V51h49v107" fill="#d3b263" />
          <path d="m116 51 24-30 25 30" fill="#b79a5f" />
          <path d="M169 158V76h49v82" fill="#89a8a1" />
          <path d="m169 76 24-28 25 28" fill="#6f938a" />
          <path d="M222 158V59h49v99" fill="#d7b69b" />
          <path d="m222 59 24-29 25 29" fill="#b48e73" />
          <g fill="#f4eee0">
            <path d="M77 88h12v16H77zm0 29h12v16H77zm54-47h13v17h-13zm0 31h13v17h-13zm54-6h12v16h-12zm0 28h12v16h-12zm53-43h13v17h-13zm0 29h13v17h-13z" />
          </g>
        </g>
        <path d="M0 174q175-28 360 2t360-2v66H0Z" fill="#b3ccc5" />
        <path
          d="M0 207q180-27 360-2t360-1"
          fill="none"
          stroke="#749b93"
          strokeWidth="2"
        />
        <g stroke="#7e967e" strokeWidth="3" fill="none">
          <path d="M388 164h262m-229 0v-51m169 51v-51m-169 0 84 51 85-51" />
        </g>
        <g
          transform="translate(297 193)"
          stroke="#667d70"
          strokeWidth="2"
          fill="#f9f1dc"
        >
          <path d="M-43 0h86l-11 15h-62z" />
          <path d="M-27 0v-14h55V0m-36-14v-15h16v15" />
        </g>
      </svg>
      <ol
        className="route-stops"
        aria-label="Il nostro viaggio tra Danimarca e Svezia"
      >
        <li>
          <span>GIORNO 1</span>
          <a href="#giorno-1">Nyhavn e la città</a>
          <small>LEGO, vicoli e crociera</small>
        </li>
        <li>
          <span>GIORNO 2</span>
          <a href="#giorno-2">I quartieri danesi</a>
          <small>Palazzi, canali e passeggiate</small>
        </li>
        <li>
          <span>GIORNO 3</span>
          <a href="#giorno-3">Malmö, in Svezia</a>
          <small>Un altro racconto da aprire</small>
        </li>
      </ol>
      <figcaption>
        Il nostro soggiorno con base a Copenaghen e l’escursione del terzo
        giorno a Malmö. L’illustrazione è un ricordo del viaggio, non una mappa
        degli spostamenti.
      </figcaption>
    </figure>
  );
}
const malmoDay: Day[] = [
  {
    title: "Da Copenaghen a Malmö",
    stops: [
      {
        icon: TrainFront,
        text: "Raggiungiamo Malmö in treno, per la terza giornata del nostro viaggio.",
      },
      {
        icon: Footprints,
        text: "Stortorget, Södergatan e le scarpe degli artisti sul ponte Davidshallsbron.",
      },
      {
        icon: Building2,
        text: "Visitiamo la chiesa di San Pietro e osserviamo il castello dall’esterno.",
      },
      {
        icon: Footprints,
        text: "Giardini, mulino e lungomare, tra la vista verso il ponte e il Turning Torso.",
      },
      {
        icon: Utensils,
        text: "Una pausa con il pranzo al sacco, poi le ultime calamite e cartoline prima del ritorno.",
      },
    ],
  },
];
export function MalmoDay() {
  return <DayCards days={malmoDay} label="La nostra giornata a Malmö" />;
}
