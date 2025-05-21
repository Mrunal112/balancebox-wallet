import { z } from "zod";

export const signInSchema = z.object({
  username: z.string().min(3).max(30),
  password: z.string().min(6),
});

export type signInInput = z.infer<typeof signInSchema>;
