import { ProductDto, ProductSchema } from "@/dto/product.dto";

import { axiosInstance } from "@/utils";

export class ProductService {
  static async getDiscountedProducts(): Promise<ProductDto[]> {
    const response = await axiosInstance.get<ProductDto[]>(
      "/products/discounted-products"
    );
    const products = ProductSchema.array().parse(response.data);

    return products;
  }

  static async getDiscountedProductsByCategory(
    categoryId: number
  ): Promise<ProductDto[]> {
    const response = await axiosInstance.get<ProductDto[]>(
      `/products/category/${categoryId}/discounted`
    );
    const products = ProductSchema.array().parse(response.data);

    return products;
  }
}
