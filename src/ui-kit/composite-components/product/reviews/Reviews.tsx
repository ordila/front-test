import { useProfile } from "@/hooks/auth/useProfile";
import { useProductByID } from "@/hooks/products/useProductByID";
import { useProductReviews } from "@/hooks/reviews/useReviews";
import React from "react";
import ReviewsList from "./ReviewList";
import CreateReviewForm from "./CreateReviewForm";

const Reviews = () => {
  const { product } = useProductByID();

  const { reviews } = useProductReviews();

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <p className="text-[28px] md:text-[40px] text-black font-black">
          {product?.name}
        </p>
        <p className="text-[14px] md:text-[16px] text-dark-gray mt-2 md:mt-0">
          CODE: {product?.id}
        </p>
      </div>

      <p className="text-[20px] md:text-[32px] text-black font-medium mb-6">
        {product?.description}
      </p>
      <div className="mb-4">
        <CreateReviewForm />
      </div>
      {reviews?.reviews.length ? (
        <ReviewsList reviews={reviews.reviews} />
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-2xl font-medium text-gray-600">No reviews yet</p>
        </div>
      )}
    </>
  );
};

export default Reviews;
