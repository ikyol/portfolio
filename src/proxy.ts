import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/content/locales";

// Languages whose speakers most likely read Russian better than English
const russianFamily = ["ru", "ky", "kk", "uz", "uk", "be", "tg"];

function preferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const tags = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of tags) {
    if (tag.startsWith("en")) return "en";
    if (russianFamily.some((lang) => tag.startsWith(lang))) return "ru";
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return;

  const url = request.nextUrl.clone();
  const locale = preferredLocale(request.headers.get("accept-language"));
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internals and files with an extension (icons, images)
  matcher: ["/((?!_next|.*\\..*).*)"],
};
