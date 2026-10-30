import { z } from "zod";

export const tripSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  destination: z.string().min(1),
  country: z.string().min(1),
  region: z.enum(["Italia", "Europa", "Mondo"]),
  duration: z.number().int().positive(),
  cover: z.string().startsWith("/images/"),
  coverAlt: z.string().min(1),
  coverPosition: z.string().default("50% 50%"),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});
export type Trip = z.infer<typeof tripSchema> & {
  slug: string;
  readingMinutes: number;
  searchText: string;
};
