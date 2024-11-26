import React from "react";
import ProductSlider from "./slider/AboutProductSlider";
import { ProductTitle } from "./title/ProductTitle";
import ProductInfo from "./warranty/Warranty";

const AboutProduct = () => {
  return (
    <div className="flex justify-end flex-col gap-4 md:gap-10  md:flex-row-reverse">
      <div className="flex flex-col">
        <ProductTitle />
        <ProductInfo />
      </div>

      <div className="hidden md:block">
        <ProductSlider />
      </div>
    </div>
  );
};

export default AboutProduct;
