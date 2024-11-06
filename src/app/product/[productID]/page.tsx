"use client";
import React from "react";

import { useParams } from "next/navigation";

const ProductPage = () => {
  const { productID } = useParams();

  return <div>Product page : {productID}</div>;
};

export default ProductPage;
