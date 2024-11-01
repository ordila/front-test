"use client";
import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import CustomArrowDownIcon from "@/assets/icons/select.svg";

const languages = [
  { code: "ENG", label: "English" },
  { code: "UA", label: "Українська" },
  { code: "AR", label: "العربية" },
];

export const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("ENG");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} className="relative text-left">
      {/* Кнопка вибору мови */}
      <button
        onClick={toggleDropdown}
        className="flex gap-1 items-center pl-[48px] pr-[48px]  text-black"
      >
        {selectedLanguage}

        <Image
          src={CustomArrowDownIcon}
          alt="arrow-down"
          className={`transform transition-transform duration-300 h-full  ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Випадаючий список */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-[100px] bg-white rounded-lg shadow-lg z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`flex justify-between items-center px-4 py-2 w-full text-left h-[45px]  ${
                selectedLanguage === lang.code
                  ? "bg-[#CDFF3A] text-black font-bold"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {lang.code}

              <ArrowForwardIcon
                fontSize="small"
                sx={{
                  color: selectedLanguage === lang.code ? "#000" : "#d3d3d3",
                }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
