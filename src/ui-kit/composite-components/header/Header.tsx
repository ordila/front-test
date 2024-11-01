"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoPhone from "@/assets/images/logo_background_header_phone.png";
import LogoDesktop from "@/assets/images/logo_header_desk.png";
import Burger from "@/assets/icons/burger.svg";

import BurgerMenu from "./BurgerMenu";
import HeaderIcons from "./HeaderNav";

import { LanguageSelect, SearchInput } from "@/ui-kit/base-components";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-light-grey pr-5 md:h-[86px] md:pr-[87px]">
      {/* Логотип */}
      <Link href={"/"}>
        <div className="h-full md:min-w-[344px]">
          <Image
            src={LogoPhone}
            alt="Logo"
            width={60}
            height={60}
            className="md:hidden"
          />

          {/* Логотип для десктопної версії */}
          <Image
            src={LogoDesktop}
            alt="Logo"
            width={344}
            height={86}
            className="hidden md:block"
          />
        </div>
      </Link>

      {/* Пошук для десктопу */}
      <div className="hidden md:flex flex-grow justify-center w-full">
        <SearchInput styles="w-full" />
      </div>

      <div className="hidden md:flex  h-[40px]  items-center justify-center border-r-[1px] border-r-[#00000033]">
        <LanguageSelect />
      </div>
      {/* Пошук та бургер для мобільної версії */}

      <div className="md:hidden flex items-center gap-6">
        <SearchInput isMobile />
        <button onClick={toggleMenu} className="h-5 w-5">
          <Image src={Burger} alt="burger" className="h-5 w-5" />
        </button>
      </div>

      <div className="hidden md:block ml-[30px]">
        <HeaderIcons />
      </div>

      {/* Мобільне меню */}
      <BurgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};
