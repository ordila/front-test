"use client";

import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  hydrate,
} from "@tanstack/react-query";

interface AppProviderProps {
  children: ReactNode;
  dehydratedState: unknown;
}

export default function QueryProvider({
  children,
  dehydratedState,
}: AppProviderProps) {
  const [queryClient] = useState(() => {
    const client = new QueryClient();
    hydrate(client, dehydratedState);
    return client;
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
