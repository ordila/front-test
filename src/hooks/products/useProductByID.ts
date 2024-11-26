"use client";
import { ProductByIDDto } from "@/dto";
import { ProductService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export const useProductByID = () => {
  const { productID } = useParams();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<ProductByIDDto>({
    queryKey: ["productByID"],
    queryFn: () => ProductService.getProductByID(productID as string),
  });

  return { product, isLoading, isError };
};
