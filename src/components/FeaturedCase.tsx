import type { ReactNode } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { caseStack } from "@/content/site";
import { Chip, Container, MeasureBar } from "./ui";

type Case = Dictionary["case"];
type Result = Case["results"][number];

function Label({ children }: { children: string }) {
  return <h3 className="mb-5 font-display text-xl font-bold">{children}</h3>;
}

// Phone: label and value on one line, the picture full width below.
// Wider screens: label, picture and value in fixed columns that line up across rows
function Pair({
  label,
  value,
  tone,
  align = "center",
  children,
}: {
  label: string;
  value: string;
  tone: "before" | "after";
  align?: "center" | "start";
  children: ReactNode;
}) {
  const text = tone === "before" ? "font-semibold text-muted" : "font-bold";

  return (
    <div
      className={`grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5 sm:grid-cols-[3.25rem_minmax(0,1fr)_4.25rem] ${
        align === "center" ? "items-center" : "items-start"
      }`}
    >
      <span className={`text-sm ${text}`}>{label}</span>
      <span className={`text-right text-sm tabular-nums sm:order-3 ${text}`}>{value}</span>
      <div className="col-span-2 sm:order-2 sm:col-span-1">{children}</div>
    </div>
  );
}

function TimeResult({ row, labels }: { row: Result; labels: Case["resultsHead"] }) {
  // Tiny results still get a visible sliver; the label carries the exact value
  const afterPercent = Math.max((row.afterValue / row.beforeValue) * 100, 1.5);

  return (
    <div>
      <p className="font-semibold">{row.area}</p>
      <p className="mt-0.5 text-sm text-muted">{row.note}</p>
      <div className="mt-3 space-y-2.5">
        <Pair label={labels.before} value={row.before} tone="before">
          <MeasureBar percent={100} tone="before" />
        </Pair>
        <Pair label={labels.after} value={row.after} tone="after">
          <MeasureBar percent={afterPercent} tone="after" />
        </Pair>
      </div>
    </div>
  );
}

// One dot per request; an SVG pattern keeps thousands of dots a few elements
function Dots({ id, count, tone }: { id: string; count: number; tone: "before" | "after" }) {
  const columns = 60;
  const cell = 8;
  const fullRows = Math.floor(count / columns);
  const rest = count % columns;

  return (
    <svg
      aria-hidden
      viewBox={`0 0 ${columns * cell} ${Math.ceil(count / columns) * cell}`}
      className="block h-auto w-full"
    >
      <defs>
        <pattern id={id} width={cell} height={cell} patternUnits="userSpaceOnUse">
          <circle
            cx={cell / 2}
            cy={cell / 2}
            r={2.6}
            className={tone === "before" ? "fill-slate" : "fill-ink"}
          />
        </pattern>
      </defs>
      {fullRows > 0 && <rect width={columns * cell} height={fullRows * cell} fill={`url(#${id})`} />}
      {rest > 0 && <rect y={fullRows * cell} width={rest * cell} height={cell} fill={`url(#${id})`} />}
    </svg>
  );
}

function RequestsResult({ row, labels, id }: { row: Result; labels: Case["resultsHead"]; id: string }) {
  return (
    <div>
      <p className="font-semibold">{row.area}</p>
      <p className="mt-0.5 text-sm text-muted">{row.note}</p>
      <div className="mt-3 space-y-3">
        <Pair label={labels.before} value={row.before} tone="before" align="start">
          <Dots id={`${id}-before`} count={row.beforeValue} tone="before" />
        </Pair>
        <Pair label={labels.after} value={row.after} tone="after" align="start">
          <Dots id={`${id}-after`} count={row.afterValue} tone="after" />
        </Pair>
      </div>
    </div>
  );
}

export function FeaturedCase({ dict }: { dict: Dictionary }) {
  const c = dict.case;
  const timeResults = c.results.filter((row) => row.kind === "time");
  const requestResults = c.results.filter((row) => row.kind === "requests");

  return (
    <section id="work" className="scroll-mt-20 pb-20 pt-12 md:pb-28 md:pt-16">
      <Container>
        <article className="overflow-hidden rounded-[2rem] border-2 border-ink bg-white">
          <header className="bg-ink p-6 text-white md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Chip className="bg-white text-ink">{c.client}</Chip>
              <Chip className="bg-brand-lime text-ink">{c.role}</Chip>
              <span className="px-1 text-sm font-semibold text-white/70">{c.period}</span>
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-2xl font-bold leading-tight md:text-4xl">
              {c.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 md:text-lg">
              {c.summary}
            </p>
          </header>

          <div className="grid gap-14 p-6 md:p-10">
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

              <h4 className="font-bold">{c.timeTitle}</h4>
              <div className="mt-5 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {timeResults.map((row) => (
                  <TimeResult key={row.area} row={row} labels={c.resultsHead} />
                ))}
              </div>

              <h4 className="mt-12 font-bold">{c.requestsTitle}</h4>
              <p className="mt-1 text-sm text-muted">{c.requestsNote}</p>
              <div className="mt-5 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {requestResults.map((row, i) => (
                  <RequestsResult key={row.area} row={row} labels={c.resultsHead} id={`requests-${i}`} />
                ))}
              </div>
            </div>

            <div className="rounded-2xl border-2 border-dashed border-brand-violet bg-brand-violet/5 p-5 md:p-6">
              <h3 className="font-display text-lg font-bold">{c.securityTitle}</h3>
              <p className="mt-2 leading-relaxed text-muted">{c.securityText}</p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <Label>{c.modulesTitle}</Label>
                <ul className="space-y-2.5">
                  {c.modules.map((module) => (
                    <li key={module} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ink" />
                      <span className="font-medium">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label>{c.stackTitle}</Label>
                <div className="flex flex-wrap gap-2">
                  {caseStack.map((tech) => (
                    <Chip key={tech} className="bg-white text-xs">
                      {tech}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  );
}
