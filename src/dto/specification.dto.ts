import { z } from "zod";

// Schema for each specification item within a category
const SpecItemSchema = z.object({
  key: z.string(),
  value: z.string(),
});

// Schema for each category of specifications
const SpecificationCategorySchema = z.object({
  category: z.string(),
  specs: z.array(SpecItemSchema),
});

// Main schema for the product specifications response
export const ProductSpecificationsSchema = z.object({
  productId: z.number(),
  specifications: z.array(SpecificationCategorySchema),
});

export type ProductSpecificationsDto = z.infer<
  typeof ProductSpecificationsSchema
>;
