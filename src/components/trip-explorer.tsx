"use client";
import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TripCard } from "./trip-card";
import { filterTrips } from "@/lib/search";
import type { Trip } from "@/lib/trip-schema";
export function TripExplorer({ trips }: { trips: Trip[] }) {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("Tutti");
  const filtered = filterTrips(trips, query, region);
  const regions = [
    "Tutti",
    ...["Italia", "Europa", "Mondo"].filter((item) =>
      trips.some((trip) => trip.region === item),
    ),
  ];
  return (
    <section id="viaggi" className="wrap explorer">
      <div className="section-title">
        <div>
          <p className="eyebrow terracotta">IL NOSTRO DIARIO, A CIELO APERTO</p>
          <h2>
            Storie da mettere in valigia<span className="terracotta">.</span>
          </h2>
        </div>
        <span className="handwritten">Da qui, si parte ↘</span>
      </div>
      <div className="explorer-toolbar" id="destinazioni">
        <div className="filter-list" aria-label="Filtra per destinazione">
          {regions.map((item) => (
            <Button
              key={item}
              variant={region === item ? "default" : "ghost"}
              onClick={() => setRegion(item)}
              aria-pressed={region === item}
              className="filter-button"
            >
              {item === "Tutti" ? "Tutti i viaggi" : item}
              {item === "Italia" && <span aria-hidden="true">↗</span>}
            </Button>
          ))}
        </div>
        <div className="search-field" id="cerca">
          <Search size={17} />
          <Input
            aria-label="Cerca nei viaggi"
            placeholder="Dove ti porta la curiosità?"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query && (
            <Button
              variant="ghost"
              size="icon"
              aria-label="Cancella ricerca"
              onClick={() => setQuery("")}
            >
              <X size={15} />
            </Button>
          )}
        </div>
      </div>
      <p className="result-count" role="status">
        {filtered.length}{" "}
        {filtered.length === 1 ? "storia da scoprire" : "storie da scoprire"}
        {query && ` per “${query}”`}
      </p>
      {filtered.length ? (
        <div className="trip-grid">
          {filtered.map((trip) => (
            <TripCard key={trip.slug} trip={trip} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <SlidersHorizontal size={30} />
          <h3>La prossima avventura è ancora da scrivere.</h3>
          <p>Prova un’altra destinazione o una parola diversa.</p>
          <Button
            onClick={() => {
              setQuery("");
              setRegion("Tutti");
            }}
          >
            Mostra tutti i viaggi
          </Button>
        </div>
      )}
    </section>
  );
}
