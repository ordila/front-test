import { ReactNode } from "react";

import "./globals.css";

import { ClientLayout, QueryProvider } from "@/ui-kit/composite-components";
import { GlobalStateProvider } from "@/сontext/GlobalContext";
import { AuthService } from "@/services";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();

  console.log("All Cookies:", cookieStore);

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <QueryProvider>
          <GlobalStateProvider>
            <ClientLayout>{children}</ClientLayout>
          </GlobalStateProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
