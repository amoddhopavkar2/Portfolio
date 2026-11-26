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

// Book notes: one Markdown file per book in src/content/books/.
// The body is optional; frontmatter alone is enough for the list.
const books = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().int().min(1).max(10),
    read: z.coerce.date(),
    takeaway: z.string(),
  }),
})

export const collections = { writing, books }
