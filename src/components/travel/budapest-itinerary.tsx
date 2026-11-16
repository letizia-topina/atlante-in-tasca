import Image from "next/image";
import {
  Building2,
  Coffee,
  Footprints,
  Search,
  Ship,
  TrainFront,
} from "lucide-react";

const days = [
  {
    title: "Pest e il primo sguardo sul fiume",
    icon: Building2,
    stops: [
      {
        icon: TrainFront,
        text: "Partiamo da Fiumicino la mattina e raggiungiamo il centro di Budapest. Pranzo al sacco e check-in nel pomeriggio.",
      },
      {
        icon: Footprints,
        text: "Passeggiamo tra Ponte delle Catene, Parlamento dall’esterno e Scarpe sulla riva del Danubio.",
      },
      {
        icon: Building2,
        text: "Visitiamo la Basilica di Santo Stefano verso sera e rientriamo per cenare a casa.",
      },
    ],
  },
  {
    title: "Buda e il Danubio al tramonto",
    icon: Ship,
    stops: [
      {
        icon: Building2,
        text: "Bastione dei Pescatori, chiesa di Mattia e spazi esterni del Castello di Buda, con una pausa per il pranzo al sacco.",
      },
      {
        icon: Search,
        text: "Cerchiamo le miniature lungo il percorso. Vajdahunyad, la statuetta di Dracula, Piazza degli Eroi e i ruin bar.",
      },
      {
        icon: Ship,
        text: "Ceniamo fuori vicino all’imbarco e alle 20:30 partiamo per la nostra crociera di giugno sul Danubio.",
      },
    ],
  },
  {
    title: "Colazione e ultimi piccoli tesori",
    icon: Coffee,
    stops: [
      {
        icon: Coffee,
        text: "Facciamo colazione al Tel Aviv Cafe, nel quartiere ebraico dove abbiamo alloggiato.",
      },
      {
        icon: Footprints,
        text: "Ultimi acquisti al mercato e passeggiata sul Ponte della Libertà, continuando la ricerca delle miniature.",
      },
      {
        icon: Search,
        text: "Un ultimo giro nel quartiere ebraico e dal Fat Policeman, poi raggiungiamo l’aeroporto.",
      },
    ],
  },
];

export function BudapestDays() {
  return (
    <div
      className="weekend-plan weekend-plan--three"
      aria-label="Il nostro itinerario di tre giorni a Budapest"
    >
      {days.map((day, index) => (
        <section className="day-card" key={day.title}>
          <div className="day-heading">
            <day.icon size={23} strokeWidth={1.5} aria-hidden="true" />
            <span>GIORNO {String(index + 1).padStart(2, "0")}</span>
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

export function BudapestOverview() {
  return (
    <figure className="route-figure" aria-labelledby="budapest-overview-title">
      <div className="figure-heading">
        <span className="eyebrow terracotta">
          LA NOSTRA PARENTESI UNGHERESE
        </span>
        <span className="figure-tag">
          <Ship size={14} aria-hidden="true" /> Due sponde, tante sorprese
        </span>
      </div>
      <h2 id="budapest-overview-title">
        Tre giorni tra Buda, Pest e un tramonto sul Danubio.
      </h2>
      <Image
        className="route-illustration"
        src="/images/budapest-danubio.svg"
        width={1200}
        height={600}
        alt="Un ricordo illustrato del Parlamento, di un ponte e di una barca sul Danubio al tramonto"
      />
      <ol className="route-stops" aria-label="Le tre giornate a Budapest">
        {[
          ["Pest e il fiume", "Parlamento e Santo Stefano"],
          ["Buda e la crociera", "Panorami, miniature e Danubio"],
          ["Gli ultimi ricordi", "Colazione, mercato e passeggiate"],
        ].map(([title, note], index) => (
          <li key={title}>
            <span>GIORNO {String(index + 1).padStart(2, "0")}</span>
            <a href={`#giorno-${index + 1}`}>{title}</a>
            <small>{note}</small>
          </li>
        ))}
      </ol>
      <figcaption>
        Il nostro itinerario di giugno, con base nel quartiere ebraico.
        L’illustrazione raccoglie i ricordi del viaggio.
      </figcaption>
    </figure>
  );
}

export function BudapestTreasure() {
  return (
    <figure className="route-figure" aria-labelledby="budapest-treasure-title">
      <div className="figure-heading">
        <span className="eyebrow terracotta">PICCOLE SCOPERTE IN CITTÀ</span>
        <span className="figure-tag">
          <Search size={14} aria-hidden="true" /> La nostra caccia al tesoro
        </span>
      </div>
      <h2 id="budapest-treasure-title">
        Una mappa, una miniatura e un sorriso inatteso.
      </h2>
      <svg
        className="route-illustration"
        viewBox="0 0 720 190"
        role="img"
        aria-labelledby="budapest-treasure-svg-title"
      >
        <title id="budapest-treasure-svg-title">
          Un percorso illustrato tra una mappa, una piccola statuetta e il
          sassolino con scritto smile
        </title>
        <path
          d="M116 101C231 26 278 171 364 104S498 31 604 99"
          fill="none"
          stroke="#b99a71"
          strokeWidth="3"
          strokeDasharray="5 9"
          strokeLinecap="round"
        />
        <g
          transform="translate(65 41)"
          stroke="#87957b"
          strokeWidth="3"
          strokeLinejoin="round"
        >
          <path
            d="M0 13L34 0L68 13L102 0V103L68 116L34 103L0 116Z"
            fill="#e8dfc7"
          />
          <path d="M34 0V103M68 13V116" fill="none" />
          <path
            d="M46 44q0-18 16-18t16 18q0 13-16 29q-16-16-16-29Z"
            fill="#be7a5c"
            stroke="none"
          />
          <circle cx="62" cy="42" r="5" fill="#f5eedc" />
        </g>
        <g transform="translate(326 39)" stroke="#9c805c" strokeWidth="3">
          <path d="M9 114H76V128H9Z" fill="#d1c2a4" />
          <circle cx="43" cy="25" r="18" fill="#b99662" />
          <path d="M21 101V62q22-23 44 0v39Z" fill="#b99662" />
          <path
            d="M28 75L11 84M59 75L76 84M33 102V114M53 102V114"
            fill="none"
            strokeLinecap="round"
          />
        </g>
        <g transform="translate(548 54)">
          <path
            d="M-8 48Q-6 0 43 0T98 48Q102 86 46 89T-8 48Z"
            fill="#d8c8a9"
            stroke="#b49d7b"
            strokeWidth="3"
          />
          <path
            d="M25 36v4M62 36v4M24 51q19 23 39 0"
            fill="none"
            stroke="#7c856f"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <text
            x="44"
            y="111"
            textAnchor="middle"
            fill="#7c856f"
            fontSize="15"
            fontFamily="Georgia,serif"
            fontStyle="italic"
          >
            smile
          </text>
        </g>
      </svg>
      <ol
        className="route-stops"
        aria-label="I ricordi della nostra caccia al tesoro"
      >
        <li>
          <span>GLI INDIZI</span>
          <strong>Una mappa da seguire</strong>
          <small>Alcune miniature segnate su Google Maps</small>
        </li>
        <li>
          <span>LA SCOPERTA</span>
          <strong>Guardiamo i dettagli</strong>
          <small>Le statuette trovate durante le passeggiate</small>
        </li>
        <li>
          <span>LA SORPRESA</span>
          <strong>Un piccolo regalo</strong>
          <small>Il sassolino “smile” con le caramelle</small>
        </li>
      </ol>
      <figcaption>
        Il filo delle nostre scoperte: un ricordo illustrato, senza posizioni
        geografiche delle statuette.
      </figcaption>
    </figure>
  );
}
