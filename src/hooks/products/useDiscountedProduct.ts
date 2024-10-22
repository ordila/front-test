import { useQuery } from "@tanstack/react-query";
import { Product } from "@/types/product/product";

import { ProductService } from "@/services";

export const useDiscountedProducts = () => {
  const { data, isLoading, error } = useQuery<Product[], Error>({
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
