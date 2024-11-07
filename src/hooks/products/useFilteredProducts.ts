import { useEffect, useMemo } from "react";

import { useGlobalStateContext } from "@/сontext/GlobalContext";

import { useProductWithLabelsByCategory } from "./useProductWithLabelsByCategory";

export const useFilteredProducts = (categoryID: string) => {
  const { brandFilter, priceFilter, setAvailableBrands } =
    useGlobalStateContext();

  const {
    data: productsData,
    isLoading,
    isError,
  } = useProductWithLabelsByCategory(categoryID as string);

  useEffect(() => {
    if (productsData) {
      const uniqueBrands = new Set<string>();
      productsData.forEach((labelData) => {
        labelData.products.forEach(({ product }) => {
          const brand = product.name.split(" ")[0].toUpperCase();
          uniqueBrands.add(brand);
        });
      });
      setAvailableBrands(Array.from(uniqueBrands));
    }
  }, [productsData, setAvailableBrands]);

  const filteredData = useMemo(() => {
    if (!productsData) return [];

    return productsData.map((labelData) => ({
      ...labelData,
      products: labelData.products.filter(({ product }) => {
        const brand = product.name.split(" ")[0].toUpperCase();
        const discountedPrice = Math.floor(
          product.price * (1 - (product.discount || 0) / 100)
        );

        const meetsBrandFilter =
          brandFilter.length === 0 || brandFilter.includes(brand);
        const meetsPriceFilter =
          (priceFilter.min === undefined ||
            discountedPrice >= priceFilter.min) &&
          (priceFilter.max === undefined || discountedPrice <= priceFilter.max);

        return meetsBrandFilter && meetsPriceFilter;
      }),
    }));
  }, [productsData, brandFilter, priceFilter]);
  return { filteredData, isLoading, isError };
};
