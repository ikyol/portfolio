import type { Dictionary } from "@/content/dictionaries";
import { Reveal } from "./Reveal";
import { Container, SectionHeading } from "./ui";

export function Experience({ dict }: { dict: Dictionary }) {
  const { experience } = dict;

  return (
    <section id="experience" className="scroll-mt-20 pb-20 md:pb-28">
      <Container>
        <SectionHeading kicker={experience.kicker} title={experience.title} />

        <ol className="ml-3 border-l-2 border-ink">
          {experience.items.map((job) => (
            <li key={job.company} className="relative pb-12 pl-8 last:pb-0 md:pl-12">
              <span className="bg-animated absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-2 border-ink" />
              <Reveal>
                <p className="font-mono text-sm text-muted">{job.period}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{job.company}</h3>
                <p className="mt-1 font-semibold text-brand-violet">{job.role}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-muted">
                      <span aria-hidden className="text-brand-pink">
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
