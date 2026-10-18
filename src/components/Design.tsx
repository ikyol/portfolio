import type { Dictionary } from "@/content/dictionaries";
import { Reveal } from "./Reveal";
import { accents, Container } from "./ui";

export function Design({ dict }: { dict: Dictionary }) {
  const { design } = dict;

  return (
    <section id="design" className="scroll-mt-20 pb-20 md:pb-28">
      <Container>
        <Reveal>
          <div className="bg-animated relative overflow-hidden rounded-[2rem] border-2 border-ink p-8 text-white shadow-brutal-lg md:p-12">
            <span
              aria-hidden
              className="sparkle absolute -right-6 -top-10 font-display text-[10rem] leading-none text-white/20 md:text-[14rem]"
            >
              ✦
            </span>
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-white/80">
              ✦ {design.kicker}
            </p>
            <h2 className="relative mt-3 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
              {design.title}
            </h2>
            <p className="relative mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
              {design.text}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {design.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-3xl border-2 border-ink bg-white p-6 shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg">
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink font-display text-lg ${accents[i % accents.length]}`}
                >
                  ✦
                </span>
                <h3 className="mt-5 font-display text-lg font-bold md:text-xl">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted">
          {design.processTitle}
        </h3>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {design.process.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full rounded-3xl border-2 border-dashed border-ink/30 p-5">
                  <span className="text-gradient font-display text-4xl font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 font-display font-bold">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
