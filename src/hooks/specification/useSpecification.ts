import { ProductSpecificationsDto } from "@/dto/specification.dto";
import { SpecificationService } from "@/services/specification/specification.service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useSpecification = () => {
  const { productID } = useParams();

  const {
    data: specification,
    isLoading,
    isError,
  } = useQuery<ProductSpecificationsDto>({
    queryKey: ["specificationByID"],
    queryFn: () =>
      SpecificationService.getProductsSpecification(productID as string),
  });

  return { specification, isLoading, isError };
};
