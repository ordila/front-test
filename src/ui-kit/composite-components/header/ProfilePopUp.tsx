import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import Profile from "@/assets/icons/authorized.svg";
import Orders from "@/assets/icons/orders.svg";
import FAQ from "@/assets/icons/faq.svg";
import Contact from "@/assets/icons/support.svg";
import SignOut from "@/assets/icons/sign-out.svg";
import Close from "@/assets/icons/close.svg";

import { useLogout } from "@/hooks";

type ProfilePopUpProps = {
  togglePopup: () => void;
};

const ProfilePopUp: FC<ProfilePopUpProps> = ({ togglePopup }) => {
  const logout = useLogout();

  return (
    <div className="absolute z-[1000] right-[-20px] mt-6 p-[50px] bg-white rounded-lg shadow-lg">
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
          className="flex items-center gap-3 h-[60px] pl-4 pr-4 hover:bg-slate-100 transition-colors duration-300"
        >
          <Image src={Profile} alt="Profile icon" />
          <span className="uppercase">Profile</span>
        </Link>

        <Link
          href="orders"
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
          className="flex items-center gap-3 h-[60px] pl-4 pr-4 hover:bg-slate-100 transition-colors duration-300"
        >
          <Image src={FAQ} alt="Faq icon" />
          <span className="uppercase">FAQ</span>
        </Link>

        <Link
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
          onClick={() => {
            logout();
            togglePopup();
          }}
        >
          <Image src={SignOut} alt="Sign out icon" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfilePopUp;
