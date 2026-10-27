import type { Dictionary } from "@/content/dictionaries";
import { marqueeStack } from "@/content/site";
import { Reveal } from "./Reveal";
import { accents, Container } from "./ui";

export function Stats({ dict }: { dict: Dictionary }) {
  return (
    <>
      <Container className="relative z-10 -mt-10">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {dict.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div
                className={`h-full rounded-3xl border-2 border-ink p-5 shadow-brutal md:p-6 ${accents[i % accents.length]}`}
              >
                <div className="font-display text-[1.35rem] font-bold leading-tight sm:text-3xl lg:text-[2rem]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>

      <div className="mt-16 overflow-hidden border-y-2 border-ink bg-ink py-5 text-white md:mt-24">
        <div className="marquee flex w-max whitespace-nowrap font-display text-2xl font-bold md:text-3xl">
          {[...marqueeStack, ...marqueeStack].map((item, i) => (
            <span
              key={i}
              aria-hidden={i >= marqueeStack.length}
              className="flex items-center gap-8 pr-8"
            >
              {item}
              <span className="text-brand-pink">✦</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
