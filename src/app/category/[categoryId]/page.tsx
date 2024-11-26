"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import {
  Breadcrumb,
  CategoriesSlider,
  ItemsSlider,
  LargeSlider,
  ProductSlider,
} from "@/ui-kit/composite-components";

import { useFilteredProducts } from "@/hooks/products/useFilteredProducts";
import { useCategoryById, useDiscountedProducts } from "@/hooks";
import Image from "next/image";

import Filter from "@/assets/icons/filter.svg";
import FilterMenu from "@/ui-kit/composite-components/filter/FilterMenu";
import PageSkeleton from "@/ui-kit/base-components/skeleton/PageSkeleton";
import SearchResults from "@/ui-kit/composite-components/home/SearchResult";

const CategoryPage = () => {
  const { categoryID } = useParams();

  const { data } = useCategoryById(categoryID as string);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const breadcrumbItems = [
    {
      title: data?.name || "Category",
      Icon: data?.imageUrl ? (
        <Image src={data.imageUrl} alt="Icon" width={16} height={16} />
      ) : undefined,
    },
  ];

  const { filteredData, isError, isLoading } = useFilteredProducts(
    categoryID as string
  );

  const { smallSliderProducts, largeSliderProducts } = useDiscountedProducts();

  if (isLoading) return <PageSkeleton />;
  if (isError) return <div>Error loading products</div>;

  return (
    <div>
      <CategoriesSlider />
      <div className="flex justify-between items-center">
        <Breadcrumb items={breadcrumbItems} />

        <button
          className="h-5 w-5 md:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <Image src={Filter} alt="burger" className="h-5 w-5" />
        </button>

        <FilterMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {largeSliderProducts && <LargeSlider products={largeSliderProducts} />}
      {smallSliderProducts && <ProductSlider products={smallSliderProducts} />}

      <SearchResults />
      {filteredData.map((labelData) => (
        <ItemsSlider
          key={labelData.id}
          labelKey={labelData.id}
          labelName={labelData.name}
          products={labelData.products.map(({ product }) => product)}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
