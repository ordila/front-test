import { z } from "zod";
import { ProductSchema } from "./product.dto";

export const LabelProductSchema = z.object({
  id: z.number(),
  productId: z.number(),
  labelId: z.number(),
  createdAt: z.string().datetime(),
  product: ProductSchema,
});

export const LabelWithProductsSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  products: z.array(LabelProductSchema),
});

const ProductImageSchema = z.object({
  imageUrl: z.string().url(),
});

const ProductWithImagesSchema = ProductSchema.extend({
  images: z.array(ProductImageSchema),
});

export const NewLabelWithProductsSchema = z.object({
  labelName: z.string(),
  products: z.array(ProductWithImagesSchema),
});

export type LabelWithProductsDto = z.infer<typeof LabelWithProductsSchema>;
export type NewLabelWithProductsDto = z.infer<
  typeof NewLabelWithProductsSchema
>;
