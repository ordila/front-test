import { ReactNode } from "react";
import { cookies } from "next/headers";

import { QueryClient, dehydrate } from "@tanstack/react-query";

import QueryProvider from "./QueryProvider";

interface ServerAuthStatusProps {
  children: ReactNode;
}

export default async function ServerAuthStatus({
  children,
}: ServerAuthStatusProps) {
  const queryClient = new QueryClient();

  const initialAuthStatus = Boolean(cookies().get("accessToken"));

  await queryClient.prefetchQuery({
    queryKey: ["authStatus"],
    queryFn: async () => initialAuthStatus,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <QueryProvider dehydratedState={dehydratedState}>{children}</QueryProvider>
  );
}
