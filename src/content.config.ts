import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// Posts: one Markdown file per post in src/content/writing/.
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
})

// Books: one Markdown file per book in src/content/books/, seeded from the
// Goodreads "read" shelf (rating = Goodreads stars x 2). The takeaway and the
// Markdown body (detailed notes) are optional; frontmatter alone is enough.
const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  // Covers live in src/content/books/covers/ and are optimized at build time.
  schema: ({ image }) => z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().int().min(1).max(10),
    cover: image().optional(),
    read: z.coerce.date(),
    takeaway: z.string().optional(),
    goodreads: z.string().url().optional(),
    favorite: z.boolean().default(false),
    finished: z.boolean().default(true),
  }),
})

export const collections = { writing, books }
