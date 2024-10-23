import { axiosInstance } from "@/utils";

export class CategoryService {
  static async fetchCategories() {
    const { data } = await axiosInstance.get("/products-categories");
    return data;
  }
}
