import type { Dictionary, Locale } from "@/content/dictionaries";
import { SpeedTest } from "./SpeedTest";
import { Container } from "./ui";

export function Hero({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const { hero } = dict;

  return (
    <section className="border-b-2 border-ink/10">
      {/* Phone: headline, speed test, text. Desktop: text on the left, speed test on the right */}
      <Container className="grid gap-x-16 gap-y-6 pb-14 pt-8 sm:pt-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center lg:pb-24 lg:pt-20">
        <h1 className="font-display text-[1.875rem] font-bold leading-[1.12] tracking-[-0.02em] sm:text-5xl sm:leading-[1.1] lg:col-start-1 lg:row-start-1 lg:self-end">
          {hero.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>

        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <SpeedTest copy={dict.speedTest} lang={lang} />
        </div>

        <div className="lg:col-start-1 lg:row-start-2 lg:self-start">
          <p className="max-w-[34em] text-base leading-relaxed text-ink/80 sm:text-lg md:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex h-13 items-center rounded-full border-2 border-ink bg-ink px-5 font-bold text-white shadow-brutal-pink transition hover:-translate-y-0.5 sm:h-14 sm:px-7 sm:text-lg"
            >
              {hero.ctaPrimary}
            </a>
            <a
              href="#work"
              className="inline-flex h-13 items-center rounded-full border-2 border-ink bg-white px-5 font-bold shadow-brutal transition hover:-translate-y-0.5 sm:h-14 sm:px-7 sm:text-lg"
            >
              {hero.ctaSecondary}
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2.5 text-sm font-medium text-muted sm:mt-7 sm:text-base">
            <span aria-hidden className="h-2.5 w-2.5 shrink-0 rounded-full border-2 border-ink bg-brand-lime" />
            {hero.status}
          </p>
        </div>
      </Container>
    </section>
  );
}
