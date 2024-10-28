"use client";

import {
  CategoriesSlider,
  LargeSlider,
  ProductSlider,
} from "@/ui-kit/composite-components";

import { useDiscountedProducts } from "@/hooks";

export default function Home() {
  const { smallSliderProducts, largeSliderProducts, isLoading, error } =
    useDiscountedProducts();

  console.log("largeSliderProducts", smallSliderProducts);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <CategoriesSlider />

      {largeSliderProducts && <LargeSlider products={largeSliderProducts} />}
      {smallSliderProducts && <ProductSlider products={smallSliderProducts} />}
    </div>
  );
}
