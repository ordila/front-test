import { axiosInstance } from "@/utils";

export class AuthService {
  static async login(email: string, password: string) {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  }

  static async register(email: string, password: string) {
    const response = await axiosInstance.post("/auth/register", {
      email,
      password,
    });
    return response.data;
  }

  static async refreshToken() {
    const response = await axiosInstance.post<{ accessToken: string }>(
      "refresh-token"
    );
    const { accessToken } = response.data;

    localStorage.setItem("token", accessToken);
    return accessToken;
  }

  static async logout() {
    await axiosInstance.post("auth/logout");

    localStorage.removeItem("authToken");
  }
}
