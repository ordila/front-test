"use client";

import {
  AuthModal,
  CategoriesSlider,
  LargeSlider,
  ProductSlider,
  ItemsSlider,
} from "@/ui-kit/composite-components";

import { useDiscountedProducts, useProductWithLabels } from "@/hooks";

import { ProductDto } from "@/dto";

export default function Home() {
  const { smallSliderProducts, largeSliderProducts, isLoading, error } =
    useDiscountedProducts();

  const { data } = useProductWithLabels();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <CategoriesSlider />

      <AuthModal />

      {largeSliderProducts && <LargeSlider products={largeSliderProducts} />}
      {smallSliderProducts && <ProductSlider products={smallSliderProducts} />}

      {data?.map((labelData) => (
        <ItemsSlider
          key={labelData.id}
          labelKey={labelData.id}
          labelName={labelData.name}
          products={
            labelData.products.map(({ product }) => ({
              ...product,
            })) as ProductDto[]
          }
        />
      ))}
    </div>
  );
}
