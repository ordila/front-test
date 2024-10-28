import { CategoryDto, CategorySchema } from "@/dto/category.dto";
import { axiosInstance } from "@/utils";

export class CategoryService {
  static async fetchCategories(): Promise<CategoryDto[]> {
    const { data } = await axiosInstance.get("/products-categories");

    const categories = CategorySchema.array().parse(data);

    return categories;
  }
}
