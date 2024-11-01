import { useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/services";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return async () => {
    await AuthService.logout();

    queryClient.setQueryData(["authStatus"], false);
  };
};
