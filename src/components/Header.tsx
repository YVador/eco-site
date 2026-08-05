"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/coup-de-pouce", label: "Coup de pouce" },
  { href: "/guides", label: "Les CEE" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-xl">
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Accueil">
          <Logo height={44} priority className="max-h-11" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principale">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={site.phoneHref}
            className="hidden text-sm font-semibold text-accent xl:inline"
          >
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="btn btn-cta hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            Un expert vous rappelle
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border lg:hidden"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-text transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-text transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-text transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="py-3 font-semibold text-accent">
              Appeler {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="btn btn-cta mt-2"
              onClick={() => setOpen(false)}
            >
              Un expert vous rappelle
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
