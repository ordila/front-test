"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { useCategories } from "@/hooks";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const CategoriesSlider = () => {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <div>Loading categories...</div>;

  if (error instanceof Error)
    return <div>Error loading categories: {error.message}</div>;

  return (
    <div className="w-full md:hidden">
      <Swiper
        slidesPerView="auto"
        spaceBetween={16}
        pagination={{ clickable: true }}
        className="category-swiper"
      >
        {data?.map(
          (category: { id: string; name: string; imageUrl: string }) => (
            <SwiperSlide
              key={category.id}
              className="!w-auto flex items-center justify-center bg-gray-50 h-[80px] rounded-lg shadow-sm"
            >
              <Link
                className="flex py-3 px-3 items-center justify-center gap-2 uppercase"
                href={`/category/${category.id}`}
              >
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={24}
                  height={24}
                  className="mb-1"
                />
                <span className="text-sm text-gray-700">{category.name}</span>
              </Link>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};
