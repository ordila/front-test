import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import HeartIcon from "@/assets/icons/heart.svg";
import BasketIcon from "@/assets/icons/busket.svg";
import UserIcon from "@/assets/icons/unauthorized.svg";
import ProfileIcon from "@/assets/icons/authorized.svg";

import ProfilePopUp from "./ProfilePopUp";

import { useAuthStatus } from "@/hooks/auth/useLogin";

export default function HeaderIcons() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { data: isLoggedIn } = useAuthStatus();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    console.log("isLoggedIn state updated:", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div className="flex items-center gap-[40px]">
      {/* Favorites */}
      <div className="relative w-[20px]">
        <Link href="/favorites">
          <Image src={HeartIcon} alt="Favorites" />
          <span className="absolute -top-[15px] -right-[15px] bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            12
          </span>
        </Link>
      </div>

      {/* Basket */}
      <div className="relative w-[20px]">
        <Link href="basket">
          <Image src={BasketIcon} alt="Basket" />
          <span className="absolute -top-[15px] -right-[14px] bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            0
          </span>
        </Link>
      </div>

      {/* User/Profile Icon */}
      <div className="relative w-[20px]">
        <button onClick={togglePopup}>
          {isLoggedIn ? (
            <Image src={ProfileIcon} alt="Profile" />
          ) : (
            <Image src={UserIcon} alt="Login" />
          )}
        </button>
        {isLoggedIn && <div>Hola</div>}

        {/* Popup при кліку на профіль */}
        {isPopupOpen && isLoggedIn && (
          <ProfilePopUp togglePopup={togglePopup} />
        )}
      </div>
    </div>
  );
}
