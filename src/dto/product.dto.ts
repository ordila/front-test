import { z } from "zod";

// Схема для зображень продукту
const ProductImageSchema = z.object({
  id: z.number().optional(),
  productId: z.number().optional(),
  imageUrl: z.string().url(),
  isDefault: z.boolean().optional(),
  createdAt: z.string().datetime().optional(),
});

// Схема для основної інформації про продукт
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

export type ProductDto = z.infer<typeof ProductSchema>;
