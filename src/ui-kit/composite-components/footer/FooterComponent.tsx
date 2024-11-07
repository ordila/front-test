import React from "react";
import Image from "next/image";

import Logo from "@/assets/images/full_logo_footer.png";

import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";
import YouTube from "@/assets/icons/youtube.svg";
import TikTok from "@/assets/icons/tiktok.svg";
import Reddit from "@/assets/icons/reddit.svg";
import Discord from "@/assets/icons/discord.svg";
import X from "@/assets/icons/x.svg";

import Info from "@/assets/icons/info.svg";

export const FooterComponent = () => {
  return (
    <footer className="py-8 md:px-[87px] px-[24px] bg-light-grey">
      <div className="md:flex">
        <div className="mb-[50px] flex justify-center">
          <Image
            src={Logo}
            alt="Computools Logo"
            width={321}
            height={155}
            className="w-full max-w-[321px] h-[155px]"
          />
        </div>

        <div className=" mx-auto mb-8 max-w-[405px]">
          <h2 className="text-lg font-bold mb-4">SIGN UP FOR NEWSLETTER</h2>
          <div className="flex items-center justify-center mb-4 gap-[10px]">
            <Image src={Info} alt="Info" />
            <p className="text-sm">
              STAY UP TO DATE WITH OUR NEW PROMOTIONS AND OFFERS
            </p>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="E-MAIL"
              className="flex-grow p-2 focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r hover:bg-gray-800 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="mb-8 max-w-[405px]">
          <h2 className="text-lg font-bold mb-2">OUR COMMUNITY</h2>
          <div className="flex items-center justify-center mb-4 gap-[10px]">
            <Image src={Info} alt="info" />
            <p className="text-sm">
              YOU CAN FIND MORE USEFUL INFORMATION AND EXPAND YOUR CIRCLE OF
              FRIENDS
            </p>
          </div>
          <div className="flex justify-center gap-6 md:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Facebook} alt="Facebook" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Instagram} alt="Instagram" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:scale-110 transition-transform"
            >
              <Image src={YouTube} alt="Youtube" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:scale-110 transition-transform"
            >
              <Image src={TikTok} alt="TikTok" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="Discord"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Discord} alt="Discord" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="Reddit"
              className="hover:scale-110 transition-transform"
            >
              <Image src={Reddit} alt="Reddit" width={24} height={24} />
            </a>
            <a
              href="#"
              aria-label="X"
              className="hover:scale-110 transition-transform"
            >
              <Image src={X} alt="X" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 pt-4 text-[#717171] text-xs flex justify-between">
        <p>COPYRIGHT © 2024. ALL RIGHTS RESERVED</p>
        <p>BY COMPUTOOLS</p>
      </div>
    </footer>
  );
};
