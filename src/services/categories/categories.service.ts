import { CategoryDto, CategorySchema } from "@/dto";

import { axiosInstance } from "@/utils";

export class CategoryService {
  static async fetchCategories(): Promise<CategoryDto[]> {
    const { data } = await axiosInstance.get("/products-categories");

    const categories = CategorySchema.array().parse(data);

    return categories;
  }

  static async getCategoryById(categoryId: string): Promise<CategoryDto> {
    const { data } = await axiosInstance.get(
      `/products-categories/${categoryId}`
    );

    const category = await CategorySchema.parse(data);

    return category;
  }
}
