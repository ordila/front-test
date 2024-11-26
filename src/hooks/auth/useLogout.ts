import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AuthService } from "@/services";

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      // Виклик сервісу для виконання логауту
      await AuthService.logout();
    },
    onSuccess: () => {
      // Очищення стану авторизації в React Query
      queryClient.setQueryData(["authStatus"], false);

      // Встановлення кукі для позначення неавторизованого користувача
      document.cookie = "isLoggedIn=false; path=/; secure; samesite=none";
    },
    onError: (error) => {
      console.error("Logout failed:", error);
    },
  });
};
