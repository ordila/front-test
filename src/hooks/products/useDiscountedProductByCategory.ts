import { useQuery } from "@tanstack/react-query";

import { ProductService } from "@/services";

export const useProductsByCategory = (categoryId: number) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["discountedProductsByCategory"],
    queryFn: () => ProductService.getDiscountedProductsByCategory(categoryId),
    enabled: !!categoryId,
  });

  const largeSliderProducts = data?.slice(0, 3) || [];

  const smallSliderProducts = data?.slice(3, 12) || [];

  return {
    largeSliderProducts,
    smallSliderProducts,
    isLoading,
    error,
  };
};
