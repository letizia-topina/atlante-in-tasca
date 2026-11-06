import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTrips } from "@/lib/trips";
import { TripExplorer } from "@/components/trip-explorer";
export const metadata: Metadata = {
  title: "I nostri viaggi in Europa",
  description:
    "Da Parigi a Copenaghen e Malmö: racconti di coppia, fotografie e itinerari dei nostri viaggi in Europa.",
};
export default async function EuropePage() {
  const trips = (await getTrips()).filter((trip) => trip.region === "Europa");
  return (
    <>
      <header className="wrap europe-header">
        <Link href="/" className="back-link">
          <ArrowLeft size={15} /> Torna al diario
        </Link>
        <p className="eyebrow terracotta">IL NOSTRO DIARIO EUROPEO</p>
        <h1>
          L’Europa, un ricordo
          <br />
          alla <em>volta.</em>
        </h1>
        <p>
          Dalle luci di Parigi ai canali di Copenaghen e alla nostra parentesi
          svedese a Malmö. Qui raccogliamo i nostri viaggi in due, oltre i
          confini di casa.
        </p>
      </header>
      <TripExplorer trips={trips} />
    </>
  );
}
