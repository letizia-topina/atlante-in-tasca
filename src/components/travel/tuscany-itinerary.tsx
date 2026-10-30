import {
  ArrowDown,
  CarFront,
  Footprints,
  Moon,
  Sun,
  Ticket,
} from "lucide-react";

function PisaDrawing() {
  return (
    <g
      transform="translate(175 145) rotate(8)"
      fill="#fffaf0"
      stroke="#8b775c"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path d="M-31 0v-104q31-10 62 0V0z" />
      <path d="M-23-105v-16q23-8 46 0v16" />
      {[-90, -70, -50, -30, -10].map((y) => (
        <g key={y}>
          <path d={`M-31 ${y}q31-7 62 0`} fill="none" />
          {[-20, 0, 20].map((x) => (
            <path key={x} d={`M${x - 5} ${y - 3}v-8q5-7 10 0v8`} fill="none" />
          ))}
        </g>
      ))}
      <path d="M-7 0v-12q7-10 14 0V0" fill="#8b775c" />
    </g>
  );
}
function TowersDrawing() {
  return (
    <g
      transform="translate(405 197)"
      stroke="#986849"
      strokeWidth="2"
      strokeLinejoin="round"
    >
      <path
        d="M-55 0v-65h22V0m13 0v-99H5V0m12 0v-52h22V0m12 0v-80h22V0"
        fill="#c9936e"
      />
      <path d="M-65 0v-22H84V0z" fill="#e0b18a" />
      <path
        d="M-45-53v9m35-43v10m0 14v10m37 14v9m35-40v10m0 12v10"
        fill="none"
      />
    </g>
  );
}
export function TuscanyRoute() {
  return (
    <figure className="route-figure" aria-labelledby="route-title">
      <div className="figure-heading">
        <span className="eyebrow terracotta">IL FILO DEL NOSTRO WEEKEND</span>
        <span className="figure-tag">
          <CarFront size={14} aria-hidden="true" /> In automobile
        </span>
      </div>
      <h2 id="route-title">Da Latina, un piccolo giro di Toscana.</h2>
      <svg
        className="route-illustration"
        viewBox="0 0 720 360"
        role="img"
        aria-labelledby="route-svg-title route-svg-desc"
      >
        <title id="route-svg-title">
          Il nostro percorso tra Latina, Pisa e San Gimignano
        </title>
        <desc id="route-svg-desc">
          Da Latina raggiungiamo Pisa, dove trascorriamo la prima giornata e la
          notte. Il secondo giorno proseguiamo verso San Gimignano, poi torniamo
          a Latina. Schema illustrato, non in scala.
        </desc>
        <path
          d="M0 184Q140 114 270 179T540 187T720 165V360H0Z"
          fill="#e3e7d5"
        />
        <path d="M0 250Q160 185 330 245T720 240V360H0Z" fill="#d3dbbf" />
        <circle cx="595" cy="66" r="28" fill="#dfb56f" />
        <path
          d="M607 280C480 300 105 295 126 202S310 142 378 203S550 246 607 280"
          fill="none"
          stroke="#ab4b33"
          strokeWidth="2.5"
          strokeDasharray="6 7"
          strokeLinecap="round"
        />
        <PisaDrawing />
        <TowersDrawing />
        <g fill="#43583d">
          <path d="M63 232q-12-36 0-63 12 27 0 63m30 2q-9-27 0-49 9 22 0 49m418 0q-12-36 0-63 12 27 0 63" />
        </g>
        <g fill="#fffaf0" stroke="#ab4b33" strokeWidth="2">
          <circle cx="126" cy="202" r="6" />
          <circle cx="378" cy="203" r="6" />
          <circle cx="607" cy="280" r="6" />
        </g>
        <g fontFamily="Georgia, serif" fill="#30392e" fontSize="21">
          <text x="128" y="176">
            Pisa
          </text>
          <text x="355" y="231">
            San Gimignano
          </text>
          <text x="575" y="316">
            Latina
          </text>
        </g>
        <g
          fontFamily="'DM Sans', sans-serif"
          fill="#676b5c"
          fontSize="10"
          letterSpacing="1.2"
        >
          <text x="128" y="191">
            GIORNO 1 · UNA NOTTE
          </text>
          <text x="355" y="249">
            GIORNO 2
          </text>
          <text x="546" y="334">
            PARTENZA E RITORNO
          </text>
        </g>
      </svg>
      <ol className="route-stops" aria-label="Le tappe del viaggio">
        <li>
          <span>01</span>
          <strong>Latina</strong>
          <small>Si parte</small>
        </li>
        <li>
          <span>02</span>
          <a href="#pisa">Pisa</a>
          <small>Una giornata e una notte</small>
        </li>
        <li>
          <span>03</span>
          <a href="#san-gimignano">San Gimignano</a>
          <small>Il borgo, poi il ritorno</small>
        </li>
      </ol>
      <figcaption>
        Il nostro percorso, disegnato come un ricordo. Schema non in scala.
      </figcaption>
    </figure>
  );
}
export function TuscanyWeekend() {
  return (
    <div
      className="weekend-plan"
      aria-label="Il nostro itinerario di due giorni"
    >
      <section className="day-card">
        <div className="day-heading">
          <Sun size={23} strokeWidth={1.5} aria-hidden="true" />
          <span>GIORNO 01</span>
        </div>
        <h3>Latina → Pisa</h3>
        <ol>
          <li>
            <CarFront size={17} aria-hidden="true" />
            <span>
              Il viaggio da Latina, il pranzo e l’arrivo nel nostro Airbnb.
            </span>
          </li>
          <li>
            <Footprints size={17} aria-hidden="true" />
            <span>
              Via Santa Maria, Piazza dei Cavalieri, Borgo Stretto e Santa Maria
              della Spina.
            </span>
          </li>
          <li>
            <Ticket size={17} aria-hidden="true" />
            <span>Piazza dei Miracoli e la salita sulla Torre Pendente.</span>
          </li>
          <li>
            <Moon size={17} aria-hidden="true" />
            <span>
              Aperitivo sulla piazza, cena all’Osteria La Mescita e una notte a
              Pisa.
            </span>
          </li>
        </ol>
      </section>
      <section className="day-card">
        <div className="day-heading">
          <Sun size={23} strokeWidth={1.5} aria-hidden="true" />
          <span>GIORNO 02</span>
        </div>
        <h3>Pisa → San Gimignano → Latina</h3>
        <ol>
          <li>
            <Ticket size={17} aria-hidden="true" />
            <span>
              La visita all’interno del Duomo di Pisa prima di ripartire.
            </span>
          </li>
          <li>
            <CarFront size={17} aria-hidden="true" />
            <span>In automobile tra le colline, verso San Gimignano.</span>
          </li>
          <li>
            <Footprints size={17} aria-hidden="true" />
            <span>
              Vicoli, torri, botteghe e l’incontro con un Dante inaspettato.
            </span>
          </li>
          <li>
            <ArrowDown size={17} aria-hidden="true" />
            <span>
              Un gelato da Dondoli in Piazza della Cisterna, poi il ritorno a
              Latina.
            </span>
          </li>
        </ol>
      </section>
    </div>
  );
}
