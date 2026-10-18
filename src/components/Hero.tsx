import { Fragment } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { Container } from "./ui";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero } = dict;

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob -left-24 -top-24 h-72 w-72 bg-brand-violet md:h-[28rem] md:w-[28rem]" />
        <div
          className="blob -right-16 top-10 h-64 w-64 bg-brand-pink md:h-96 md:w-96"
          style={{ animationDelay: "-6s" }}
        />
        <div
          className="blob -bottom-24 left-1/3 h-72 w-72 bg-brand-orange md:h-[26rem] md:w-[26rem]"
          style={{ animationDelay: "-12s" }}
        />
        <div
          className="blob bottom-10 right-1/4 h-40 w-40 bg-brand-cyan"
          style={{ animationDelay: "-3s" }}
        />
      </div>

      <Container className="relative pb-24 pt-14 md:pb-32 md:pt-24">
        <div aria-hidden className="absolute bottom-36 right-10 hidden flex-col items-end gap-5 xl:flex">
          <span className="rotate-6 rounded-2xl border-2 border-ink bg-brand-lime px-5 py-3 font-display text-lg font-bold shadow-brutal">
            Python
          </span>
          <span className="-rotate-3 rounded-2xl border-2 border-ink bg-brand-cyan px-5 py-3 font-display text-lg font-bold shadow-brutal">
            React
          </span>
          <span className="rotate-3 rounded-2xl border-2 border-ink bg-white px-5 py-3 font-display text-lg font-bold shadow-brutal">
            90× faster
          </span>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-4 py-1.5 text-sm font-bold shadow-brutal-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          {hero.badge}
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-muted sm:text-sm">
          {hero.eyebrow}
        </p>

        <h1 className="mt-4 max-w-5xl text-balance font-display text-[2.1rem] font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
          {hero.titleStart.split(" ").map((word, i) => (
            // Hyphenated words ("веб-системы") must not break at the hyphen;
            // the space stays outside the span so lines can still break between words
            <Fragment key={i}>
              <span className={word.includes("-") ? "whitespace-nowrap" : undefined}>{word}</span>{" "}
            </Fragment>
          ))}
          <span className="text-gradient">{hero.titleAccent}</span>
          {hero.titleEnd}{" "}
          <span aria-hidden className="sparkle inline-block text-brand-orange">
            ✦
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-7 py-4 font-bold text-white shadow-brutal-pink transition hover:-translate-y-0.5 hover:bg-brand-violet"
          >
            {hero.ctaPrimary} <span aria-hidden>→</span>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-white px-7 py-4 font-bold shadow-brutal transition hover:-translate-y-0.5"
          >
            {hero.ctaSecondary}
          </a>
        </div>

        <p className="mt-8 font-mono text-sm text-muted">📍 {hero.location}</p>
      </Container>
    </section>
  );
}
