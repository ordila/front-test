"use client";

import { useRef } from "react";
import Link from "next/link";

import DesktopPromotionalSlider from "./DesktopPromotionSlider";
import MobilePromotionalSlider from "./MobilePromotionSlider";

import { NavigationButton } from "@/ui-kit/base-components";

export interface PromotionalSliderWrapperProps {
  products: Product[];
  labelId?: number;
}

export interface Product {
  id: number;
  name?: string;
  price: number;
  discount?: number;
  images: { imageUrl: string }[];
  endDate?: Date;
  isBestSeller?: boolean;
}

export const PromotionalSliderWrapper = ({
  products,
  labelId,
}: PromotionalSliderWrapperProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <div className="flex justify-between items-center mb-6 mt-[100px]">
        <h2 className="text-2xl font-bold uppercase">Promotional Products</h2>

        <div className="flex gap-4">
          <Link
            href={`/label/${labelId?.toString()}`}
            className="w-[95px] h-[40px] bg-black text-white font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-lime-400 hover:text-black"
          >
            See All
          </Link>
          <div className="flex gap-2">
            <NavigationButton ref={prevRef} direction="left" />
            <NavigationButton ref={nextRef} direction="right" />
          </div>
        </div>
      </div>
      <MobilePromotionalSlider products={products} />

      <DesktopPromotionalSlider
        prevRef={prevRef}
        nextRef={nextRef}
        products={products}
      />
    </>
  );
};
