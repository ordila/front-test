import React from "react";
import Image from "next/image";

import Arrow from "@/assets/icons/arrow.svg";

export const ButtonIcon = ({ title }: { title: string }) => {
  return (
    <button
      className={`h-full w-full font-semibold  uppercase bg-flash-green  flex justify-center items-center gap-2`}
    >
      {title}
      <Image src={Arrow} alt="arrow" />
    </button>
  );
};
