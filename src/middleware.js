import { NextResponse } from "next/server";

export default async (req) => {
  const isAuth = req.cookies.get("user");

const protectedRoutes = ["/dashboard"];
const authRoutes = ["/", "/auth/login", "/auth/register"];







  if (isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse?.next();
  }

  if (!isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse?.redirect(process.env.NEXT_PUBLIC_AUTH_URL);
  }

  if (isAuth && authRoutes.includes(req.nextUrl.pathname)) {
    return NextResponse?.redirect(`${process.env.NEXT_PUBLIC_AUTH_URL}/dashboard`);
  }

  return NextResponse.next();
};

export const config = {
  // The above middleware would only run for the "/" path
  matcher: (pathname) => true
};