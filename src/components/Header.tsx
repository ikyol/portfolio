import Link from "next/link";
import type { Dictionary, Locale } from "@/content/dictionaries";
import { locales } from "@/content/locales";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const links = [
    { href: "#work", label: dict.nav.work },
    { href: "#services", label: dict.nav.services },
    { href: "#design", label: dict.nav.design },
    { href: "#experience", label: dict.nav.experience },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={`/${lang}`} className="font-display text-xl font-bold">
          aikyol<span className="text-brand-pink">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-semibold text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div
          className="flex rounded-full border-2 border-ink bg-white p-1 text-sm font-bold"
          role="group"
          aria-label={dict.langSwitch.label}
        >
          {locales.map((locale) => (
            <Link
              key={locale}
              href={`/${locale}`}
              aria-current={locale === lang ? "page" : undefined}
              className={`rounded-full px-3 py-1 uppercase transition ${
                locale === lang ? "bg-ink text-white" : "hover:bg-ink/5"
              }`}
            >
              {locale}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
