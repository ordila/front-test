import { Product } from "@/types/product/product";
import { axiosInstance } from "@/utils";

export class ProductService {
  static async getDiscountedProducts(): Promise<Product[]> {
    const response = await axiosInstance.get<Product[]>(
      "/products/discounted-products"
    );
    return response.data;
  }

  static async getDiscountedProductsByCategory(
    categoryId: number
  ): Promise<Product[]> {
    const response = await axiosInstance.get<Product[]>(
      `/products/category/${categoryId}/discounted`
    );
    return response.data;
  }
}
