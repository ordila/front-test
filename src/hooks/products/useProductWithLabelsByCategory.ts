import { LabelWithProductsDto } from "@/dto";

import { ProductService } from "@/services";

import { useQuery } from "@tanstack/react-query";

export const useProductWithLabelsByCategory = (categoryId: string) => {
  const { data, isError, isLoading } = useQuery<LabelWithProductsDto[]>({
    queryKey: ["productsWithLabels", categoryId],
    queryFn: () => ProductService.getAllProductWithLabelsByCategory(categoryId),
    enabled: !!categoryId,
  });

  return { data, isError, isLoading };
};
