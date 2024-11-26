"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import LogoBurger from "@/assets/images/logo_header_burger.png";
import FavoritesIcon from "@/assets/icons/favorites.svg";
import BasketIcon from "@/assets/icons/busket.svg";
import ProfileIcon from "@/assets/icons/authorized.svg";
import OrdersIcon from "@/assets/icons/orders.svg";
import FaqIcon from "@/assets/icons/faq.svg";
import ContactIcon from "@/assets/icons/support.svg";
import SignOutIcon from "@/assets/icons/sign-out.svg";
import Languages from "@/assets/icons/languages.svg";
import Unauthorized from "@/assets/icons/unauthorized.svg";

import { useAuthModal, useAuthStatus, useLogout, useFavorites } from "@/hooks";
import Modal from "../modal/Modal";

// Temporary const
const languages = ["ENG", "UA", "AR"];

interface BurgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isMenuOpen, toggleMenu }) => {
  const [selectedLang, setSelectedLang] = useState("ENG");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { isLoggedIn } = useAuthStatus();
 const logoutMutation = useLogout();


  const { openModal } = useAuthModal();
  const { count: initialCount } = useFavorites();

  const handleLanguageChange = (lang: string) => setSelectedLang(lang);

   const handleLogout = async () => {
     logoutMutation.mutate(); // Запускає процес логауту
   };

  const handleSignOut = () => setIsModalOpen(true); // Відкрити модалку
  const handleConfirmLogout = () => {
    handleLogout();
    setIsModalOpen(false);
    toggleMenu();
  };
  const handleCancelLogout = () => setIsModalOpen(false);

  const handleSignIn = () => {
    toggleMenu();
    openModal();
  };

  return (
    <>
      <div
        className={`p-6 fixed inset-0 bg-black text-white uppercase font-medium text-[16px] z-50 transform overflow-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Logo + Close button */}
        <div className="flex justify-between items-center pb-5 border-b-[1px] border-b-dark-gray ">
          <Image src={LogoBurger} alt="Logo" />
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Language Switcher */}
        <div className="mt-10">
          <div className="flex items-center gap-3 h-[60px]">
            <Image src={Languages} alt={"Languages"} />
            <span className="text-white mr-2">Languages</span>
          </div>
          <div className="flex flex-col pb-5 border-b-[1px] border-b-dark-gray">
            {languages.map((lang) => (
              <button
                key={lang}
                className={`text-left ml-8 h-[60px] ${
                  selectedLang === lang ? "text-flash-green" : "text-dark-gray"
                }`}
                onClick={() => handleLanguageChange(lang)}
              >
                {selectedLang === lang && (
                  <span className="mr-2 text-flash-green">•</span>
                )}
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Favorites & Basket */}
        <div className="mt-5 flex flex-col border-b-[1px] border-b-dark-gray pb-5">
          <Link
            href="favorites"
            onClick={toggleMenu}
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={FavoritesIcon} alt="Favorites" className="mr-3" />
            Favorites
            <span className="ml-auto bg-[#2F2F2F] rounded-full min-w-[24px] h-[24px] flex justify-center items-center px-2 py-1 text-xs">
              {initialCount}
            </span>
          </Link>
          <Link
            onClick={toggleMenu}
            href="basket"
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={BasketIcon} alt="Basket" className="mr-3" />
            Basket
            <span className="ml-auto bg-[#2F2F2F] rounded-full min-w-[24px] h-[24px] flex justify-center items-center px-2 py-1 text-xs">
              {0}
            </span>
          </Link>
        </div>

        {/* Main Menu Items */}
        <div className="mt-5 flex flex-col border-b-[1px] border-b-dark-gray pb-5">
          <Link
            onClick={toggleMenu}
            key="Profile"
            href="/profile"
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={ProfileIcon} alt="Profile" className="mr-3" />
            Profile
          </Link>
          <Link
            onClick={toggleMenu}
            href="/orders"
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={OrdersIcon} alt="Orders" className="mr-3" />
            Orders
            <span className="ml-auto bg-[#2F2F2F] rounded-full min-w-[24px] h-[24px] flex justify-center items-center px-2 py-1 text-xs">
              {0}
            </span>
          </Link>
          <Link
            key="FAQ"
            onClick={toggleMenu}
            href="faq"
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={FaqIcon} alt="FAQ" className="mr-3" />
            FAQ
          </Link>
          <Link
            key="Contact Us"
            onClick={toggleMenu}
            href="support"
            className="flex items-center hover:text-gray-400 h-[60px]"
          >
            <Image src={ContactIcon} alt="Contact Us" className="mr-3" />
            Contact Us
          </Link>
        </div>

        {/* Sign Out Section */}
        <div className="h-[60px] mt-5">
          {isLoggedIn ? (
            <button
              onClick={() => {
                handleSignOut(), toggleMenu();
              }}
              className="flex items-center hover:text-gray-400 h-[60px] uppercase"
            >
              <Image src={SignOutIcon} alt="Sign Out" className="mr-3" />
              Sign Out
            </button>
          ) : (
            <button
              onClick={handleSignIn}
              className="flex items-center hover:text-gray-400 h-[60px] uppercase"
            >
              <Image
                src={Unauthorized}
                alt="Sign In and Sign Up"
                className="mr-3"
              />
              <span className="text-[#DC4E4E]">Sign In & Sign Up</span>
            </button>
          )}
        </div>
      </div>

      {/* Модалка для підтвердження логауту */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
        imageSrc="/path-to-your-image.png"
        title="Sign Out"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </>
  );
};

export default BurgerMenu;
