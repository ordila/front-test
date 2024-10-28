import { useQuery } from "@tanstack/react-query";

export const useAuthStatus = () => {
  const isClient = typeof window !== "undefined";

  const { data: isLoggedIn = false } = useQuery({
    queryKey: ["authStatus"],
    queryFn: () => {
      if (isClient) {
        const token = localStorage.getItem("token");
        return !!token;
      }
      return false;
    },
    initialData: isClient ? !!localStorage.getItem("token") : false,
    staleTime: Infinity,
  });

  return { isLoggedIn };
};
