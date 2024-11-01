import { ReactNode } from "react";

import "./globals.css";

import { ClientLayout } from "@/ui-kit/composite-components";
import ServerAuthStatus from "@/ui-kit/composite-components/layout/ServerAuthStatus";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ServerAuthStatus>
          <ClientLayout>{children}</ClientLayout>
        </ServerAuthStatus>
      </body>
    </html>
  );
}
