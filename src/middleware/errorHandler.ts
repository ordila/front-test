import { NextResponse } from "next/server";

export function errorHandlerMiddleware(error: any) {
  console.error("Middleware error:", error);
  return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
}
