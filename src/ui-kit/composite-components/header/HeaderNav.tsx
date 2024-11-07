"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HeartIcon from "@/assets/icons/heart.svg";
import BasketIcon from "@/assets/icons/busket.svg";
import UserIcon from "@/assets/icons/unauthorized.svg";
import ProfileIcon from "@/assets/icons/authorized.svg";

import ProfilePopUp from "./ProfilePopUp";

import { useAuthStatus, useFavorites } from "@/hooks";

export default function HeaderIcons() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { isLoggedIn } = useAuthStatus();
  const { count: initialCount } = useFavorites();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex items-center gap-[40px]">
      {/* Icon: Favorites */}
      <div className="relative w-[20px] hover:scale-110 transition-transform duration-200">
        <Link href="/favorites">
          <Image
            src={HeartIcon}
            alt="Favorites"
            className="hover:opacity-80 transition-opacity duration-200"
          />
          <span className="absolute -top-[15px] -right-[15px] bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {initialCount}
          </span>
        </Link>
      </div>

      {/* Icon: Basket */}
      <div className="relative w-[20px] hover:scale-110 transition-transform duration-200">
        <Link href="/basket">
          <Image
            src={BasketIcon}
            alt="Basket"
            className="hover:opacity-80 transition-opacity duration-200"
          />
          <span className="absolute -top-[15px] -right-[14px] bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </span>
        </Link>
      </div>

      {/* Icon: Profile */}
      <div className="relative">
        <div className="w-[20px] hover:scale-110 transition-transform duration-200">
          <button onClick={togglePopup}>
            <Image
              src={isLoggedIn ? ProfileIcon : UserIcon}
              alt={isLoggedIn ? "Profile" : "Login"}
              className="hover:opacity-80 transition-opacity duration-200"
            />
          </button>
        </div>
        {isPopupOpen && isLoggedIn && (
          <ProfilePopUp togglePopup={togglePopup} />
        )}
      </div>
    </div>
  );
}
