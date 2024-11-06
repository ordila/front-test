import { LabelWithProductsDto } from "@/dto";
import { ProductService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useProductWithLabels = () => {
  const { data, isError, isLoading } = useQuery<LabelWithProductsDto[]>({
    queryKey: ["productsWithLabels"],
    queryFn: ProductService.getAllProductWithLabels,
  });

  return { data, isError, isLoading };
};
