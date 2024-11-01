"use client";

import React from "react";

import { useFavorites } from "@/hooks";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { Breadcrumb, ProductCard } from "@/ui-kit/composite-components";

const breadcrumbItems = [
  {
    title: "Favorites",
    Icon: FavoriteBorderIcon,
  },
];

const FavoritesPage = () => {
  const { wishList, removeAllFromWishList } = useFavorites();

  return (
    <div>
      <Breadcrumb items={breadcrumbItems} />

      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-bold uppercase">Your list</h1>
        <div className="flex gap-5">
          <button className="w-[95px] h-[40px] bg-[#ADFF2F] text-black font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
            Share
          </button>
          <button
            onClick={() => removeAllFromWishList()}
            className="w-[95px] h-[40px] bg-black text-white font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#ADFF2F] hover:text-black"
          >
            Clean all
          </button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap">
        {wishList?.map((product) => (
          <div key={product.id} className="w-full md:w-[260px]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
