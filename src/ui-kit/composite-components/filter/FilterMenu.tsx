import React, { Dispatch, FC, SetStateAction } from "react";

import Image from "next/image";

import Logo from "@/assets/images/logo_header_phone.png";

import { Filters } from "./Filter";

interface FilterMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const FilterMenu: FC<FilterMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`p-6 fixed inset-0 bg-white uppercase font-medium text-[16px] z-50 transform  overflow-auto ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center pb-5 border-b-[1px] border-b-dark-gray ">
        <Image width={40} height={40} src={Logo} alt="Logo" />
        <button onClick={() => setIsMenuOpen(false)}>
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

      <Filters />
    </div>
  );
};

export default FilterMenu;
