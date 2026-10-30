import type { Trip } from "./trip-schema";
export function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("it");
}
export function filterTrips(trips: Trip[], query: string, region: string) {
  const words = normalize(query.trim()).split(/\s+/).filter(Boolean);
  return trips.filter((trip) => {
    const text = normalize(
      [
        trip.title,
        trip.description,
        trip.destination,
        trip.country,
        ...trip.tags,
        trip.searchText,
      ].join(" "),
    );
    return (
      (region === "Tutti" || trip.region === region) &&
      words.every((word) => text.includes(word))
    );
  });
}
