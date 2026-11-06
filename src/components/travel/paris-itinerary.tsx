import {
  Building2,
  Camera,
  Footprints,
  Luggage,
  Palette,
  Ship,
  Sparkles,
  TrainFront,
} from "lucide-react";
export function ParisOverview() {
  return (
    <figure
      className="route-figure route-figure--paris"
      aria-labelledby="paris-overview-title"
    >
      <div className="figure-heading">
        <span className="eyebrow terracotta">IL NOSTRO NATALE PARIGINO</span>
        <span className="figure-tag">
          <Sparkles size={14} aria-hidden="true" /> Cinque giorni in due
        </span>
      </div>
      <h2 id="paris-overview-title">
        Musei di giorno, la città accesa di notte.
      </h2>
      <svg
        className="paris-skyline"
        viewBox="0 0 720 220"
        role="img"
        aria-labelledby="paris-skyline-title"
      >
        <title id="paris-skyline-title">
          Un ricordo illustrato di Parigi: la Torre Eiffel, il Louvre e
          Notre-Dame lungo la Senna
        </title>
        <rect width="720" height="220" fill="#e8ece5" />
        <circle cx="592" cy="47" r="22" fill="#dab77a" />
        <path d="M0 184q145-37 290-2t430-6v44H0Z" fill="#b7cbc6" />
        <path
          d="M0 201q180-28 350 0t370-3"
          fill="none"
          stroke="#73958f"
          strokeWidth="2"
        />
        <g stroke="#9a805d" strokeWidth="3" fill="#e3c898">
          <path
            d="M133 162q32-67 42-138 10 71 42 138m-72-29h60m-50-30h40m-34-25h28m-14-54v-14M145 162q30-47 60 0"
            fill="none"
          />
          <path d="M275 168v-62h140v62m-121-42h15v20h-15m23-20h15v20h-15m23-20h15v20h-15m23-20h15v20h-15m23-20h15v20h-15" />
          <path d="m307 168 39-55 39 55z" fill="#e7ede4" />
          <path d="M511 168V89h32v79m53 0V89h32v79m-85 0v-57h53v57" />
          <circle cx="570" cy="131" r="10" fill="#f1e8d7" />
          <path d="M555 168v-16q15-22 30 0v16" fill="#8b9277" />
        </g>
        <g fill="#d1a76b">
          <circle cx="57" cy="89" r="3" />
          <circle cx="247" cy="44" r="3" />
          <circle cx="447" cy="68" r="3" />
          <circle cx="660" cy="117" r="3" />
          <path d="m472 28 3 8 8 3-8 3-3 8-3-8-8-3 8-3z" />
        </g>
      </svg>
      <ol
        className="route-stops route-stops--paris"
        aria-label="Le cinque giornate a Parigi"
      >
        {[
          ["01", "giorno-1", "Le prime luci", "Champs-Élysées e Arco"],
          [
            "02",
            "giorno-2",
            "La grande giornata",
            "Louvre, Torre e Montmartre",
          ],
          ["03", "giorno-3", "Arte e dolcezze", "Orangerie, Opéra e Natale"],
          ["04", "giorno-4", "Tra le opere", "Orsay, vetrate e atelier"],
          ["05", "giorno-5", "Un ultimo giro", "Invalides e il ritorno"],
        ].map(([number, id, label, note]) => (
          <li key={id}>
            <span>GIORNO {number}</span>
            <a href={`#${id}`}>{label}</a>
            <small>{note}</small>
          </li>
        ))}
      </ol>
      <figcaption>
        I nostri cinque giorni, tra passeggiate, musei e soste al caldo.
        L’illustrazione raccoglie alcuni simboli del viaggio.
      </figcaption>
    </figure>
  );
}
const days = [
  {
    title: "L’arrivo e gli Champs-Élysées",
    icon: Sparkles,
    stops: [
      {
        icon: Luggage,
        text: "Arriviamo a Orly a metà giornata, raggiungiamo casa e facciamo la spesa.",
      },
      {
        icon: Footprints,
        text: "Passeggiamo tra Place de la Concorde, Champs-Élysées e Arco di Trionfo, tra vetrine e luci di Natale.",
      },
      {
        icon: Building2,
        text: "Visitiamo l’Arco, ci concediamo una pausa e rientriamo per la cena a casa.",
      },
    ],
  },
  {
    title: "Dal Louvre alla Senna",
    icon: Palette,
    stops: [
      {
        icon: Palette,
        text: "Cominciamo dal Louvre, con uno spuntino al bar interno, poi le Tuileries e i mercatini.",
      },
      {
        icon: Camera,
        text: "Trocadéro, Pont d’Iéna, Torre Eiffel e le strade per fotografarla.",
      },
      {
        icon: Footprints,
        text: "Pigalle e Montmartre, tra Sacré-Cœur, piazzette e vicoli.",
      },
      {
        icon: Ship,
        text: "Dopo la cena al ristorante, la crociera notturna sulla Senna.",
      },
    ],
  },
  {
    title: "Orangerie, Opéra e soste golose",
    icon: Building2,
    stops: [
      {
        icon: Palette,
        text: "Visitiamo l’Orangerie e poi l’interno dell’Opéra Garnier.",
      },
      {
        icon: Sparkles,
        text: "Galeries Lafayette, mercatini, Notre-Dame e una pausa per il pranzo.",
      },
      {
        icon: Footprints,
        text: "Nel nostro giro ci fermiamo da Du Pain et des Idées e per una cioccolata al The Sunny Side.",
      },
      { icon: Building2, text: "Rientriamo a casa per la cena." },
    ],
  },
  {
    title: "Orsay, Sainte-Chapelle e Rivoli",
    icon: Palette,
    stops: [
      {
        icon: Palette,
        text: "Cominciamo dal Musée d’Orsay, poi passeggiamo lungo la Senna e acquistiamo souvenir.",
      },
      {
        icon: Footprints,
        text: "Una pausa per il pranzo, tra quello al sacco e i mercatini.",
      },
      {
        icon: Building2,
        text: "Le vetrate della Sainte-Chapelle e gli atelier del 59 Rivoli.",
      },
      {
        icon: Building2,
        text: "Visitiamo il Panthéon, poi rientriamo per cena.",
      },
    ],
  },
  {
    title: "Invalides e gli ultimi acquisti",
    icon: Luggage,
    stops: [
      {
        icon: Luggage,
        text: "Lasciamo i bagagli in deposito prima dell’ultimo giro.",
      },
      {
        icon: Building2,
        text: "Musée de l’Armée e tomba di Napoleone agli Invalides.",
      },
      {
        icon: Sparkles,
        text: "Pranzo ai mercatini e ancora qualche acquisto in città.",
      },
      {
        icon: TrainFront,
        text: "Recuperiamo i bagagli e affrontiamo il ritorno in Italia in serata.",
      },
    ],
  },
];
export function ParisDays() {
  return (
    <div
      className="weekend-plan weekend-plan--five"
      aria-label="Il nostro itinerario di cinque giorni a Parigi"
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
