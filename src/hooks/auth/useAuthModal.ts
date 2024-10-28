import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAuthStatus } from "./useAuthStatus";

export const useAuthModal = () => {
  const queryClient = useQueryClient();
  const { isLoggedIn } = useAuthStatus();

  const openModal = () => queryClient.setQueryData(["authModalOpen"], true);
  const closeModal = () => queryClient.setQueryData(["authModalOpen"], false);

  const { data: isModalOpen = !isLoggedIn } = useQuery({
    queryKey: ["authModalOpen"],
    queryFn: () =>
      queryClient.getQueryData<boolean>(["authModalOpen"]) ?? !isLoggedIn,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isLoggedIn) {
      closeModal();
    }
  }, [isLoggedIn, closeModal]);

  return { isModalOpen, openModal, closeModal };
};
