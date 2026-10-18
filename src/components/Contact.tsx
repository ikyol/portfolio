import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { Container, SectionHeading } from "./ui";

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact, footer } = dict;

  const links = [
    { enabled: site.email, label: contact.labels.email, value: site.email, href: `mailto:${site.email}` },
    {
      enabled: site.telegram,
      label: contact.labels.telegram,
      value: `@${site.telegram}`,
      href: `https://t.me/${site.telegram}`,
    },
    {
      enabled: site.github,
      label: contact.labels.github,
      value: site.github,
      href: `https://github.com/${site.github}`,
    },
    {
      enabled: site.linkedin,
      label: contact.labels.linkedin,
      value: site.linkedin,
      href: `https://www.linkedin.com/in/${site.linkedin}`,
    },
  ].filter((link) => link.enabled);

  return (
    <footer id="contact" className="relative scroll-mt-20 overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="blob -right-20 -top-20 h-80 w-80 bg-brand-violet opacity-40" />
        <div
          className="blob -bottom-24 left-10 h-72 w-72 bg-brand-pink opacity-30"
          style={{ animationDelay: "-8s" }}
        />
      </div>

      <Container className="relative py-20 md:py-28">
        <SectionHeading kicker={contact.kicker} tone="dark" />
        <h2 className="max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
          {contact.title}
        </h2>
        <p className="mt-6 max-w-xl text-lg text-white/70">{contact.text}</p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-between gap-6 rounded-full border-2 px-6 py-4 font-bold transition hover:-translate-y-0.5 ${
                i === 0
                  ? "border-white bg-white text-ink shadow-brutal-pink"
                  : "border-white/30 hover:border-white"
              }`}
            >
              <span className="font-mono text-xs uppercase tracking-widest opacity-60">
                {link.label}
              </span>
              <span>{link.value}</span>
            </a>
          ))}
        </div>

        <p className="mt-10 font-mono text-sm text-white/50">🕐 {contact.timezone}</p>

        <div className="mt-20 flex flex-col justify-between gap-2 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <span>© {site.name}</span>
          <span>{footer.built}</span>
        </div>
      </Container>
    </footer>
  );
}
