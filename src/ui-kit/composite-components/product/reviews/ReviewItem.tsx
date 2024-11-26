import React from "react";
import Rating from "@mui/material/Rating"; // Імпорт MUI Rating

interface ReviewItemProps {
  comment: string;
  createdAt: string;
  rating: number;
  user: {
    name: string | null;
    email: string;
  };
}

const ReviewItem: React.FC<ReviewItemProps> = ({
  comment,
  createdAt,
  rating,
  user,
}) => {
  const displayName = user.name || user.email;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="border border-[#00000033] p-4 mb-4 flex flex-col  justify-between  gap-4">
      <div className="md:flex justify-between">
        <span className="text-lg font-bold">{displayName}</span>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">{formattedDate}</span>
          <Rating
            name="read-only-rating"
            value={rating}
            precision={0.5}
            readOnly
          />
        </div>
      </div>

      <p className="flex-grow text-gray-800">{comment}</p>
    </div>
  );
};

export default ReviewItem;
