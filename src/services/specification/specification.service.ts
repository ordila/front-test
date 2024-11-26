import { ProductSpecificationsSchema } from "@/dto/specification.dto";
import { axiosInstance } from "@/utils";
import { ZodError } from "zod";

export class SpecificationService {
  static async getProductsSpecification(productID: string) {
    try {
      const response = await axiosInstance.get(
        `products/${productID}/specification-categories`
      );

      const data = ProductSpecificationsSchema.parse(response.data);

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
