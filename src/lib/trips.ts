import "server-only";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { tripSchema, type Trip } from "./trip-schema";

const directory = path.join(process.cwd(), "content/trips");
export const getTrips = cache(async (): Promise<Trip[]> => {
  const files = (await fs.readdir(directory)).filter((file) =>
    file.endsWith(".mdx"),
  );
  const trips = await Promise.all(
    files.map(async (file) => {
      const { data, content } = matter(
        await fs.readFile(path.join(directory, file), "utf8"),
      );
      const parsed = tripSchema.safeParse(data);
      if (!parsed.success)
        throw new Error(
          `Invalid frontmatter in ${file}: ${parsed.error.message}`,
        );
      return {
        ...parsed.data,
        slug: file.replace(/\.mdx$/, ""),
        readingMinutes: Math.max(
          1,
          Math.ceil(content.split(/\s+/).length / 200),
        ),
        searchText: content.replace(/<[^>]*>/g, " "),
      };
    }),
  );
  return trips
    .filter((trip) => !trip.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
});
export async function getTrip(slug: string) {
  const trip = (await getTrips()).find((item) => item.slug === slug);
  if (!trip) return null;
  const { content } = matter(
    await fs.readFile(path.join(directory, `${trip.slug}.mdx`), "utf8"),
  );
  return { trip, content };
}
