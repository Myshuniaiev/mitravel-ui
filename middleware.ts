import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Define routes that require authentication
  const protectedRoutes = ["/profile", "/settings"];

  // Redirect to sign-in if accessing a protected route without a token
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }
  }

  // Prevent authenticated users from accessing the sign-in page
  if (pathname === "/sign-in" && token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/settings/:path*", "/sign-in"],
};
