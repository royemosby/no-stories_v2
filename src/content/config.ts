import { z, defineCollection} from "astro:content";

const tags = z.union([z.array(z.string()), z.string()])

const conceptsCollection = defineCollection({
  schema: z.object({
    date: z.date().optional(),
    definition: z.boolean(),
    description: z.string().optional(),
    title: z.string(),
    tags: tags,
    pinned: z.boolean()
  })
})
const draftsCollection = defineCollection({
  schema: z.object({
    date: z.date().optional(),
    description: z.string().optional(),
    title: z.string(),
    tags: tags.optional(),
  })
})
const notesCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    description: z.string(),
    tags: tags,
    title: z.string(),
  })
})
const recipesCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    description: z.string(),
    tags: tags,
    title: z.string(),
  })
})
const toolsCollection = defineCollection({
  schema: z.object({
    date: z.date(),
    description: z.string(),
    tags: tags,
    title: z.string(),
  })
})

export const collections = {
  'concepts': conceptsCollection,
  'drafts': draftsCollection,
  'notes': notesCollection,
  'recipes': recipesCollection,
  'tools': toolsCollection
}