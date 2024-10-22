"use client";
import { useState } from "react";

import { Aside, AuthModal, Header } from "@/ui-kit/composite-components";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          {/* Хедер */}
          <Header />

          {/* Головна секція, що включає Aside і контент */}
          <main className="flex flex-grow md:px-[87px] pl-[24px]">
            {/* Aside на мобільних */}
            <div className="hidden md:block">
              <Aside />
            </div>

            {/* Основний контент */}
            <div className="flex-grow w-full px-[42px]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-black text-white px-4 py-2"
              >
                Open Auth Modal
              </button>
              <AuthModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {children}
            </div>
          </main>
        </QueryClientProvider>
      </body>
    </html>
  );
}
