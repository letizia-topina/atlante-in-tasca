import {
  CarFront,
  Footprints,
  House,
  ShoppingBag,
  Sun,
  Utensils,
} from "lucide-react";
export function PugliaRoute() {
  return (
    <figure
      className="route-figure route-figure--puglia"
      aria-labelledby="puglia-route-title"
    >
      <div className="figure-heading">
        <span className="eyebrow terracotta">IL NOSTRO PRIMO ON THE ROAD</span>
        <span className="figure-tag">
          <CarFront size={14} aria-hidden="true" /> Tre giorni in automobile
        </span>
      </div>
      <h2 id="puglia-route-title">
        Una casa ad Altamura, quattro tappe da unire.
      </h2>
      <svg
        className="route-illustration"
        viewBox="0 0 720 360"
        role="img"
        aria-labelledby="puglia-svg-title puglia-svg-desc"
      >
        <title id="puglia-svg-title">
          Il nostro itinerario tra Puglia e Basilicata
        </title>
        <desc id="puglia-svg-desc">
          Partiamo da Latina e facciamo base ad Altamura per due notti. Il primo
          giorno visitiamo brevemente Matera. Il secondo raggiungiamo Bari e poi
          Alberobello, rientrando ad Altamura. Il terzo visitiamo Altamura prima
          del ritorno a Latina. Schema non in scala.
        </desc>
        <rect width="720" height="360" fill="#efe7d5" />
        <path d="M0 200Q160 110 340 200T720 195V360H0Z" fill="#dadbb8" />
        <path d="M0 300Q240 180 470 295T720 260V360H0Z" fill="#bdc69f" />
        <path
          d="M54 83C100 83 133 106 199 149"
          fill="none"
          stroke="#8e8668"
          strokeWidth="2"
          strokeDasharray="5 6"
        />
        <path
          d="M227 236C150 208 98 230 120 271"
          fill="none"
          stroke="#ab4b33"
          strokeWidth="2.5"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <path
          d="M282 170C300 49 424 28 490 73M544 126C645 133 677 194 616 232M520 300C430 343 314 312 282 239"
          fill="none"
          stroke="#6d8055"
          strokeWidth="2.5"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <g stroke="#a48360" strokeWidth="1.5">
          <g fill="#ead3ae">
            <path d="M212 166v-30h23v30m2 0v-43h27v43m2 0v-28h26v28m-179 93v-23h24v23m3 0v-39h28v39m3 0v-25h24v25m277-157v-29h25v29m3 0v-48h22v48m3 0v-30h25v30" />
          </g>
          <g fill="#f7edda">
            <path d="M550 270v-27h31v27m15 0v-27h31v27" />
            <path d="m545 243 20-32 21 32zm46 0 20-32 21 32z" fill="#a6987d" />
          </g>
        </g>
        <g fill="#fffaf0" stroke="#ab4b33" strokeWidth="2">
          <circle cx="254" cy="183" r="5" />
          <circle cx="153" cy="278" r="5" />
          <circle cx="508" cy="115" r="5" />
          <circle cx="590" cy="281" r="5" />
        </g>
        <g fontFamily="Georgia,serif" fill="#30392e" fontSize="20">
          <text x="32" y="61">
            Da Latina
          </text>
          <text x="208" y="205">
            Altamura
          </text>
          <text x="112" y="301">
            Matera
          </text>
          <text x="486" y="140">
            Bari
          </text>
          <text x="535" y="306">
            Alberobello
          </text>
        </g>
        <g
          fontFamily="'DM Sans',sans-serif"
          fill="#656b53"
          fontSize="10"
          letterSpacing="1"
        >
          <text x="32" y="77">
            SI PARTE
          </text>
          <text x="208" y="222">
            LA BASE · DUE NOTTI
          </text>
          <text x="112" y="318">
            BASILICATA · GIORNO 1
          </text>
          <text x="486" y="157">
            GIORNO 2
          </text>
          <text x="535" y="323">
            GIORNO 2
          </text>
        </g>
        <g
          transform="translate(369 182)"
          stroke="#7a765d"
          strokeWidth="2"
          fill="none"
        >
          <path d="M0 3v49M0 3l-2-29M0 3l25 15M0 3l-25 15" />
          <circle cy="3" r="3" fill="#f9f5e9" />
        </g>
      </svg>
      <ol
        className="route-stops route-stops--four"
        aria-label="Le quattro tappe del viaggio"
      >
        <li>
          <span>LA BASE</span>
          <a href="#altamura">Altamura</a>
          <small>Due notti, poi la visita</small>
        </li>
        <li>
          <span>GIORNO 1</span>
          <a href="#matera">Matera</a>
          <small>Una tappa in Basilicata</small>
        </li>
        <li>
          <span>GIORNO 2</span>
          <a href="#bari">Bari</a>
          <small>Bari Vecchia e il mare</small>
        </li>
        <li>
          <span>GIORNO 2</span>
          <a href="#alberobello">Alberobello</a>
          <small>Trulli e souvenir</small>
        </li>
      </ol>
      <figcaption>
        Il nostro percorso, disegnato come un ricordo. Schema non in scala:
        Altamura è la nostra base per entrambe le notti.
      </figcaption>
    </figure>
  );
}
const days = [
  {
    title: "Latina → Altamura → Matera",
    stops: [
      { icon: CarFront, text: "Partiamo la mattina da Latina verso Altamura." },
      {
        icon: House,
        text: "Raggiungiamo casa, lasciamo i bagagli e facciamo una pausa con il pranzo al sacco.",
      },
      {
        icon: Footprints,
        text: "Dedichiamo una breve visita a Matera, in Basilicata.",
      },
      {
        icon: Utensils,
        text: "Torniamo ad Altamura per la cena a casa e la prima notte.",
      },
    ],
  },
  {
    title: "Altamura → Bari → Alberobello",
    stops: [
      {
        icon: House,
        text: "Facciamo colazione a casa, poi partiamo verso Bari.",
      },
      {
        icon: Footprints,
        text: "Basilica di San Nicola, Bari Vecchia e via delle orecchiette, poi lungomare e porto.",
      },
      {
        icon: ShoppingBag,
        text: "Dopo la pausa pranzo raggiungiamo Alberobello per una passeggiata e i souvenir.",
      },
      { icon: CarFront, text: "Rientriamo ad Altamura per la seconda notte." },
    ],
  },
  {
    title: "Altamura → Latina",
    stops: [
      {
        icon: Footprints,
        text: "Dedichiamo la mattina alla visita di Altamura.",
      },
      {
        icon: ShoppingBag,
        text: "Ci fermiamo al Forno di Santa Caterina per acquistare pane e focaccia.",
      },
      {
        icon: CarFront,
        text: "Ripartiamo verso Latina con i souvenir e i ricordi del nostro primo on the road.",
      },
    ],
  },
];
export function PugliaDays() {
  return (
    <div
      className="weekend-plan weekend-plan--three"
      aria-label="I tre giorni del nostro primo on the road"
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
