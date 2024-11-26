import React, { useState } from "react";
import { useCreateReview } from "@/hooks/reviews/useCreateReview";
import { useParams } from "next/navigation";
import { Rating } from "@mui/material";

const CreateReviewForm = () => {
  const { productID } = useParams();

  const [rating, setRating] = useState<number | null>(0);
  const [comment, setComment] = useState("");
  const [formPhase, setFormPhase] = useState<"initial" | "review" | "success">(
    "initial"
  );

  const { createReview, isPending, isError } = useCreateReview(() => {
    setFormPhase("success");
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating) return;

    createReview({ productID, review: { rating, comment } });
    setFormPhase("review");
  };

  const handleCancel = () => {
    setRating(0);
    setComment("");
    setFormPhase("initial");
  };

  return (
    <div className="p-4 space-y-4 bg-super-light-grey">
      {formPhase === "initial" && (
        <>
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div>
              <p className="text-sm font-bold">* SET A RATING</p>
              <Rating
                value={rating}
                onChange={(_, value) => setRating(value)}
                precision={1}
              />
            </div>

            <div>
              <p className="text-sm font-bold">* ENTER YOUR REVIEW</p>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Enter"
                className="w-full rounded p-2"
                rows={4}
              />
            </div>

            <div className="flex space-x-4 justify-end">
              <button
                type="submit"
                className="w-[142px] md:w-[160px] px-6 py-2 bg-black text-white disabled:bg-light-grey disabled:cursor-not-allowed disabled:text-black"
                disabled={isPending || !rating || !comment.trim()}
              >
                {isPending ? "Submitting..." : "SEND"}
              </button>
              <button
                type="button"
                className="w-[142px] md:w-[160px] px-6 py-2 border border-[#D1D1D1]"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </div>
            {isError && (
              <p className="text-red-500 text-sm">
                Error submitting review. Please try again.
              </p>
            )}
          </form>
        </>
      )}

      {formPhase === "review" && (
        <>
          <div className="space-y-2">
            <p className="text-sm font-bold">+100 BONUSES</p>
            <p className="text-lg font-medium">
              LEAVE YOUR REVIEW ABOUT THIS PRODUCT
            </p>
          </div>

          <div className="border p-4 rounded">
            <p className="text-sm font-bold">SET A RATING</p>

            <Rating sx={{ fontSize: "32px" }} value={rating} readOnly />

            <p className="mt-4 text-sm font-bold">ENTER YOUR REVIEW</p>
            <p className="text-sm">{comment || "No comment provided"}</p>
          </div>

          <div className="flex space-x-4 mt-4">
            <button
              type="button"
              className="px-6 py-2 bg-black text-white rounded"
              onClick={handleSubmit}
            >
              SEND
            </button>
            <button
              type="button"
              className="px-6 py-2 border rounded"
              onClick={handleCancel}
            >
              CLOSE
            </button>
          </div>
        </>
      )}

      {formPhase === "success" && (
        <>
          <p className="text-sm font-bold text-green-600">
            YOUR REVIEW HAS BEEN SUCCESSFULLY ADDED TO THE SYSTEM
          </p>

          <button
            type="button"
            className="px-6 py-2 border rounded"
            onClick={handleCancel}
          >
            CLOSE
          </button>
        </>
      )}
    </div>
  );
};

export default CreateReviewForm;
