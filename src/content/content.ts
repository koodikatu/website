import {defineCollection, z} from 'astro:content'

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  })
})

export const collections = { caseStudies }
