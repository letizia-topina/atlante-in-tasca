import { Anchor, Footprints, Ship, Sun, TrainFront } from "lucide-react";
export function CostieraRoute() {
  return (
    <figure
      className="route-figure route-figure--coast"
      aria-labelledby="coast-route-title"
    >
      <div className="figure-heading">
        <span className="eyebrow terracotta">
          IL FILO DEI NOSTRI TRE GIORNI
        </span>
        <span className="figure-tag">
          <TrainFront size={14} aria-hidden="true" />
          <Ship size={14} aria-hidden="true" /> Treno e traghetto
        </span>
      </div>
      <h2 id="coast-route-title">La nostra strada, questa volta, è il mare.</h2>
      <svg
        className="route-illustration"
        viewBox="0 0 720 350"
        role="img"
        aria-labelledby="coast-svg-title coast-svg-desc"
      >
        <title id="coast-svg-title">
          Da Cava de’ Tirreni alla Costiera Amalfitana
        </title>
        <desc id="coast-svg-desc">
          Partiamo da Latina in treno e facciamo base a Cava de’ Tirreni.
          Raggiungiamo Vietri in treno e dalla marina visitiamo Amalfi e
          Positano in traghetto, in due giornate distinte. Il terzo giorno
          esploriamo Vietri prima del ritorno. Schema non in scala.
        </desc>
        <rect width="720" height="350" fill="#e5eee9" />
        <path
          d="M0 0H720V185Q650 210 590 145T450 132T300 130T140 171T0 178Z"
          fill="#d1d9b9"
        />
        <path d="M0 0H720V80Q600 10 480 70T250 50T0 88Z" fill="#b7c59a" />
        <g fill="#e9c39d" stroke="#a27553" strokeWidth="1.5">
          <path d="M84 183v-28h20v28m4 0v-43h23v43m5 0v-33h20v33m123-55v-30h20v30m4 0v-44h23v44m4 0v-28h20v28m209 16v-30h20v30m4 0v-46h23v46m4 0v-34h20v34" />
        </g>
        <path
          d="M660 55v45l-80 45"
          fill="none"
          stroke="#6f7955"
          strokeWidth="3"
          strokeDasharray="4 5"
        />
        <path
          d="M570 205C525 277 380 258 335 215M570 205C500 322 240 307 150 260"
          fill="none"
          stroke="#4c8086"
          strokeWidth="2.5"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <g fill="#fffaf0" stroke="#ab4b33" strokeWidth="2">
          <circle cx="660" cy="55" r="5" />
          <circle cx="580" cy="145" r="5" />
          <circle cx="310" cy="145" r="5" />
          <circle cx="125" cy="195" r="5" />
        </g>
        <g fontFamily="Georgia,serif" fill="#30392e" fontSize="20">
          <text x="426" y="40">
            Cava de’ Tirreni
          </text>
          <text x="520" y="174">
            Vietri sul Mare
          </text>
          <text x="270" y="180">
            Amalfi
          </text>
          <text x="80" y="230">
            Positano
          </text>
        </g>
        <g
          fontFamily="'DM Sans',sans-serif"
          fill="#526851"
          fontSize="10"
          letterSpacing="1"
        >
          <text x="426" y="57">
            LA NOSTRA BASE · DUE NOTTI
          </text>
          <text x="520" y="191">
            IL MOLO E IL GIORNO 3
          </text>
          <text x="270" y="197">
            GIORNO 1
          </text>
          <text x="80" y="247">
            GIORNO 2
          </text>
          <text x="250" y="321">
            DUE GIORNATE, DUE APPRODI VIA MARE
          </text>
        </g>
        <g
          transform="translate(375 260)"
          fill="#fffaf0"
          stroke="#4c8086"
          strokeWidth="2"
        >
          <path d="M-25 0h50l-9 12h-32z" />
          <path d="M-12 0v-14h24V0m-12-14v-14" fill="none" />
        </g>
      </svg>
      <ol className="route-stops" aria-label="Le tappe della Costiera">
        <li>
          <span>LA BASE</span>
          <a href="#cava">Cava de’ Tirreni</a>
          <small>Arriviamo da Latina in treno</small>
        </li>
        <li>
          <span>VIA MARE</span>
          <a href="#traghetto">Amalfi e Positano</a>
          <small>Due giornate dal molo di Vietri</small>
        </li>
        <li>
          <span>PRIMA DEL RITORNO</span>
          <a href="#vietri">Vietri sul Mare</a>
          <small>Ceramiche, vicoli e belvedere</small>
        </li>
      </ol>
      <figcaption>
        Il nostro percorso, disegnato come un ricordo. Schema non in scala; le
        linee indicano le nostre escursioni, non le singole corse dei traghetti.
      </figcaption>
    </figure>
  );
}
const days = [
  {
    title: "Latina → Cava → Amalfi",
    stops: [
      {
        icon: TrainFront,
        text: "Da Latina a Cava de’ Tirreni, dove lasciamo i bagagli.",
      },
      {
        icon: Ship,
        text: "Treno per Vietri, poi a piedi al molo e traghetto per Amalfi.",
      },
      { icon: Footprints, text: "Piazza Duomo e i vicoli del centro storico." },
      { icon: Anchor, text: "Rientriamo alla nostra base a Cava de’ Tirreni." },
    ],
  },
  {
    title: "Cava → Vietri → Positano",
    stops: [
      {
        icon: TrainFront,
        text: "Ripartiamo da Cava verso Vietri sul Mare in treno.",
      },
      { icon: Ship, text: "Raggiungiamo Positano via mare." },
      {
        icon: Footprints,
        text: "Via Cristoforo Colombo, scorci, botteghe e una pausa per il pranzo.",
      },
      { icon: Anchor, text: "Torniamo a Cava per la seconda notte." },
    ],
  },
  {
    title: "Cava → Vietri → Latina",
    stops: [
      {
        icon: TrainFront,
        text: "Dedichiamo l’ultima giornata a Vietri sul Mare.",
      },
      { icon: Footprints, text: "Vicoli colorati e botteghe di ceramica." },
      {
        icon: Footprints,
        text: "Villa Comunale e belvedere di Piazza Matteotti.",
      },
      {
        icon: TrainFront,
        text: "I nostri ultimi acquisti, poi rientriamo a Latina in treno.",
      },
    ],
  },
];
export function CostieraDays() {
  return (
    <div
      className="weekend-plan weekend-plan--three"
      aria-label="Il nostro itinerario di tre giorni"
    >
      {days.map((day, index) => (
        <section className="day-card" key={day.title}>
          <div className="day-heading">
            <Sun size={23} strokeWidth={1.5} aria-hidden="true" />
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
