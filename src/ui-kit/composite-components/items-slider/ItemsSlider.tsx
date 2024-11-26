"use client";
import { useRef } from "react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";

import { ProductDto } from "@/dto";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavigationOptions } from "swiper/types";

import { ProductCard } from "../ProductCard/ProductCard";
import { NavigationButton } from "@/ui-kit/base-components";

import { PromotionalSliderWrapper } from "../home/promotionSlider/PromotionalSlider";

interface SliderProps {
  labelName: string;
  labelKey: number;
  products: ProductDto[];
}

export function ItemsSlider({ labelName, products, labelKey }: SliderProps) {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  if (products.length === 0) {
    return null;
  }

  if (labelName === "PROMOTIONAL PRODUCTS") {
    const promotionalProducts = products.map((product) => ({
      ...product,
      endDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    }));

    return (
      <PromotionalSliderWrapper
        labelId={labelKey}
        products={promotionalProducts}
      />
    );
  }

  return (
    <div className="slider-section mx-auto max-w-[1300px] mt-[100px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">{labelName}</h2>
        <div className="flex md:gap-[24px]">
          {/* <Link
            href={`/label/${labelKey.toString()}`}
            className="w-[95px] h-[40px] bg-black text-white font-semibold uppercase text-sm flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#ADFF2F] hover:text-black"
          >
            See All
          </Link> */}
          <div className="flex gap-2">
            <NavigationButton ref={prevRef} direction="left" />

            <NavigationButton ref={nextRef} direction="right" />
          </div>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        slidesPerView={5}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
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
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} label={labelName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
