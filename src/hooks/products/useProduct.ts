import { GetAllProductsDto } from "@/dto";
import { ProductService } from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (query: GetAllProductsDto) => {
  const { searchTerm, page = 1, limit = 10, sort = "createdAt" } = query;

  return useQuery({
    queryKey: ["products", searchTerm, page, limit, sort],
    queryFn: async () => ProductService.getAllProducts(query),
    enabled: Boolean(searchTerm),
  });
};
