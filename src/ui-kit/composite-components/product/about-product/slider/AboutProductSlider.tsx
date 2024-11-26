"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useProductByID } from "@/hooks/products/useProductByID";

const ProductSlider = () => {
  const { product } = useProductByID();

  console.log("product", product);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="relative max-w-[850px]">
      {/* Головний слайдер */}
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        navigation
        loop
        className="main-slider w-[300px] h-[215px] md:w-[850px] md:h-[620px]"
      >
        {product?.images.map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              width={850}
              height={620}
              unoptimized
              src={img.imageUrl}
              alt={`Product Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Слайдер з прев'ю */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={30} // Встановлюємо gap 30 пікселів між слайдами
        slidesPerView="auto" // Зробить кожен слайд шириною 80px
        watchSlidesProgress
        modules={[Thumbs]}
        className="thumb-slider mt-4"
      >
        {product?.images.map((img, index) => (
          <SwiperSlide
            style={{ width: "80px", height: "58px" }}
            key={index}
            className="thumbnail-slide hover:cursor-pointer"
          >
            <Image
              src={img.imageUrl}
              alt={`Product Image ${index + 1}`}
              width={80}
              height={58}
              unoptimized
              className="thumbnail-image"
            />
            <div className="thumbnail-overlay"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
