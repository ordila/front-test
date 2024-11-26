import { z } from "zod";

const UserSchema = z.object({
  id: z.number(),
  email: z.string().email(),
  name: z.string().nullable(),
  middleName: z.string().nullable(),
  lastName: z.string().nullable(),
});

const ReviewSchema = z.object({
  id: z.number(),
  rating: z.number().min(1).max(5),
  comment: z.string(),
  createdAt: z.string().datetime(),
  user: UserSchema,
});

export const ProductWithReviewsSchema = z.object({
  productId: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  discount: z.number(),
  reviews: z.array(ReviewSchema),
});

export const ProductReviewSchema = z.object({
  id: z.number(), // Унікальний ідентифікатор відгуку
  userId: z.number(), // Ідентифікатор користувача
  productId: z.number(), // Ідентифікатор продукту
  rating: z.number().min(1).max(5), // Рейтинг від 1 до 5
  comment: z.string().optional(), // Коментар, необов'язковий
  createdAt: z.string().datetime(), // Дата створення
  updatedAt: z.string().datetime(), // Дата оновлення
});

// Тип на основі схеми
export type ProductReviewDto = z.infer<typeof ProductReviewSchema>;

export type ProductWithReviewsDto = z.infer<typeof ProductWithReviewsSchema>;
