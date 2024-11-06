import { z } from "zod";
import { ProductSchema } from "./product.dto";

const LabelProductSchema = z.object({
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

export type LabelWithProductsDto = z.infer<typeof LabelWithProductsSchema>;
