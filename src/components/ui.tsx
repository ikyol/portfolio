import type { ReactNode } from "react";

// Accent backgrounds cycled through cards and chips
export const accents = [
  "bg-brand-lime",
  "bg-brand-pink text-white",
  "bg-brand-violet text-white",
  "bg-brand-orange",
  "bg-brand-cyan",
];

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  );
}

export function Chip({
  children,
  className = "bg-white",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full border-2 border-ink px-3 py-1 text-sm font-semibold ${className}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  tone = "light",
}: {
  kicker: string;
  title?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="mb-10 md:mb-14">
      <p
        className={`font-mono text-sm uppercase tracking-[0.2em] ${
          tone === "dark" ? "text-brand-lime" : "text-brand-violet"
        }`}
      >
        ✦ {kicker}
      </p>
      {title && (
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-5xl">
          {title}
        </h2>
      )}
    </div>
  );
}
