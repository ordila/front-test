import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import Profile from "@/assets/icons/authorized.svg";
import Orders from "@/assets/icons/orders.svg";
import FAQ from "@/assets/icons/faq.svg";
import Contact from "@/assets/icons/support.svg";
import SignOut from "@/assets/icons/sign-out.svg";
import Close from "@/assets/icons/close.svg";

type ProfilePopUpProps = {
  togglePopup: () => void;
};

const ProfilePopUp: FC<ProfilePopUpProps> = ({ togglePopup }) => {
  return (
    <div className="absolute z-[1000] right-[-20px] mt-6 p-[50px]  bg-white rounded-lg shadow-lg  ">
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
        <Link href="profile" className="flex gap-3 items-center h-[60px]">
          <Image src={Profile} alt="Profile icon" />
          <span className="uppercase">Profile</span>
        </Link>

        <Link href="orders" className="flex gap-3 items-center h-[60px] ">
          <Image src={Orders} alt="Orders icon" />
          <div className="flex items-center justify-between w-full">
            <span className="uppercase">Orders</span>
            <span className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {1}
            </span>
          </div>
        </Link>
        <Link href="faq" className="uppercase flex gap-3 items-center h-[60px]">
          <Image src={FAQ} alt="Faq icon" />
          FAQ
        </Link>
        <Link
          href="support"
          className="uppercase flex gap-3 items-center h-[60px] mb-5"
        >
          <Image src={Contact} alt="Contacts icon" />
          Contact Us
        </Link>
      </div>

      <div>
        <button className="uppercase flex gap-3 items-center h-[60px]  mt-5">
          <Image src={SignOut} alt="Sign out icon" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePopUp;
