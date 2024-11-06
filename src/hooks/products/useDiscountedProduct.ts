import { useQuery } from "@tanstack/react-query";

import { ProductService } from "@/services";
import { ProductDto } from "@/dto";

export const useDiscountedProducts = () => {
  const { data, isLoading, error } = useQuery<ProductDto[], Error>({
    queryKey: ["discountedProducts"],
    queryFn: ProductService.getDiscountedProducts,
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
