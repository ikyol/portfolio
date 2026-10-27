import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionHeading } from "./ui";

export function Services({ dict }: { dict: Dictionary }) {
  const { services } = dict;

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading title={services.title} />

        <div className="grid gap-6 md:grid-cols-2">
          {services.items.map((item) => (
            <div key={item.title} className="h-full rounded-3xl border-2 border-ink bg-white p-6 md:p-8">
              <h3 className="font-display text-xl font-bold md:text-2xl">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
