import { FC } from "react";
import Image from "next/image";

import ArrowLg from "@/assets/icons/Arrow-lg.svg";
import ArrowMd from "@/assets/icons/arrow-md.svg";
import ArrowSm from "@/assets/icons/arrow-sm.svg";

import { ProductDto } from "@/dto";

export interface BannerProps {
  product: ProductDto;
}

export const Banner: FC<BannerProps> = ({ product }) => {
  const discountedPrice = Math.floor(
    product.price - (product.price * (product.discount ?? 0)) / 100
  );

  return (
    <div
      className="relative p-[16px] shadow-lg md:flex items-center justify-between bg-cover bg-center overflow-hidden max-w-[1300px] md:px-[130px]"
      style={{
        backgroundImage: "url('/bg-banner.png')",
      }}
    >
      {/* Ліва частина - текст */}
      <div className="text-left z-10 md:w-[500px] ">
        <div className="flex items-center justify-between mb-4 md:mb-[50px]">
          <p className="text-xs bg-lilac text-white py-1 px-3 font-semibold">
            BEST PRICE
          </p>
          <p className="text-sm font-semibold">{product.name}</p>
        </div>

        {/* Заголовок */}
        <h1 className="text-[26px] md:text-[60px] font-black leading-tight mb-4 text-center">
          FROM THE COVERS <br /> TO YOUR POCKET!
        </h1>

        {/* Знижка */}
        <div className="flex justify-center items-center gap-2 md:gap-10">
          <div className="flex text-[48px]  md:text-[128px] font-black  mb-4">
            -{product.discount}
            <span className="self-start text-[32px] md:text-[60px] mt-[5px] md:mt-10 ml-[5px] md:ml-[18px]">
              %
            </span>
          </div>

          <div className="flex flex-col items-end gap-5">
            <Image src={ArrowSm} alt="arrow" className="hidden md:block" />
            <Image src={ArrowMd} alt="arrow" />
            <Image src={ArrowLg} alt="arrow" className="hidden md:block" />
          </div>
          <div className="md:text-[32px] font-medium flex flex-col  md:gap-4">
            <span className="line-through text-dark-gray mr-4">
              ${product.price}
            </span>
            <span className="text-black text-[30px] md:text-[44px] font-bold">
              ${discountedPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Права частина - зображення телефону */}
      <div className=" relative flex-shrink-0 z-10">
        <Image
          src={product.images[0].imageUrl}
          alt="Vivo Phone"
          width={426}
          height={426}
          className="object-contain sm:mx-auto"
        />

        {/* Ефект відзеркалення
        <div className="absolute left-0 right-0 bottom-[-420px] opacity-20">
          <Image
            src={product.images[0].imageUrl}
            alt="Vivo Phone Reflection"
            width={426}
            height={426}
            className="object-contain transform scale-y-[-1]"
          />
        </div> */}
      </div>
    </div>
  );
};
