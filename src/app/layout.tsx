import ServerAuthStatus from "@/ui-kit/composite-components/layout/ServerAuthStatus";
import "./globals.css";

import { ReactNode } from "react";
import ClientLayout from "@/ui-kit/composite-components/layout/ClientLayout";

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
