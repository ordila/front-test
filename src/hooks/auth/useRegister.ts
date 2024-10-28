import { AuthService } from "@/services/auth/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const { accessToken } = await AuthService.register(email, password);
      localStorage.setItem("token", accessToken);
      return accessToken;
    },
    onSuccess: () => {
      queryClient.setQueryData(["authStatus"], true);
    },
    onError: () => {
      queryClient.setQueryData(["authStatus"], false);
    },
  });
};
