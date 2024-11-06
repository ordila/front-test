import { useQuery } from "@tanstack/react-query";
import { AuthService } from "@/services";

export const useAuthStatus = () => {
  const { data: isLoggedIn, isLoading } = useQuery({
    queryKey: ["authStatus"],
    queryFn: AuthService.checkAuthStatus,
    staleTime: Infinity,
  });

  return { isLoggedIn, isLoading };
};
