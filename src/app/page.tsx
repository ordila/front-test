"use client";

import {
  AuthModal,
  CategoriesSlider,
  LargeSlider,
  ProductSlider,
} from "@/ui-kit/composite-components";

import { useDiscountedProducts } from "@/hooks";

import { useState } from "react";

import { useAuthStatus } from "@/hooks/auth/useLogin";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const { smallSliderProducts, largeSliderProducts, isLoading, error } =
    useDiscountedProducts();

  const { data: isLoggedIn } = useAuthStatus();

  console.log("isLoggedIn", isLoggedIn);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <div>
      <CategoriesSlider />

      {!isLoggedIn && (
        <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      )}

      {largeSliderProducts && <LargeSlider products={largeSliderProducts} />}
      {smallSliderProducts && <ProductSlider products={smallSliderProducts} />}

      {isLoggedIn && <div>Hollaaaa</div>}
    </div>
  );
}
