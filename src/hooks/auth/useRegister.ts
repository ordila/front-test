import { AuthService } from "@/services";

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
      await AuthService.register(email, password);
    },
    onSuccess: () => {
      queryClient.setQueryData(["authStatus"], true);
    },
    onError: () => {
      queryClient.setQueryData(["authStatus"], false);
    },
  });
};
