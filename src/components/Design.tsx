import type { Dictionary } from "@/content/dictionaries";
import { Container } from "./ui";

export function Design({ dict }: { dict: Dictionary }) {
  const { design } = dict;

  return (
    <section id="design" className="scroll-mt-20 pb-20 md:pb-28">
      <Container>
        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
          {design.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{design.text}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {design.items.map((item) => (
            <div key={item.title} className="h-full rounded-3xl border-2 border-ink bg-white p-6">
              <h3 className="font-display text-lg font-bold md:text-xl">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <h3 className="mb-6 mt-16 font-display text-xl font-bold">{design.processTitle}</h3>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {design.process.map((step, i) => (
            <li key={step.title} className="rounded-3xl border-2 border-dashed border-ink/30 p-5">
              <span className="font-display text-3xl font-bold">{i + 1}</span>
              <p className="mt-3 font-display font-bold">{step.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
