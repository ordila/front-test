import { useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/services/auth/auth.service";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    await AuthService.logout();

    queryClient.setQueryData(["authStatus"], false);
  };
};
