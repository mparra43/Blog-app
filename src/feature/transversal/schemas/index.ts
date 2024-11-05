import { z } from 'zod'

export const TagSchema = z.object({
  tags: z.string().array().optional()
})

export type TagValues = z.infer<typeof TagSchema>


export const loginSchema = z.object({
  username: z.string().min(1, 'Campo requerido'),
  password: z.string().min(1, 'Campo requerido')
})

export type LoginValues = z.infer<typeof loginSchema>

