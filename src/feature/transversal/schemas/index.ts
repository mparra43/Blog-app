import { z } from 'zod'

export const TagSchema = z.object({
  tags: z.string().array().optional()
})

export type TagValues = z.infer<typeof TagSchema>


export const loginSchema = z.object({
  username: z
    .string()
    .min(1, 'Campo requerido')
    .regex(/^[A-Za-z0-9\\._-]{7,}$/, 'Nombre de usuario invalido'),
  password: z.string().min(1, 'Campo requerido')
})

export type LoginValues = z.infer<typeof loginSchema>