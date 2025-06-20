import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  // Protect dashboard and quiz routes
  if (pathname.startsWith("/dashboard") || pathname.startsWith("/quiz")) {
    if (!isLoggedIn) {
      return Response.redirect(new URL("/", req.nextUrl));
    }
  }
});

export const config = {
  matcher: ["/dashboard", "/quiz", "/quiz/:path*"],
};
