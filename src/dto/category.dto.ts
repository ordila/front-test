import { z } from "zod";

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type CategoryDto = Omit<
  z.infer<typeof CategorySchema>,
  "createdAt" | "updatedAt"
>;
