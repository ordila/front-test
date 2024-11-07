// MobilePromotionalSlider.tsx
"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "react-countdown";

import "swiper/swiper-bundle.css";

import { PromotionalSliderWrapperProps } from "./PromotionalSlider";

import ArrowLg from "@/assets/icons/Arrow-lg.svg";

const MobilePromotionalSlider = ({
  products,
}: PromotionalSliderWrapperProps) => {
  if (products.length < 2) return null;

  return (
    <div className="block md:hidden ">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
      >
        {products.map((product, index) => {
          if (index % 2 !== 0) return null;

          const mainProduct = products[index];
          const secondaryProduct = products[index + 1];

          return (
            <SwiperSlide key={mainProduct.id}>
              <div className="p-4 bg-super-light-grey mb-4">
                {/* Основний продукт */}
                <Link href={`product/${mainProduct.id}`}>
                  <div className="relative mb-6">
                    <h3 className="text-lg font-bold mb-2 text-gray-700 uppercase text-right">
                      {mainProduct.name}
                    </h3>
                    <p className="font-black text-[32px] uppercase">
                      you will find the best price here!
                    </p>
                    <div className="flex items-center gap-4 my-4 justify-center">
                      <span className="text-5xl font-extrabold">
                        -{mainProduct.discount}%
                      </span>

                      <div>
                        <Image src={ArrowLg} alt="Arrow" />
                      </div>
                      <div className="flex flex-col">
                        <span className="line-through text-[#717171] text-xl">
                          ${mainProduct.price}
                        </span>
                        <span className="text-3xl font-bold">
                          $
                          {Math.floor(
                            mainProduct.price *
                              (1 - (mainProduct.discount || 0) / 100)
                          )}
                        </span>
                      </div>
                    </div>
                    <Countdown
                      date={
                        product.endDate ??
                        new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
                      }
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="flex gap-2 text-lg font-semibold mb-8 justify-center">
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
                    {mainProduct.images[0] && (
                      <Image
                        src={mainProduct.images[0].imageUrl}
                        alt={mainProduct.name || "Product"}
                        width={300}
                        height={200}
                        className="object-contain mx-auto h-[200px]"
                      />
                    )}
                  </div>
                </Link>
              </div>

              {secondaryProduct && (
                <Link href={`product/${secondaryProduct.id}`}>
                  <div className="p-4 bg-super-light-grey relative">
                    <div className="relative flex items-center">
                      <span className="absolute top-2 left-2 bg-red text-white px-2 py-1 text-xs font-bold">
                        -{secondaryProduct.discount}%
                      </span>

                      {secondaryProduct.images[0] && (
                        <Image
                          src={secondaryProduct.images[0].imageUrl}
                          alt={secondaryProduct.name || "Product"}
                          width={100}
                          height={70}
                          className="object-contain ml-auto w-[202px] h-[120px]"
                        />
                      )}
                    </div>
                    <div className="flex justify-between">
                      <div className="flex flex-col mr-4">
                        <span className="line-through text-[#717171] text-sm">
                          ${secondaryProduct.price}
                        </span>
                        <span className="text-lg font-bold text-black">
                          $
                          {Math.floor(
                            secondaryProduct.price *
                              (1 - (secondaryProduct.discount || 0) / 100)
                          )}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 uppercase font-medium text-right mt-2 self-end">
                        {secondaryProduct.name}
                      </p>
                    </div>
                  </div>
                </Link>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MobilePromotionalSlider;
