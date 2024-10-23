import { axiosInstance } from "@/utils";

export class AuthService {
  static async login(email: string, password: string) {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  }
}
