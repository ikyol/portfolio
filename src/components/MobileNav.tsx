"use client";

import { useEffect, useState } from "react";

export function MobileNav({
  links,
  openLabel,
  closeLabel,
}: {
  links: { href: string; label: string }[];
  openLabel: string;
  closeLabel: string;
}) {
  const [open, setOpen] = useState(false);

  // Escape closes the menu, as with any other popup
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((value) => !value)}
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink bg-white"
      >
        <svg
          aria-hidden
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d={open ? "M3 3l12 12M15 3L3 15" : "M2 4h14M2 9h14M2 14h14"} />
        </svg>
      </button>

      <nav
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b-2 border-ink bg-paper px-4 pb-6 sm:px-6"
      >
        <ul>
          {links.map((link) => (
            <li key={link.href} className="border-b-2 border-ink/10 last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-display text-2xl font-bold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
