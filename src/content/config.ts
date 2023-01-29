// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Define a schema for each collection you'd like to validate.
const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    publishDate: z.string(),
  }),
})
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  news: newsCollection,
}
