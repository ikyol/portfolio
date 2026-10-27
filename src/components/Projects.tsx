import type { Dictionary } from "@/content/dictionaries";
import { Container, SectionHeading } from "./ui";

export function Projects({ dict }: { dict: Dictionary }) {
  const { projects } = dict;

  return (
    <section className="bg-ink py-20 text-white md:py-28">
      <Container>
        <SectionHeading title={projects.title} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <div key={project.name} className="flex h-full flex-col rounded-3xl border-2 border-white/15 p-6">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold">{project.name}</h3>
                {project.status && (
                  <span className="shrink-0 rounded-full bg-brand-lime px-2.5 py-0.5 text-xs font-bold text-ink">
                    {project.status}
                  </span>
                )}
              </div>
              <p className="mt-3 leading-relaxed text-white/75">{project.text}</p>
              {project.tech && (
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  <span className="font-semibold text-white/85">{projects.techLabel}</span> {project.tech}
                </p>
              )}
              {project.features.length > 0 && (
                <ul className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm text-white/80">
                      <span aria-hidden className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-lime" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
