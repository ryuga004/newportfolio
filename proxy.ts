import { NextResponse, type NextRequest } from "next/server";
import { locales, matchLocale } from "@/utils/content/locale";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const active = locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (active) {
    const headers = new Headers(request.headers);
    headers.set("x-locale", active);
    return NextResponse.next({ request: { headers } });
  }

  const locale = matchLocale(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};

