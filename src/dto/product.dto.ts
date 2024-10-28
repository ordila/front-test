import { z } from "zod";

const ProductImageSchema = z.object({
  id: z.number(),
  productId: z.number(),
  imageUrl: z.string().url(),
  isDefault: z.boolean(),
  createdAt: z.string().datetime(),
});

export const ProductSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  discount: z.number().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  images: z.array(ProductImageSchema),
});

export type ProductDto = Omit<
  z.infer<typeof ProductSchema>,
  "createdAt" | "updatedAt"
>;
