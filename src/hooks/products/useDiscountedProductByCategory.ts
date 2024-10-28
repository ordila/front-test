import { useQuery } from "@tanstack/react-query";

import { ProductService } from "@/services";
import { ProductDto } from "@/dto/product.dto";

export const useProductsByCategory = (categoryId: number) => {
  const { data, isLoading, error } = useQuery<ProductDto[], Error>({
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
