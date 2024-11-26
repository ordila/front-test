import { useProductByID } from "@/hooks/products/useProductByID";
import React from "react";

import Logo from "@/assets/images/logo_background_header_phone.png";
import Image from "next/image";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useFavorites } from "@/hooks";
import ProductSlider from "../slider/AboutProductSlider";

export const ProductTitle = () => {
  const { product } = useProductByID();

  const { isFavorite, addToWishList, removeFromWishList } = useFavorites();
  const isProductFavorite = isFavorite(product?.id as number);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();

    if (isProductFavorite) {
      removeFromWishList(product?.id as number);
    } else {
      addToWishList(product);
    }
  };

  return (
    <div className="border-b border-[#00000033]">
      <div>
        <p className="text-[32px] md:text-[40px] font-black">{product?.name}</p>
        <p className="text-[24px] md:text-[32px] font-medium">
          {product?.description}
        </p>
        <p className="text-[#717171] text-right">CODE: {product?.id}</p>
      </div>
      <div className="md:hidden my-6">
        <ProductSlider />
      </div>
      <div className="flex gap-2 items-center mb-4">
        <p className="text-5 font-extrabold">SELLER </p>
        <Image src={Logo} alt="Logo" width={24} height={24} />
      </div>
      <div className="flex gap-4 md:gap-6 flex-col md:flex-row md:items-center">
        <div className="flex justify-between">
          <div className="flex justify-between w-full">
            <div>
              <p className="line-through text-[24px] font-medium text-dark-gray">
                ${product?.price}
              </p>
              <p className="text-[40px] font-black">
                $
                {(
                  product?.price -
                  (product?.price * (product?.discount ?? 0)) / 100
                ).toFixed(0)}
              </p>
            </div>
            <div
              onClick={toggleFavorite}
              className="md:hidden flex justify-center items-center self-end md:items-center w-[42px] h-[42px] border border-[#00000033] cursor-pointer"
            >
              {isProductFavorite ? (
                <FavoriteIcon sx={{ color: "#CDFF3A" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "gray" }} />
              )}
            </div>
          </div>
        </div>
        <button className="w-full md:w-[240px] h-[40px] bg-[#ADFF2F] text-black font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-black hover:text-white">
          BUY
        </button>
        <button className="w-full md:w-[240px] h-[40px] bg-black text-white font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#ADFF2F] hover:text-black">
          BUY IN CREDIT
        </button>
        <div
          onClick={toggleFavorite}
          className="hidden md:flex justify-center md:items-center w-[42px] h-[42px] border border-[#00000033] cursor-pointer"
        >
          {isProductFavorite ? (
            <FavoriteIcon sx={{ color: "#CDFF3A" }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: "gray" }} />
          )}
        </div>
      </div>
    </div>
  );
};
