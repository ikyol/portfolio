import type { Dictionary } from "@/content/dictionaries";
import { caseStack } from "@/content/site";
import { Reveal } from "./Reveal";
import { accents, Chip, Container, SectionHeading } from "./ui";

function Label({ children }: { children: string }) {
  return (
    <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted">
      {children}
    </h3>
  );
}

export function FeaturedCase({ dict }: { dict: Dictionary }) {
  const c = dict.case;

  return (
    <section id="work" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading kicker={c.kicker} />

        <Reveal>
          <article className="overflow-hidden rounded-[2rem] border-2 border-ink bg-white shadow-brutal-lg">
            <header className="bg-animated p-6 text-white md:p-10">
              <div className="flex flex-wrap gap-2">
                <Chip className="bg-white text-ink">{c.client}</Chip>
                <Chip className="bg-ink text-white">{c.role}</Chip>
                <Chip className="bg-white/20 text-white">{c.period}</Chip>
              </div>
              <h2 className="mt-6 max-w-3xl font-display text-2xl font-bold leading-tight md:text-4xl">
                {c.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                {c.summary}
              </p>
            </header>

            <div className="grid gap-12 p-6 md:p-10">
              <div>
                <Label>{c.contributionTitle}</Label>
                <div className="grid gap-4 sm:grid-cols-3">
                  {c.contribution.map((item) => (
                    <div key={item.label} className="rounded-2xl border-2 border-ink bg-paper p-5">
                      <div className="font-display text-3xl font-bold">{item.value}</div>
                      <div className="mt-1 text-sm font-semibold text-muted">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label>{c.resultsTitle}</Label>
                <div className="divide-y-2 divide-ink/10 overflow-hidden rounded-2xl border-2 border-ink">
                  <div className="hidden grid-cols-[1fr_7rem_7rem] gap-4 bg-ink px-5 py-3 font-mono text-xs uppercase tracking-widest text-white md:grid">
                    <span>{c.resultsHead.area}</span>
                    <span className="text-right">{c.resultsHead.before}</span>
                    <span className="text-right">{c.resultsHead.after}</span>
                  </div>
                  {c.results.map((row) => (
                    <div
                      key={row.area}
                      className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-2 px-5 py-4 md:grid-cols-[1fr_7rem_7rem]"
                    >
                      <div className="col-span-2 md:col-span-1">
                        <p className="font-semibold">{row.area}</p>
                        <p className="mt-0.5 text-sm text-muted">{row.note}</p>
                      </div>
                      <span className="whitespace-nowrap font-mono text-muted line-through decoration-brand-pink decoration-2 md:text-right">
                        {row.before}
                      </span>
                      <span className="justify-self-end">
                        <span className="inline-block whitespace-nowrap rounded-full border-2 border-ink bg-brand-lime px-3 py-0.5 font-mono font-bold">
                          {row.after}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border-2 border-dashed border-brand-violet bg-brand-violet/5 p-5 md:p-6">
                <h3 className="font-display text-lg font-bold">🔒 {c.securityTitle}</h3>
                <p className="mt-2 leading-relaxed text-muted">{c.securityText}</p>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <Label>{c.modulesTitle}</Label>
                  <ul className="space-y-2.5">
                    {c.modules.map((module, i) => (
                      <li key={module} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className={`mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-ink ${accents[i % accents.length]}`}
                        />
                        <span className="font-medium">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Label>{c.stackTitle}</Label>
                  <div className="flex flex-wrap gap-2">
                    {caseStack.map((tech) => (
                      <Chip key={tech} className="bg-white font-mono text-xs">
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </Container>
    </section>
  );
}
