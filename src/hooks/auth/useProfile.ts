import { AuthService } from "@/services";
import { useQuery } from "@tanstack/react-query";

const fetchUserProfile = async () => {
  const response = await AuthService.profile();

  return response;
};

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: fetchUserProfile,
  });
};
