import { useQuery } from "@tanstack/react-query";

import { CategoryService } from "@/services";

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: CategoryService.fetchCategories,
  });
};
