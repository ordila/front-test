import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ReviewsService } from "@/services/reviews/reviews.service";
import { ProductReviewDto } from "@/dto/reviews.dto";

export const useCreateReview = (
  onSuccess?: (data: ProductReviewDto) => void
) => {
  const queryClient = useQueryClient();

  const {
    mutate: createReview,
    isPending,
    isError,
    isSuccess,
    error,
  } = useMutation({
    mutationFn: ({
      productID,
      review,
    }: {
      productID: string;
      review: { rating: number; comment: string };
    }) => ReviewsService.createReview(productID, review),
    onSuccess: (data) => {
      // Інвалідуємо кеш із використанням об'єкта для queryKey
      console.log("success");
      queryClient.invalidateQueries({
        queryKey: ["productReviews"],
      });
      if (onSuccess) {
        onSuccess(data);
      }
    },
  });

  return { createReview, isPending, isError, isSuccess, error };
};
