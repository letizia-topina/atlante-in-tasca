import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Trip } from "@/lib/trip-schema";
export function TripCard({ trip }: { trip: Trip }) {
  return (
    <Card className="trip-card">
      <Link href={`/viaggi/${trip.slug}`} className="trip-link">
        <div className="card-image">
          <Image
            src={trip.cover}
            alt={trip.coverAlt}
            style={{ objectPosition: trip.coverPosition }}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
          />
          <Badge className="image-badge">{trip.country}</Badge>
          <span className="card-arrow">
            <ArrowUpRight size={21} />
          </span>
        </div>
        <CardContent className="card-copy">
          <p className="eyebrow">
            <MapPin size={12} />
            {trip.destination}
            <span>
              · {trip.duration} {trip.duration === 1 ? "giorno" : "giorni"}
            </span>
          </p>
          <h3>{trip.title}</h3>
          <p className="description">{trip.description}</p>
          <div className="card-meta">
            <span>{trip.tags.slice(0, 2).join(" / ")}</span>
            <span>{trip.readingMinutes} min di lettura</span>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
