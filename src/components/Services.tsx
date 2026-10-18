import type { Dictionary } from "@/content/dictionaries";
import { Reveal } from "./Reveal";
import { accents, Container, SectionHeading } from "./ui";

export function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict;

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading kicker={services.kicker} title={services.title} />

        <div className="grid gap-6 md:grid-cols-2">
          {services.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100}>
              <div className="h-full rounded-3xl border-2 border-ink bg-white p-6 shadow-brutal transition hover:-translate-y-1 hover:shadow-brutal-lg md:p-8">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink font-display font-bold ${accents[i % accents.length]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-xl font-bold md:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-paper px-3 py-1 font-mono text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
