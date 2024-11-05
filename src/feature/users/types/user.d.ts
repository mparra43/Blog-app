import type { z } from 'zod'

import { type Roles } from '@/feature/users/constants'
import type { AuthUserSchema, UserSchema } from '@/feature/users/schemas/userSchema'

export type RoleValues = (typeof Roles)[keyof typeof Roles]
export type RoleKeys = keyof typeof Roles

export type User = z.infer<typeof UserSchema>
export type AuthUser = z.infer<typeof AuthUserSchema>

export interface AuthValues {
  username: User['username']
  password: string
}


export type Users = User[];

export type UsersResponse = {
  users: Users;
}

export interface AuthAccessResponse  {
  roleId: AuthUser['roleId']
}
