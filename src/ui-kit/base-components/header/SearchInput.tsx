"use client";

import React, { useEffect, useRef, FC, useState } from "react";
import Image from "next/image";
import debounce from "lodash/debounce";

import SearchIcon from "@/assets/icons/search.svg";
import CloseWhiteIcon from "@/assets/icons/closeWhite.svg";
import { ButtonIcon } from "../buttons/ButtonIcon";
import { useGlobalStateContext } from "@/сontext/GlobalContext";

type SearchInputProps = {
  isMobile?: boolean;
  styles?: string;
};

export const SearchInput: FC<SearchInputProps> = ({
  isMobile,
  styles = "",
}) => {
  const { setSearchTerm } = useGlobalStateContext(); // Оновлення глобального стану
  const searchRef = useRef<HTMLFormElement>(null);
  const [localSearchTerm, setLocalSearchTerm] = useState(""); // Локальний стан для debounce
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Дебаунс логіка
  const debouncedUpdateSearchTerm = debounce((term: string) => {
    setSearchTerm(term); // Оновлюємо глобальний пошуковий термін
  }, 500);

  // Виклик дебаунсу при зміні `localSearchTerm`
  useEffect(() => {
    debouncedUpdateSearchTerm(localSearchTerm);
    return () => debouncedUpdateSearchTerm.cancel();
  }, [localSearchTerm]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const clearSearch = () => {
    setLocalSearchTerm(""); // Локально очищаємо
    setSearchTerm(""); // Очищаємо глобальний стан
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

  return (
    <form className={`${styles} flex items-center`} ref={searchRef}>
      {!isMobile || isSearchOpen ? (
        <>
          <div
            className={`${styles} flex items-center bg-white px-3 py-1 h-10 relative ml-10`}
          >
            {localSearchTerm && (
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
              value={localSearchTerm}
              onChange={(e) => setLocalSearchTerm(e.target.value)} // Оновлення локального стану
            />
          </div>
          <div className="hidden md:block w-[104px] h-full">
            <ButtonIcon title="search" />
          </div>
        </>
      ) : (
        <div>
          <button onClick={toggleSearch}>
            <Image src={SearchIcon} alt="search" />
          </button>
        </div>
      )}
    </form>
  );
};
