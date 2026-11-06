import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Compass } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getTrip, getTrips } from "@/lib/trips";
import { TripPhotos } from "@/components/travel/trip-photos";
import { SouvenirNote } from "@/components/travel/souvenir-note";
import { RelatedTrip } from "@/components/travel/related-trip";
import { CopenhagenPhotos } from "@/components/travel/copenaghen-photos";
import { MalmoPhotos } from "@/components/travel/malmo-photos";
import {
  CopenhagenOverview,
  CopenhagenDays,
  MalmoDay,
} from "@/components/travel/nordic-itinerary";
import { ParisPhotos } from "@/components/travel/paris-photos";
import { ParisOverview, ParisDays } from "@/components/travel/paris-itinerary";
import { PugliaRoute, PugliaDays } from "@/components/travel/puglia-itinerary";
import { PugliaPhotos } from "@/components/travel/puglia-photos";
import { CostieraPhotos } from "@/components/travel/costiera-photos";
import {
  CostieraRoute,
  CostieraDays,
} from "@/components/travel/costiera-itinerary";
import {
  TuscanyRoute,
  TuscanyWeekend,
} from "@/components/travel/tuscany-itinerary";
export async function generateStaticParams() {
  return (await getTrips()).map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const data = await getTrip((await params).slug);
  return data
    ? { title: data.trip.title, description: data.trip.description }
    : {};
}
function TravelNote({ children }: { children: React.ReactNode }) {
  return (
    <aside className="travel-note">
      <strong>
        <Compass size={17} /> Appunto in tasca
      </strong>
      {children}
    </aside>
  );
}
export default async function TripPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await getTrip((await params).slug);
  if (!data) notFound();
  const { trip, content } = data;
  return (
    <article>
      <header className="wrap article-header">
        <Link className="back-link" href="/#viaggi">
          <ArrowLeft size={15} /> Torna al diario
        </Link>
        <p className="eyebrow terracotta">
          {trip.destination} · {trip.country}
        </p>
        <h1>{trip.title}</h1>
        <p className="article-description">{trip.description}</p>
        <div className="article-meta">
          <time dateTime={trip.date}>
            {new Intl.DateTimeFormat("it", {
              dateStyle: "long",
              timeZone: "UTC",
            }).format(new Date(trip.date))}
          </time>
          <span>
            {trip.duration} {trip.duration === 1 ? "giorno" : "giorni"}
          </span>
          <span>{trip.readingMinutes} min di lettura</span>
        </div>
      </header>
      <div className="wrap article-cover">
        <Image
          src={trip.cover}
          alt={trip.coverAlt}
          style={{ objectPosition: trip.coverPosition }}
          fill
          priority
          sizes="(max-width: 760px) 100vw, 1240px"
        />
      </div>
      <div className="article-body">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          components={{
            TravelNote,
            TuscanyRoute,
            TuscanyWeekend,
            TripPhotos,
            SouvenirNote,
            RelatedTrip,
            CopenhagenOverview,
            CopenhagenDays,
            MalmoDay,
            MalmoPhotos,
            CopenhagenPhotos,
            CostieraPhotos,
            CostieraRoute,
            CostieraDays,
            PugliaRoute,
            PugliaDays,
            PugliaPhotos,
            ParisPhotos,
            ParisOverview,
            ParisDays,
          }}
        />
        <Link className="back-link" href="/#viaggi">
          <ArrowLeft size={15} /> Altre storie da scoprire
        </Link>
      </div>
    </article>
  );
}
