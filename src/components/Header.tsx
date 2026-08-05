"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { audiences } from "@/data/site";

const nav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/#pour-qui", label: "Pour qui" },
  { href: "/guides", label: "Les CEE" },
  { href: "/certifications", label: "Certifications" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [usageOpen, setUsageOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-xl">
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Accueil">
          <Logo height={44} priority className="max-h-11" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principale">
          {nav.map((item) =>
            item.label === "Pour qui" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setUsageOpen(true)}
                onMouseLeave={() => setUsageOpen(false)}
              >
                <button
                  type="button"
                  className="text-sm font-medium text-text-muted transition hover:text-text"
                  aria-expanded={usageOpen}
                >
                  Pour qui
                </button>
                {usageOpen && (
                  <div className="absolute left-0 top-full min-w-[260px] rounded-[var(--radius-sm)] border border-border bg-surface py-2 shadow-[var(--shadow-md)]">
                    {audiences.map((u) => (
                      <Link
                        key={u.slug}
                        href={`/pour-qui/${u.slug}`}
                        className="block px-4 py-2 text-sm text-text-muted hover:bg-bg-muted hover:text-text"
                      >
                        {u.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-muted transition hover:text-text"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/simulation"
            className="btn btn-cta hidden px-4 py-2.5 text-sm sm:inline-flex"
          >
            Demander une simulation
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
            <div className="mt-2 border-t border-border pt-3">
              <p className="eyebrow mb-2">Pour qui</p>
              {audiences.map((u) => (
                <Link
                  key={u.slug}
                  href={`/pour-qui/${u.slug}`}
                  className="block py-2 text-sm text-text-muted"
                  onClick={() => setOpen(false)}
                >
                  {u.title}
                </Link>
              ))}
            </div>
            <Link
              href="/simulation"
              className="btn btn-cta mt-4"
              onClick={() => setOpen(false)}
            >
              Demander une simulation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
