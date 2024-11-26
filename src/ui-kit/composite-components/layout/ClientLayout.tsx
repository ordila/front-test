"use client";
import { ReactNode } from "react";
import { Header } from "../header/Header";
import { Aside } from "../aside/Aside";
import { FooterComponent } from "../footer/FooterComponent";
import { usePathname } from "next/navigation";

interface ClientLayoutProps {
  children: ReactNode;
}

export function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  const isProductPath = pathname.includes("product");

  return (
    <>
      <Header />

      <main className="flex flex-grow md:px-[87px] px-[24px] ">
        <div className="hidden md:block">{!isProductPath && <Aside />}</div>
        <div
          className={`flex-grow w-full md:px-[42px] md:pt-[42px] ${
            !isProductPath ? "max-w-[1390px]" : ""
          }`}
        >
          {children}
        </div>
      </main>

      <FooterComponent />
    </>
  );
}
