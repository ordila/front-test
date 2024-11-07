import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "@/services";
import { CategoryDto } from "@/dto";

export const useCategoryById = (categoryId: string) => {
  return useQuery<CategoryDto, Error>({
    queryKey: ["category"],
    queryFn: () => CategoryService.getCategoryById(categoryId),
  });
};
