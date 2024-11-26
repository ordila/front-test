"use client";
import React from "react";

import { useProductByID } from "@/hooks/products/useProductByID";
import ProductTabs from "@/ui-kit/composite-components/product/about-product/tabs/ProductTabs";

const ProductPage = () => {
  const { isLoading, isError } = useProductByID();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error happened</div>;
  }

  return (
    <div>
      <ProductTabs />
    </div>
  );
};

export default ProductPage;
