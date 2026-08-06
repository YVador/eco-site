"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { mainNav, mainNavLinks } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (!navRef.current?.contains(e.target as Node)) {
        setDesktopOpen(null);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!open) setMobileOpen(null);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-xl">
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Accueil">
          <Logo height={44} priority className="max-h-11" />
        </Link>

        <nav
          ref={navRef}
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principale"
        >
          {mainNav.map((group) => {
            const isOpen = desktopOpen === group.label;
            return (
              <div key={group.label} className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-text-muted transition hover:text-text"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopOpen((v) => (v === group.label ? null : group.label))
                  }
                  onMouseEnter={() => setDesktopOpen(group.label)}
                >
                  {group.label}
                  <span
                    className={`text-[10px] transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="absolute left-0 top-full z-50 min-w-[16rem] pt-2"
                    onMouseLeave={() => setDesktopOpen(null)}
                  >
                    <div className="rounded-[var(--radius)] border border-border bg-bg py-2 shadow-lg">
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-text-muted transition hover:bg-bg-muted hover:text-text"
                          onClick={() => setDesktopOpen(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          {mainNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium text-text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
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
            {mainNav.map((group) => {
              const isOpen = mobileOpen === group.label;
              return (
                <div key={group.label} className="border-b border-border/60 py-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setMobileOpen((v) => (v === group.label ? null : group.label))
                    }
                  >
                    {group.label}
                    <span className={`text-xs transition ${isOpen ? "rotate-180" : ""}`}>
                      ▾
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mb-2 flex flex-col gap-1 pb-2 pl-3">
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="py-2.5 text-sm text-text-muted"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            {mainNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
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
