"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { NavigationOptions } from "swiper/types";

import Countdown from "react-countdown";

import "swiper/swiper-bundle.css";

import { ButtonIcon } from "@/ui-kit/base-components";

import { PromotionalSliderWrapperProps } from "./PromotionalSlider";

interface DesktopPromotionalSliderProps extends PromotionalSliderWrapperProps {
  prevRef: React.RefObject<HTMLButtonElement>;
  nextRef: React.RefObject<HTMLButtonElement>;
}

const DesktopPromotionalSlider = ({
  products,
  prevRef,
  nextRef,
}: DesktopPromotionalSliderProps) => {
  return (
    <div className="hidden md:block">
      <Swiper
        modules={[Pagination, Navigation]}
        loop
        spaceBetween={20}
        slidesPerView={1}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          if (navigation && prevRef.current && nextRef.current) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <Link href={`product/${product.id}`}>
              <div
                className=" relative grid grid-cols-3 grid-rows-3 gap-4"
                style={{
                  gridTemplateAreas: `
                  "main main side3 "
                  "main main side4 "
                  "side1 side2 side5 "
               
                `,
                }}
              >
                <div
                  className="hidden md:flex  col-span-2 row-span-3 px-[75px] py-[70px]  bg-super-light-grey relative  flex-col items-start justify-center"
                  style={{ gridArea: "main" }}
                >
                  {product.isBestSeller && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold ">
                      Best Seller
                    </span>
                  )}
                  <div className="w-full flex justify-between">
                    <h3 className="text-lg font-bold mb-2 text-gray-700 uppercase">
                      {product.name}
                    </h3>
                    <Countdown
                      date={
                        product.endDate ??
                        new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                      }
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="flex gap-2 text-lg font-semibold mb-4">
                          <div className="text-center">
                            <span className="text-xs uppercase">Days</span>
                            <span className="text-[24px] w-[50px] h-[50px] flex justify-center items-center border border-medium-grey">
                              {days}
                            </span>
                          </div>
                          <span>:</span>
                          <div className="text-center">
                            <span className="text-xs uppercase">Hours</span>
                            <span className="text-[24px] w-[50px] h-[50px] flex justify-center items-center border border-medium-grey">
                              {hours}
                            </span>
                          </div>
                          <span>:</span>
                          <div className="text-center">
                            <span className="text-xs uppercase">Min</span>
                            <span className="text-[24px] w-[50px] h-[50px] flex justify-center items-center border border-medium-grey">
                              {minutes}
                            </span>
                          </div>
                          <span>:</span>
                          <div className="text-center">
                            <span className="text-xs uppercase">Sec</span>
                            <span className="text-[24px] w-[50px] h-[50px] flex justify-center items-center border border-medium-grey">
                              {seconds}
                            </span>
                          </div>
                        </div>
                      )}
                    />
                  </div>
                  <div className="w-full flex">
                    <div className="flex flex-col mb-4">
                      <p className="font-black text-[40px] uppercase max-w-[360px]">
                        you will find the best price here!
                      </p>
                      <div className="w-full flex items-center  gap-[54px]">
                        <div className="flex">
                          <span className="text-[84px] font-extrabold mr-2">
                            -{product.discount}
                          </span>
                          <span className="text-[40px] mt-[20px]">%</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="line-through text-[#717171] text-xl mr-2">
                            ${product.price}
                          </span>
                          <span className="text-4xl font-bold text-black">
                            $
                            {Math.floor(
                              product.price *
                                (1 - (product.discount || 0) / 100)
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                    {product.images[0] && (
                      <Image
                        src={product.images[0].imageUrl}
                        alt={product.name || "Product"}
                        width={300}
                        height={200}
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="flex w-[104px] h-8 justify-center items-center absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
                    <ButtonIcon title="Explore" className="-rotate-45" />
                  </div>
                </div>

                {products
                  .filter((_, i) => i !== index)
                  .slice(0, 6)
                  .map((sideProduct, sideIndex) => (
                    <Link href={`product/${sideProduct.id}`} key={sideIndex}>
                      <div
                        key={sideProduct.id}
                        className="group relative p-[30px] bg-super-light-grey flex justify-between"
                        style={{ gridArea: `side${sideIndex + 1}` }}
                      >
                        <div className="absolute top-[30px] left-[30px] bg-red text-white px-2 py-1 text-sm font-semibold">
                          -{sideProduct.discount}%
                        </div>

                        <div className="flex flex-col items-center self-end">
                          <span className="text-[#717171] line-through text-[16px]">
                            ${sideProduct.price}
                          </span>
                          <span className="block text-[20px] font-extrabold text-black">
                            $
                            {Math.floor(
                              sideProduct.price *
                                (1 - (sideProduct.discount || 0) / 100)
                            )}
                          </span>
                        </div>

                        <div className="flex flex-col justify-between">
                          {sideProduct.images[0] && (
                            <Image
                              src={sideProduct.images[0].imageUrl}
                              alt={sideProduct.name || "Product"}
                              width={202}
                              height={123}
                              className="object-contain"
                            />
                          )}

                          <p className="text-[16px] text-gray-700 uppercase font-medium text-right">
                            {sideProduct.name}
                          </p>
                        </div>
                        <div className="flex w-[104px] h-8 justify-center items-center absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-in-out">
                          <ButtonIcon title="Explore" className="-rotate-45" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesktopPromotionalSlider;
