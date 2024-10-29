"use client";
import { ReactNode } from "react";
import { Header } from "../header/Header";
import { Aside } from "../aside/Aside";

interface ClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-grow md:px-[87px] pl-[24px]">
        <div className="hidden md:block">
          <Aside />
        </div>
        <div className="flex-grow w-full px-[42px] pt-[42px]">{children}</div>
      </main>
    </>
  );
}
