import { z } from "zod";

const DefaultProductImageSchema = z.object({
  imageUrl: z.string().url(),
});

export const ProductWithDefaultImageSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  discount: z.number().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  images: z.array(DefaultProductImageSchema).optional(),
});

export const WishListItemSchema = z.object({
  id: z.number(),
  userId: z.number(),
  productId: z.number(),
  createdAt: z.string().datetime(),
});

export type WishListItemDto = Omit<
  z.infer<typeof WishListItemSchema>,
  "createdAt"
>;

export type ProductWithDefaultImageDto = z.infer<
  typeof ProductWithDefaultImageSchema
>;
