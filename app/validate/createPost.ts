import z from 'zod'

export const createPostSchema = z.object({
  title: z.string().min(2, {}),
  description: z.string().min(10, {}),
})