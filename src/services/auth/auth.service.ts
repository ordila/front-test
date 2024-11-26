import { axiosInstance } from "@/utils";

export class AuthService {
  static async login(email: string, password: string) {
    const response = await axiosInstance.post("/auth/login", {
      email,
      password,
    });

    if (response.data) {
      document.cookie = "isLoggedIn=true; path=/; secure; samesite=none";
    }

    return response.data;
  }

  static async profile() {
    const response = await axiosInstance.get("auth/profile");

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
  }

  static async checkAuthStatus(): Promise<boolean> {
    const response = await axiosInstance.get<{ isLoggedIn: boolean }>(
      "/auth/status"
    );
    return response.data.isLoggedIn;
  }
}
