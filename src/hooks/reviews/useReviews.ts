import { useQuery } from "@tanstack/react-query";

import { ReviewsService } from "@/services/reviews/reviews.service";
import { useParams } from "next/navigation";

export const useProductReviews = () => {
  const { productID } = useParams();

  const {
    data: reviews,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["productReviews", productID],
    queryFn: () => ReviewsService.getReviews(productID as string),
    enabled: Boolean(productID),
  });

  return { reviews, isLoading, isError };
};
