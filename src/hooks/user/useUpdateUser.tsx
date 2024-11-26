import { useMutation } from "@tanstack/react-query";

import { UpdateUserDto } from "@/dto/user.dto";
import { UserService } from "@/services/user/user.service";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: UpdateUserDto }) => {
      return await UserService.updateUser(id, data);
    },
    onSuccess: (data) => {
      console.log("User updated successfully:", data);
    },
    onError: (error) => {
      console.error("Error updating user:", error);
    },
  });
};
