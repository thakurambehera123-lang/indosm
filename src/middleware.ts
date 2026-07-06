import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED_DOMAINS = [
  "/dashboard",
  "/community-hub",
  "/native-projects",
  "/learning-tracks",
  "/global-leaderboard",
  "/settings",
  "/messages",
  "/teams",
  "/notifications"
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Security XSS & Layered Content Isolation Injection Headers
  const responseHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: responseHeaders,
    },
  });

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self';"
  );

  // Implement low-latency structural cookies check on edge runtime if applicable
  const sessionToken = request.cookies.get("indosm_edge_session")?.value;
  const isProtected = PROTECTED_DOMAINS.some((domain) => pathname.startsWith(domain));

  if (isProtected && !sessionToken) {
    // Edge protection interception path redirects to login fold elegantly
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  return response;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/community-hub/:path*",
    "/native-projects/:path*",
    "/learning-tracks/:path*",
    "/global-leaderboard/:path*",
    "/settings/:path*",
    "/messages/:path*",
    "/teams/:path*",
    "/notifications/:path*"
  ],
};