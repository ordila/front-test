"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface GlobalStateContextProps {
  brandFilter: string[];
  priceFilter: { min?: number; max?: number };
  setBrandFilter: (brands: string[]) => void;
  setPriceFilter: (price: { min?: number; max?: number }) => void;
  availableBrands: string[];
  setAvailableBrands: (brands: string[]) => void;

  // Додаємо логіку пошуку
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  isLoggedIn?: boolean;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{
  children: ReactNode;
  isLoggedIn?: boolean;
}> = ({ children, isLoggedIn }) => {
  const [brandFilter, setBrandFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<{
    min?: number;
    max?: number;
  }>({});
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");

  console.log("isLoggedInContext", isLoggedIn);

  return (
    <GlobalStateContext.Provider
      value={{
        brandFilter,
        priceFilter,
        setBrandFilter,
        setPriceFilter,
        availableBrands,
        setAvailableBrands,
        searchTerm,
        setSearchTerm,
        isLoggedIn,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalStateContext = () => {
  const context = useContext(GlobalStateContext);
  if (!context)
    throw new Error(
      "useGlobalStateContext must be used within a GlobalStateProvider"
    );
  return context;
};
