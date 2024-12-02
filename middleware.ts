import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Define routes that require authentication
  const protectedRoutes = ["/profile", "/settings"];

  // Redirect to login if accessing a protected route without a token
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      url.pathname = "/login";
      return NextResponse.redirect(url);
    }
  }

  // Prevent authenticated users from accessing the login page
  if (pathname === "/login" && token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/settings/:path*", "/login"],
};
