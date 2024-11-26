import { axiosInstance } from "@/utils";
import {
  ProductWithReviewsSchema,
  ProductWithReviewsDto,
  ProductReviewSchema,
} from "@/dto/reviews.dto";
import { ZodError } from "zod";

export class ReviewsService {
  static async getReviews(productId: string): Promise<ProductWithReviewsDto> {
    try {
      const response = await axiosInstance.get(`reviews/${productId}`);

      const data = ProductWithReviewsSchema.parse(response.data);
      return data;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }
      throw error;
    }
  }

  static async createReview(
    productId: string,
    productReview: { rating: number; comment: string }
  ) {
    try {
      const response = await axiosInstance.post(
        `reviews/${productId}`,
        productReview
      );
      const data = ProductReviewSchema.parse(response.data);

      return data;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }
      throw error;
    }
  }
}
