import { NextRequest, NextResponse } from "next/server";

export async function authMiddleware(request: NextRequest) {
  // Логуємо кукі для перевірки
  console.log("request.cookies", request.cookies);

  // Перевіряємо наявність isLoggedIn кукі
  const isLoggedIn = request.cookies.get("isLoggedIn")?.value === "true";

  if (isLoggedIn) {
    // Дозволяємо доступ до маршруту
    return NextResponse.next();
  }

  // Перенаправляємо користувача на головну сторінку, якщо не авторизований
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/profile"], // Маршрути, які будуть проходити через цю мідлвару
};
