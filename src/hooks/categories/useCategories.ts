import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "@/services";
import { CategoryDto } from "@/dto";

export const useCategories = () => {
  return useQuery<CategoryDto[], Error>({
    queryKey: ["categories"],
    queryFn: CategoryService.fetchCategories,
  });
};
