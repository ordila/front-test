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

export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  imageUrl: z.string().url(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

const LabelProductSchema = z.object({
  id: z.number(),
  productId: z.number(),
  labelId: z.number(),
  createdAt: z.string().datetime(),
});

export const ProductByIDSchema = z.object({
  id: z.number(),
  categoryId: z.number(),
  name: z.string(),
  description: z.string().nullable(),
  price: z.number(),
  discount: z.number(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  category: CategorySchema,
  images: z.array(ProductImageSchema),
  variantCategories: z.array(z.any()),
  specificationCategories: z.array(z.any()),
  reviews: z.array(z.any()),
  label: z.array(LabelProductSchema),
});

export const GetAllProductsSchema = z.object({
  category: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : undefined)), // Перетворення в число
  priceMin: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : undefined)), // Перетворення в число
  priceMax: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : undefined)), // Перетворення в число
  page: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : undefined)), // Перетворення в число
  limit: z
    .string()
    .optional()
    .transform((value) => (value ? parseInt(value, 10) : undefined)), // Перетворення в число
  sort: z.string().optional(), // Залишаємо рядок як є
  searchTerm: z.string().optional(), // Залишаємо рядок як є
});

// Тип DTO для TypeScript
export type GetAllProductsDto = z.infer<typeof GetAllProductsSchema>;

export type ProductByIDDto = z.infer<typeof ProductByIDSchema>;

export type ProductDto = z.infer<typeof ProductSchema>;
