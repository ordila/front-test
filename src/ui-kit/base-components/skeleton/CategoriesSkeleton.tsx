import React from "react";
import { Skeleton, Box } from "@mui/material";

export const CategoriesSkeleton = () => {
  return (
    <ul className="pt-[40px] h-[900px] border-r border-[#00000033] space-y-3">
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="flex pl-5 w-[406px] h-[60px] items-center gap-3"
        >
          <Skeleton
            variant="circular"
            width={24}
            height={24}
            animation="wave"
          />

          <Skeleton
            variant="rectangular"
            width="300px"
            height={40}
            animation="wave"
          />
        </li>
      ))}
    </ul>
  );
};
