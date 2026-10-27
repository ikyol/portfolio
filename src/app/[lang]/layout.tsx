import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { JetBrains_Mono, Manrope, Unbounded } from "next/font/google";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "@/content/dictionaries";
import { site } from "@/content/site";
import "../globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin", "cyrillic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "cyrillic"],
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { title, description } = getDictionary(lang).meta;
  // Preview card for LinkedIn, Telegram and other link unfurlers
  const image = { url: `/og-${lang}.png`, width: 1200, height: 630, alt: title };

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: { canonical: `/${lang}`, languages: { en: "/en", ru: "/ru" } },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: site.name,
      title,
      description,
      locale: lang === "ru" ? "ru_RU" : "en_US",
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${unbounded.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <head>
        <noscript>
          <style>{".reveal{opacity:1;transform:none}"}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
