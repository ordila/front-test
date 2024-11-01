"use client";
import React, { FC } from "react";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Banner } from "@/ui-kit/composite-components";

import { ProductDto } from "@/dto";

export interface LargeSliderProps {
  products: ProductDto[];
}

export const LargeSlider: FC<LargeSliderProps> = ({ products }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      style={{ maxWidth: "1300px" }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
    >
      {products.map((product: ProductDto) => (
        <SwiperSlide key={product.id}>
          <Banner product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
