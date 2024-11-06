import ArrowIcon from "@/assets/icons/ArrowIcon";
import React, { forwardRef } from "react";

interface NavigationButtonProps {
  direction?: "left" | "right";
  onClick?: () => void;
}

export const NavigationButton = forwardRef<
  HTMLButtonElement,
  NavigationButtonProps
>(({ direction = "right", onClick }, ref) => {
  return (
    <button
      ref={ref}
      onClick={onClick}
      className="hidden md:flex group w-[40px] h-[40px] bg-black  justify-center items-center transition-colors duration-200 ease-in-out hover:bg-[#ADFF2F]"
    >
      <div className={direction === "left" ? "rotate-180" : ""}>
        <ArrowIcon color="white" className="group-hover:hidden" />

        <ArrowIcon color="black" className="hidden group-hover:block" />
      </div>
    </button>
  );
});

NavigationButton.displayName = "NavigationButton";
