"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import type { Dictionary, Locale } from "@/content/dictionaries";
import { MeasureBar } from "./ui";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => false,
  );
}

function Check() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 9.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function SpeedTest({ copy, lang }: { copy: Dictionary["speedTest"]; lang: Locale }) {
  const longest = Math.max(...copy.rows.map((row) => row.before.value));
  const [elapsed, setElapsed] = useState(0);
  const [run, setRun] = useState(0);
  const reducedMotion = useReducedMotion();

  // Bars move at real speed: "after" finishes in its real time while "before" keeps crawling
  useEffect(() => {
    if (reducedMotion) return;
    const start = performance.now();
    const timer = window.setInterval(() => {
      const next = Math.min((performance.now() - start) / 1000, longest);
      setElapsed(next);
      if (next >= longest) window.clearInterval(timer);
    }, 50);
    return () => window.clearInterval(timer);
  }, [run, longest, reducedMotion]);

  // With reduced motion the result is shown at once, without the race
  const time = reducedMotion ? longest : elapsed;
  const seconds = new Intl.NumberFormat(lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const ticking = (limit: number) => `${seconds.format(Math.min(time, limit))} ${copy.unit}`;

  return (
    <section
      aria-label={copy.label}
      className="rounded-[1.75rem] border-2 border-ink bg-white p-5 shadow-brutal sm:p-8 lg:shadow-brutal-lg"
    >
      <div className="space-y-7">
        {copy.rows.map((row, i) => {
          const beforeDone = time >= row.before.value;
          const afterDone = time >= row.after.value;

          return (
            // The phone shows one pair so the whole first screen fits
            <div key={row.title} className={i > 0 ? "hidden sm:block" : undefined}>
              <p className="font-bold">{row.title}</p>
              <div className="mt-3 space-y-2.5">
                <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 sm:grid-cols-[3.5rem_minmax(0,1fr)_7rem]">
                  <span className="text-sm font-semibold text-muted">{copy.before}</span>
                  <span className="text-right text-sm font-semibold tabular-nums text-muted sm:order-3">
                    {beforeDone ? row.before.label : `${ticking(row.before.value)} ${copy.of} ${row.before.label}`}
                  </span>
                  <div className="col-span-2 sm:order-2 sm:col-span-1">
                    <MeasureBar percent={Math.min(time / row.before.value, 1) * 100} tone="before" />
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 sm:grid-cols-[3.5rem_minmax(0,1fr)_7rem]">
                  <span className="text-sm font-bold">{copy.after}</span>
                  <span className="flex items-center justify-end gap-1.5 text-sm font-bold tabular-nums sm:order-3">
                    {afterDone ? row.after.label : ticking(row.after.value)}
                    {afterDone && <Check />}
                  </span>
                  <div className="col-span-2 sm:order-2 sm:col-span-1">
                    <MeasureBar percent={Math.min(time / row.after.value, 1) * 100} tone="after" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between gap-4 border-t-2 border-ink/10 pt-5">
        <p className="text-[0.8125rem] leading-snug text-muted sm:max-w-[16rem] sm:text-sm">{copy.caption}</p>
        {!reducedMotion && (
          <button
            type="button"
            onClick={() => {
              setElapsed(0);
              setRun((count) => count + 1);
            }}
            className="h-11 shrink-0 rounded-full border-2 border-ink bg-white px-4 text-sm font-bold shadow-brutal-sm transition hover:-translate-y-0.5"
          >
            {copy.rerun}
          </button>
        )}
      </div>
    </section>
  );
}
