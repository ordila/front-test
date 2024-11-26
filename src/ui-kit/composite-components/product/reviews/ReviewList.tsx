import React from "react";
import ReviewItem from "./ReviewItem";

interface Review {
  id: number;
  comment: string;
  createdAt: string;
  rating: number;
  user: {
    name: string | null;
    email: string;
  };
}

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          comment={review.comment}
          createdAt={review.createdAt}
          rating={review.rating}
          user={review.user}
        />
      ))}
    </div>
  );
};

export default ReviewsList;
