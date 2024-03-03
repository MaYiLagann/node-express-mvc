import { z } from "zod";

export type RequestPostUserModel = z.infer<typeof RequestPostUserSchema>;

export const RequestPostUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string(),
});

export type ResponsePostUserModel = z.infer<typeof ResponsePostUserSchema>;

export const ResponsePostUserSchema = z.object({
  id: z.number(),
});
