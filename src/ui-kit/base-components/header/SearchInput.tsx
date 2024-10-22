import React, { useState, useEffect, useRef, FC } from "react";
import Image from "next/image";

import SearchIcon from "@/assets/icons/search.svg";
import CloseWhiteIcon from "@/assets/icons/closeWhite.svg";
import { ButtonIcon } from "../buttons/ButtonIcon";

type SearchInputProps = {
  isMobile?: boolean;
  styles?: string;
};

export const SearchInput: FC<SearchInputProps> = ({
  isMobile,
  styles = "",
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const searchRef = useRef<HTMLFormElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const clearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen && isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen, isMobile]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      className={`${styles} flex items-center`}
      ref={searchRef}
      onSubmit={handleSearch}
    >
      {/* Інпут пошуку для десктопу або якщо мобільний інпут відкрито */}
      {!isMobile || isSearchOpen ? (
        <>
          <div
            className={`${styles} flex items-center bg-white px-3 py-1 h-10 relative ml-10`}
          >
            {/* Якщо є текст, відображаємо хрестик */}
            {searchTerm && (
              <button
                onClick={clearSearch}
                type="button"
                className="focus:outline-none absolute left-0 top-0 h-10 w-10 bg-black flex items-center justify-center"
              >
                <Image
                  src={CloseWhiteIcon}
                  alt="clear search"
                  className="w-4 h-4"
                />
              </button>
            )}
            <Image src={SearchIcon} alt="search" />
            <input
              type="text"
              placeholder="Enter"
              className="ml-4 border-none outline-none w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Кнопка сабміту */}
          </div>
          <div className="hidden md:block w-[104px] h-full">
            <ButtonIcon title="search" />
          </div>
        </>
      ) : (
        <div>
          {/* Кнопка відкриття пошуку на мобільному */}
          <button onClick={toggleSearch}>
            <Image src={SearchIcon} alt="search" />
          </button>
        </div>
      )}
    </form>
  );
};
