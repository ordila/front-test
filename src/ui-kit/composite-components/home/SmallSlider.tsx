import { FC } from "react";

import Image from "next/image";

import { Product } from "@/types/product/product";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ProductSliderProps {
  products: Product[];
}

export const ProductSlider: FC<ProductSliderProps> = ({ products }) => {
  return (
    <div className="mx-auto max-w-[1300px] mt-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        navigation
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="relative bg-white p-[30px] text-center md:w-[406px] md:h-[220px]"
              style={{
                backgroundImage: "url('/bg-banner.png')",
              }}
            >
              {product.discount && (
                <div className="absolute top-[30px] left-[30px] bg-orange-500 text-white px-2 py-1 text-sm font-semibold">
                  -{product.discount}%
                </div>
              )}

              <Image
                src={product.images[0].imageUrl}
                alt={product.name}
                width={200}
                height={140}
                className="ml-auto object-contain"
              />

              <div className="text-[16px] line-through text-dark-gray mb-2 absolute bottom-[53px] left-[30px]">
                ${product.price}
              </div>
              <div className="text-[20px] font-bold text-black mb-2 absolute bottom-[24px] left-[30px]">
                ${product.price - (product.price * product.discount) / 100}
              </div>
              <div className="text-[16px] uppercase text-right">
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
