import { UpdateUserDto, updateUserDtoSchema } from "@/dto/user.dto";
import { axiosInstance } from "@/utils";
import { ZodError } from "zod";

export class UserService {
  static async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const response = await axiosInstance.patch(`user/${id}`, updateUserDto);

      return response.data;
    } catch (error) {
      if (error instanceof ZodError) {
        console.error("Validation error:", error.errors);
      } else {
        console.error("Request error:", error);
      }
      throw error;
    }
  }
}
