"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Profile from "@/assets/icons/authorized.svg";
import Orders from "@/assets/icons/orders.svg";
import FAQ from "@/assets/icons/faq.svg";
import Contact from "@/assets/icons/support.svg";
import SignOut from "@/assets/icons/sign-out.svg";
import Close from "@/assets/icons/close.svg";

import { useLogout } from "@/hooks";
import Modal from "../modal/Modal";

type ProfilePopUpProps = {
  togglePopup: () => void;
};

const ProfilePopUp: FC<ProfilePopUpProps> = ({ togglePopup }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    logoutMutation.mutate(); // Запускає процес логауту
  };
  const handleConfirmLogout = () => {
    handleLogout();
    setIsModalOpen(false); // Закриваємо модалку після логауту
    togglePopup(); // Закриваємо попап
  };

  const handleCancelLogout = () => {
    setIsModalOpen(false); // Закриваємо модалку
  };

  return (
    <>
      <motion.div
        className="absolute z-[1000] right-[-20px] mt-6 p-[50px] bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <h4 className="font-black text-[24px] uppercase">Personal Area</h4>
          <button
            onClick={togglePopup}
            className="absolute top-[64px] right-[50px]"
          >
            <Image src={Close} alt="close_icon" height={20} width={20} />
          </button>
        </div>

        <div className="flex flex-col w-[400px] mt-[30px] border-b border-[#00000033]">
          <Link
            href="profile"
            onClick={togglePopup}
            className="flex items-center gap-3 h-[60px] pl-4 pr-4 hover:bg-slate-100 transition-colors duration-300"
          >
            <Image src={Profile} alt="Profile icon" />
            <span className="uppercase">Profile</span>
          </Link>

          <Link
            href="orders"
            onClick={togglePopup}
            className="flex items-center gap-3 h-[60px] pl-4 pr-4 hover:bg-slate-100 transition-colors duration-300"
          >
            <Image src={Orders} alt="Orders icon" />
            <div className="flex items-center justify-between w-full">
              <span className="uppercase">Orders</span>
              <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {1}
              </span>
            </div>
          </Link>

          <Link
            href="faq"
            onClick={togglePopup}
            className="flex items-center gap-3 h-[60px] pl-4 pr-4 hover:bg-slate-100 transition-colors duration-300"
          >
            <Image src={FAQ} alt="Faq icon" />
            <span className="uppercase">FAQ</span>
          </Link>

          <Link
            onClick={togglePopup}
            href="support"
            className="flex items-center gap-3 h-[60px] pl-4 pr-4 mb-5 hover:bg-slate-100 transition-colors duration-300"
          >
            <Image src={Contact} alt="Contacts icon" />
            <span className="uppercase">Contact Us</span>
          </Link>
        </div>

        <div>
          <button
            className="w-full flex items-center gap-3 h-[60px] pl-4 pr-4 mt-5 uppercase hover:bg-slate-100 transition-colors duration-300"
            onClick={() => setIsModalOpen(true)} // Відкриваємо модалку
          >
            <Image src={SignOut} alt="Sign out icon" />
            <span>Sign Out</span>
          </button>
        </div>
      </motion.div>

      {/* Модалка для підтвердження логауту */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCancelLogout}
          onConfirm={handleConfirmLogout}
          imageSrc="/path-to-your-image.png" // Замініть на шлях до вашого зображення
          title="Sign Out"
          confirmText="Confirm"
          cancelText="Cancel"
        />
      )}
    </>
  );
};

export default ProfilePopUp;
