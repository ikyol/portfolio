import type { Dictionary } from "@/content/dictionaries";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

const bars = [
  "bg-brand-lime",
  "bg-brand-pink",
  "bg-brand-cyan",
  "bg-brand-orange",
  "bg-brand-violet",
];

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects } = dict;

  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <Container>
        <SectionHeading kicker={projects.kicker} title={projects.title} tone="dark" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project, i) => (
            <Reveal key={project.name} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-3xl border-2 border-white/15 bg-white/5 p-6 transition hover:border-white/40 hover:bg-white/10">
                <div className={`h-2 w-16 rounded-full ${bars[i % bars.length]}`} />
                <h3 className="mt-5 font-display text-xl font-bold">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{project.text}</p>
                {project.features.length > 0 && (
                  <ul className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm text-white/80">
                        <span aria-hidden className="text-brand-lime">
                          ✦
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
