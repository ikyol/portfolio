import type { ReactNode } from "react";

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

export function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="mb-10 font-display text-3xl font-bold leading-tight md:mb-14 md:text-5xl">
      {title}
    </h2>
  );
}

// A measurement track: "before" fills with slate, "after" with lime
export function MeasureBar({ percent, tone }: { percent: number; tone: "before" | "after" }) {
  return (
    <div aria-hidden className="h-5 overflow-hidden rounded-full border-2 border-ink bg-white">
      <div
        className={`h-full ${tone === "before" ? "bg-slate" : "bg-brand-lime"}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
