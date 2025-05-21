import { z } from "zod";

export const createUserSchema = z.object({
  username: z.string().min(3).max(30),
  firstName: z.string().max(50),
  password: z.string().min(6),
  email: z.string().email(),
  lastName: z.string().max(50),
});

export type createUserInput = z.infer<typeof createUserSchema>;
