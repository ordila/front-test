import {
  LabelWithProductsDto,
  LabelWithProductsSchema,
} from "@/dto/labels.dto";
import {
  GetAllProductsDto,
  ProductByIDDto,
  ProductByIDSchema,
  ProductDto,
  ProductSchema,
} from "@/dto";

import { axiosInstance } from "@/utils";
import { ZodError } from "zod";

export class ProductService {
  static async getProductByID(id: string): Promise<ProductByIDDto> {
    try {
      const response = await axiosInstance.get<ProductByIDDto>(
        `/products/${id}`
      );

      const product = ProductByIDSchema.parse(response.data);

      return product;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }

      throw error;
    }
  }

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

  static async getAllProductWithLabels(): Promise<LabelWithProductsDto[]> {
    try {
      const response = await axiosInstance.get<LabelWithProductsDto[]>(
        "labels/products-with-labels"
      );

      const products = LabelWithProductsSchema.array().parse(response.data);

      return products;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }

      throw error;
    }
  }

  static async getAllProductWithLabelsByCategory(
    id: string
  ): Promise<LabelWithProductsDto[]> {
    try {
      const response = await axiosInstance.get(
        `/labels/products-with-labels/category/${id}`
      );

      const products = LabelWithProductsSchema.array().parse(response.data);

      return products;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }

      throw error;
    }
  }

  static async getAllProducts(query: GetAllProductsDto): Promise<ProductDto[]> {
    try {
      const response = await axiosInstance.get<ProductDto[]>("/products", {
        params: query,
      });

      const products = ProductSchema.array().parse(response.data);

      return products;
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
