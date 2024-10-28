import React, { FC } from "react";

import DiscountedBanner from "@/ui-kit/composite-components/home/DiscountedBanner";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductDto } from "@/dto/product.dto";

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
          <DiscountedBanner product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
