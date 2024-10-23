import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { AuthService } from "@/services/auth/auth.service";

// Хук для перевірки авторизації
export const useAuthStatus = () => {
  return useQuery({
    queryKey: ["authStatus"],
    queryFn: () => {
      const token = localStorage.getItem("token");
      return !!token;
    },
    initialData: false, // Початкове значення
  });
};

// Хук для логіну
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
      const { accessToken } = await AuthService.login(email, password);
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

// Хук для логауту
export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    localStorage.removeItem("token");
    queryClient.setQueryData(["authStatus"], false);
  };
};
