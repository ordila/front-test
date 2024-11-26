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
import PageSkeleton from "@/ui-kit/base-components/skeleton/PageSkeleton";
import SearchResults from "@/ui-kit/composite-components/home/SearchResult";

export default function Home() {
  const { smallSliderProducts, largeSliderProducts, isLoading, error } =
    useDiscountedProducts();
  const { data } = useProductWithLabels();

  if (isLoading) return <PageSkeleton />;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <CategoriesSlider />
      <AuthModal />

      {!smallSliderProducts && !largeSliderProducts && (
        <p>No products available</p>
      )}
      {largeSliderProducts && <LargeSlider products={largeSliderProducts} />}
      {smallSliderProducts && <ProductSlider products={smallSliderProducts} />}

      <SearchResults />

      {/* Слайдери за категоріями */}
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
