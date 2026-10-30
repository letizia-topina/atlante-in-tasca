import { describe, expect, test } from "bun:test";
import { filterTrips } from "../src/lib/search";
import { tripSchema, type Trip } from "../src/lib/trip-schema";
const base = {
  title: "Un caffè a Kyoto",
  description: "Passeggiate tra i templi",
  date: "2026-05-18",
  destination: "Kyoto",
  country: "Giappone",
  region: "Mondo" as const,
  duration: 7,
  cover: "/images/kyoto.jpg",
  coverAlt: "Una strada di Kyoto",
  coverPosition: "50% 50%",
  tags: ["Cultura"],
  featured: false,
  draft: false,
  slug: "kyoto",
  readingMinutes: 2,
  searchText: "Una bottega di ceramica",
};
const trips: Trip[] = [
  base,
  {
    ...base,
    slug: "liguria",
    title: "Liguria sul mare",
    destination: "Liguria",
    country: "Italia",
    region: "Italia",
    tags: ["Mare"],
    searchText: "Focaccia a Manarola",
  },
];
describe("trip discovery", () => {
  test("ignores case and accents", () =>
    expect(filterTrips(trips, "CAFFE", "Tutti").map((t) => t.slug)).toEqual([
      "kyoto",
    ]));
  test("searches article bodies and tags", () => {
    expect(filterTrips(trips, "ceramica", "Tutti")[0].slug).toBe("kyoto");
    expect(filterTrips(trips, "cultura", "Mondo")[0].slug).toBe("kyoto");
  });
  test("combines words with a destination filter", () => {
    expect(
      filterTrips(trips, "liguria focaccia", "Italia").map((t) => t.slug),
    ).toEqual(["liguria"]);
    expect(filterTrips(trips, "ceramica", "Italia")).toEqual([]);
  });
  test("returns all trips for whitespace and none for an unknown term", () => {
    expect(filterTrips(trips, "  ", "Tutti")).toHaveLength(2);
    expect(filterTrips(trips, "Atlantide", "Tutti")).toEqual([]);
  });
  test("validates author metadata and defaults drafts to false", () => {
    const metadata: Record<string, unknown> = { ...base };
    delete metadata.draft;
    delete metadata.featured;
    expect(tripSchema.parse(metadata).draft).toBe(false);
    expect(tripSchema.safeParse({ ...base, duration: -1 }).success).toBe(false);
  });
});
