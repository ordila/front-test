"use client";

import { useProductByID } from "@/hooks/products/useProductByID";
import { useSpecification } from "@/hooks/specification/useSpecification";
import React from "react";

const Specification = () => {
  const { specification } = useSpecification();
  const { product } = useProductByID();

  if (!specification) return <div>Loading...</div>;

  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
        <p className="text-[28px] md:text-[40px] text-black font-black">
          {product?.name}
        </p>
        <p className="text-[14px] md:text-[16px] text-dark-gray mt-2 md:mt-0">
          CODE: {product?.id}
        </p>
      </div>

      <p className="text-[20px] md:text-[32px] text-black font-medium mb-6">
        {product?.description}
      </p>

      <div className="space-y-8 text-dark-gray uppercase">
        {specification.specifications.map((category) => (
          <div key={category.category} className="space-y-2">
            <h3 className="text-lg font-bold uppercase text-black">
              {category.category}
            </h3>

            <div className="flex flex-col gap-4  md:gap-2 ">
              {category.specs.map((spec) => (
                <div
                  key={spec.key}
                  className="flex  md:gap-2 flex-col md:flex-row md:items-start"
                >
                  <div className="flex   md:w-[447px] md:min-w-[447px] items-center">
                    <span className="text-sm font-medium">{spec.key}</span>

                    <span className="hidden h-0 md:block md:h-[2px] flex-grow  md:bg-repeat-x mx-2 md:bg-[length:10px_10px] md:bg-[linear-gradient(to_right,_#D1D1D1,_transparent_50%)]"></span>
                  </div>

                  <span className="text-sm font-semibold text-black md:ml-4 break-words md:max-w-[calc(100%-447px)] mt-1 md:mt-0">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Specification;
