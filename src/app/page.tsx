import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Heart,
  MapPin,
  Sparkles,
  Sun,
} from "lucide-react";
import { getTrips } from "@/lib/trips";
import { TripExplorer } from "@/components/trip-explorer";
import { Badge } from "@/components/ui/badge";

export default async function Home() {
  const trips = await getTrips();
  const featured = trips.find((trip) => trip.featured) ?? trips[0];
  return (
    <>
      <section className="wrap hero">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="tiny-line" /> APPUNTI DI DUE VIAGGIATORI CURIOSI
          </p>
          <h1>
            Il mondo è più bello
            <br />
            se ci <em>perdiamo</em>
            <br />
            insieme<span className="terracotta">.</span>
            <Sun
              className="hero-sun"
              size={54}
              strokeWidth={1.3}
              aria-hidden="true"
            />
          </h1>
          <p className="hero-description">
            Un atlante di posti, persone e piccoli imprevisti.
            <br className="desktop-break" /> I nostri viaggi in due, dall’Italia
            a un po’ più in là.
          </p>
          <Link href="#viaggi" className="primary-link">
            Apri il nostro diario <ArrowDown size={17} />
          </Link>
          <div className="hero-note">
            <Heart size={17} strokeWidth={1.5} />
            <span>
              Collezioniamo calamite, cartoline e ricordi.
              <br />
              <small>Un viaggio alla volta, insieme.</small>
            </span>
          </div>
        </div>
        {featured && (
          <div className="hero-visual">
            <div className="postcard-tape" aria-hidden="true" />
            <Link href={`/viaggi/${featured.slug}`} className="postcard">
              <div className="postcard-image">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt}
                  style={{ objectPosition: featured.coverPosition }}
                  fill
                  priority
                  sizes="(max-width: 760px) 90vw, 48vw"
                />
                <Badge className="postcard-label">
                  <span className="live-dot" /> UNA CARTOLINA ·{" "}
                  {featured.country.toLocaleUpperCase("it")}
                </Badge>
              </div>
              <div className="postcard-caption">
                <div>
                  <p className="handwritten">
                    {featured.destination}, nel cuore.
                  </p>
                  <p>
                    <MapPin size={13} /> {featured.destination},{" "}
                    {featured.country} <span>·</span> Un ricordo in tasca
                  </p>
                </div>
                <span className="postcard-arrow">
                  <ArrowUpRight size={23} />
                </span>
              </div>
            </Link>
            <div className="travel-stamp" aria-hidden="true">
              <span>BUON VIAGGIO</span>
              <Compass size={32} strokeWidth={1.2} />
              <span>EST. INSIEME</span>
            </div>
            <span className="postcard-scribble handwritten">
              la nostra idea di felicità ↗
            </span>
          </div>
        )}
      </section>
      <div className="journal-strip">
        <div className="wrap">
          <span>
            <Sun size={19} /> Partire piano
          </span>
          <i>✳</i>
          <span>
            <Heart size={18} /> Tornare pieni
          </span>
          <i>✳</i>
          <span>
            <MapPin size={18} /> Sbagliare strada
          </span>
          <i>✳</i>
          <span>
            <Sparkles size={18} /> Trovare storie
          </span>
        </div>
      </div>
      <TripExplorer trips={trips} />
      <section className="wrap about-banner">
        <div className="about-doodle" aria-hidden="true">
          <Compass size={65} strokeWidth={1} />
          <Heart size={25} />
        </div>
        <div>
          <p className="eyebrow">PIACERE, SIAMO NOI</p>
          <h2>Due zaini, tante deviazioni.</h2>
          <p>
            Da Latina alla Toscana, alla Costiera e alla Puglia: raccogliamo qui
            i nostri viaggi, un ricordo alla volta.
          </p>
        </div>
        <Link href="/chi-siamo" className="text-link">
          La storia dietro la mappa <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}
