import { NextRequest, NextResponse } from "next/server";

import { authMiddleware } from "./middleware/auth";
import { errorHandlerMiddleware } from "./middleware/errorHandler";

export async function middleware(request: NextRequest) {
  try {
    const authResponse = await authMiddleware(request);
    if (authResponse) return authResponse;

    return NextResponse.next();
  } catch (error) {
    return errorHandlerMiddleware(error);
  }
}

export const config = {
  matcher: ["/profile"],
};
