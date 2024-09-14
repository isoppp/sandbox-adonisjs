import vine from '@vinejs/vine'
import type { Infer } from '@vinejs/vine/types'

export const loginSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(6),
})
export type LoginSchema = Infer<typeof loginSchema>
export const loginValidator = vine.compile(loginSchema)
