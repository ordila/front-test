import React from "react";

import ArrowIcon from "@/assets/icons/ArrowIcon";

export const ButtonIcon = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <button
      className={`h-full w-full font-semibold  uppercase bg-flash-green  flex justify-center items-center gap-2`}
    >
      {title}
      <div className={className}>
        <ArrowIcon />
      </div>
    </button>
  );
};
