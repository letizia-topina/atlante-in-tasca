import {
  Building2,
  CakeSlice,
  FerrisWheel,
  Footprints,
  Palette,
  Sparkles,
  TrainFront,
} from "lucide-react";

const days = [
  {
    title: "Il Prater e il Natale in piazza",
    icon: FerrisWheel,
    stops: [
      {
        icon: TrainFront,
        text: "Arriviamo nel pomeriggio, raggiungiamo il centro in treno e facciamo la spesa.",
      },
      {
        icon: FerrisWheel,
        text: "Saliamo sulla ruota panoramica del Prater e passeggiamo tra giostre e mercatino.",
      },
      {
        icon: Sparkles,
        text: "Rathausplatz, il municipio dall’esterno e due palline natalizie da portare a casa. Cena a casa.",
      },
    ],
  },
  {
    title: "Arte, libri e facciate colorate",
    icon: Palette,
    stops: [
      {
        icon: Palette,
        text: "Visitiamo il Belvedere Superiore in tarda mattinata, poi ci fermiamo per il pranzo al sacco.",
      },
      {
        icon: Building2,
        text: "Biblioteca Nazionale all’Hofburg, chiesa di San Carlo Borromeo e Hundertwasserhaus.",
      },
      {
        icon: Footprints,
        text: "Mercatini di Resselpark, vie dello shopping e Stephansplatz. La sera ceniamo al ristorante.",
      },
    ],
  },
  {
    title: "Schönbrunn e una pausa dolce",
    icon: CakeSlice,
    stops: [
      {
        icon: Building2,
        text: "Passeggiamo all’esterno di Schönbrunn e nel suo mercatino di Natale.",
      },
      {
        icon: CakeSlice,
        text: "Ci concediamo una pausa dolce al Café Sacher, prima della visita all’Albertina.",
      },
      {
        icon: Footprints,
        text: "Torniamo in Stephansplatz per l’interno di Santo Stefano, poi rientriamo per cenare a casa.",
      },
    ],
  },
];

export function ViennaDays() {
  return (
    <div
      className="weekend-plan weekend-plan--three"
      aria-label="Il nostro itinerario di tre giorni a Vienna"
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

export function ViennaOverview() {
  return (
    <figure className="route-figure" aria-labelledby="vienna-overview-title">
      <div className="figure-heading">
        <span className="eyebrow terracotta">IL NOSTRO NATALE VIENNESE</span>
        <span className="figure-tag">
          <Sparkles size={14} aria-hidden="true" /> Tre giorni, in due
        </span>
      </div>
      <h2 id="vienna-overview-title">
        Una ruota, tanti musei e la città accesa di Natale.
      </h2>
      <svg
        className="vienna-skyline"
        viewBox="0 0 720 220"
        role="img"
        aria-labelledby="vienna-skyline-title"
      >
        <title id="vienna-skyline-title">
          Un ricordo illustrato di Vienna: la ruota del Prater, il municipio e
          le bancarelle natalizie
        </title>
        <rect width="720" height="220" rx="4" fill="#eee7db" />
        <path d="M0 188q180-18 360 0t360-3v35H0Z" fill="#d5dfd1" />
        <g fill="none" stroke="#87937a" strokeWidth="3">
          <circle cx="133" cy="92" r="65" />
          <circle cx="133" cy="92" r="6" fill="#bf775b" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <g key={angle} transform={`rotate(${angle} 133 92)`}>
              <path d="M133 33v53" />
              <rect
                x="126"
                y="22"
                width="14"
                height="13"
                rx="2"
                fill="#b96e58"
                stroke="#966d57"
              />
            </g>
          ))}
          <path d="m133 99-34 86m34-86 34 86m-62-14h56" />
        </g>
        <g stroke="#a18d70" strokeWidth="2" fill="#ddc8a2">
          <path d="M295 182V111h60V77h22V38l12-23 12 23v39h22v34h60v71Z" />
          <path d="M295 111v-21l9-14 9 14v21m152 0V90l9-14 9 14v21" />
          <circle cx="389" cy="92" r="9" fill="#f8f1df" />
          <path d="M389 86v6l5 3" fill="none" />
          {[316, 337, 358, 379, 400, 421, 442, 463].map((x) => (
            <path key={x} d={`M${x} 165v-18q6-12 12 0v18Z`} fill="#9aab92" />
          ))}
        </g>
        <g transform="translate(538 99)">
          <path d="m0 86 34-75 34 75Z" fill="#8b9d82" />
          <path d="m34 1 3 7 8 1-6 5 2 8-7-4-7 4 2-8-6-5 8-1Z" fill="#c5a064" />
          {[31, 48, 65].map((y, i) => (
            <g key={y} fill="#d5ad6a">
              <circle cx={25 - i * 4} cy={y} r="3" />
              <circle cx={42 + i * 3} cy={y + 5} r="3" />
            </g>
          ))}
        </g>
        {[240, 626].map((x) => (
          <g
            key={x}
            transform={`translate(${x} 156)`}
            stroke="#a87b61"
            strokeWidth="2"
          >
            <path d="M0 28V0h54v28" fill="#d7b28a" />
            <path d="m-5 0 32-18L59 0Z" fill="#b76e56" />
            <path d="M8 9h38v13H8Z" fill="#f3dfa8" />
          </g>
        ))}
        <path d="M22 15q338 43 676 0" fill="none" stroke="#b6a087" />
        {[55, 215, 505, 657].map((x) => (
          <circle
            key={x}
            cx={x}
            cy={x < 100 || x > 600 ? 20 : 31}
            r="3"
            fill="#d0a968"
          />
        ))}
      </svg>
      <ol
        className="route-stops"
        aria-label="Le tre giornate del viaggio a Vienna"
      >
        {[
          ["01", "Il Prater e Rathausplatz", "Ruota panoramica e mercatini"],
          ["02", "Musei e colori", "Belvedere, libri e passeggiate"],
          ["03", "Palazzi e dolcezze", "Schönbrunn, Sacher e Albertina"],
        ].map(([number, title, note], index) => (
          <li key={number}>
            <span>GIORNO {number}</span>
            <a href={`#giorno-${index + 1}`}>{title}</a>
            <small>{note}</small>
          </li>
        ))}
      </ol>
      <figcaption>
        Le nostre tre giornate tra musei e mercatini. L’illustrazione raccoglie
        i ricordi del viaggio.
      </figcaption>
    </figure>
  );
}
