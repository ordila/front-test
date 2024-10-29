import { AuthService } from "@/services/auth/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      await AuthService.login(email, password);
    },
    onSuccess: () => {
      queryClient.setQueryData(["authStatus"], true);
      document.cookie = "isLoggedIn=true; path=/; secure; samesite=strict";
    },
    onError: () => {
      queryClient.setQueryData(["authStatus"], false);
    },
  });
};
