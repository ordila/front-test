import { axiosInstance } from "@/utils";
import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (accessToken) {
    return NextResponse.next();
  }

  if (refreshToken) {
    try {
      const response = await axiosInstance.post("/auth/refresh-token");

      if (response.status === 200) {
        const { accessToken: newAccessToken } = response.data;
        const res = NextResponse.next();
        res.cookies.set("accessToken", newAccessToken, {
          httpOnly: true,
          secure: true,
          sameSite: "strict",
          maxAge: Number(process.env.ACCESS_TOKEN_COOKIE_MAX_AGE),
        });
        return res;
      }
    } catch (error) {
      console.error("Token refresh failed:", error);
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}
