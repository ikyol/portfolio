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
                <div className="flex items-center justify-between gap-3">
                  <div className={`h-2 w-16 rounded-full ${bars[i % bars.length]}`} />
                  {project.status && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-lime/40 bg-brand-lime/10 px-2.5 py-0.5 font-mono text-xs text-brand-lime">
                      <span aria-hidden className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-lime" />
                      {project.status}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold">{project.name}</h3>
                <p className="mt-3 leading-relaxed text-white/70">{project.text}</p>
                {project.tech && (
                  <p className="mt-4 text-sm leading-relaxed text-white/50">
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-lime/80">
                      {projects.techLabel}
                    </span>{" "}
                    {project.tech}
                  </p>
                )}
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
