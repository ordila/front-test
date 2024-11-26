"use client";
import { useGlobalStateContext } from "@/сontext/GlobalContext";

export const useAuthStatus = () => {
  const { isLoggedIn } = useGlobalStateContext();

  return { isLoggedIn };
};
