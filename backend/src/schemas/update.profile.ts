import { z } from "zod";

export const updateProfileSchema = z.object({
  username: z.string().min(3).max(30).optional(),
  firstName: z.string().max(50).optional(),
  password: z.string().min(6).optional(),
  email: z.string().email().optional(),
  lastName: z.string().max(50).optional(),
});