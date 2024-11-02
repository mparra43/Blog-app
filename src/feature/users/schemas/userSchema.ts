import { z } from 'zod'

import { Roles } from '@/feature/users/constants'
import { RoleValues } from '@/feature/users/types/user'


export const UserSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  roleId: z.string(),
  role: z.string(),
  id: z.string(),
  userName: z.string(),
  normalizedUserName: z.string(),
  email: z.string(),
  
})

export const AuthUserSchema = z.object({
  token: z.string(),
  refreshToken: z.string(),
  userId: z.string(),
  roleName: z.enum(Object.values(Roles) as [RoleValues, ...RoleValues[]]),
  firstName: z.string(),
  lastName: z.string(),
  roleId: z.string()
})
