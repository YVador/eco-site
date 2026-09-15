"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { mainNav, mainNavLinks } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  const solid = scrolled || open || !isHome;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDesktopOpen(null);
  }, [pathname]);

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

  const linkIdle = solid
    ? "text-text-muted hover:text-text"
    : "!text-white/85 hover:!text-white";
  const linkActive = solid ? "text-text" : "!text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 ${
        solid
          ? "border-b border-border/70 bg-bg/70 shadow-[var(--shadow-sm)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-white"
      }`}
    >
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-4">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Accueil"
        >
          <Logo
            height={54}
            priority
            src={
              solid ? "/logo.png" : "/media/logo_blanc_eco_inge.png"
            }
            className={`max-h-[3.4rem] transition ${
              solid ? "" : "drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
            }`}
          />
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
                  className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition ${
                    isOpen ? linkActive : linkIdle
                  }`}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() =>
                    setDesktopOpen((v) =>
                      v === group.label ? null : group.label,
                    )
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
                    <div className="rounded-[var(--radius)] border border-border bg-bg py-2 text-text shadow-lg min-w-[18rem] max-w-[22rem]">
                      {group.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium leading-snug !text-text-muted transition hover:bg-bg-muted hover:!text-text"
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
              className={`rounded-[var(--radius-sm)] px-3 py-2 text-sm font-medium transition ${linkIdle}`}
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
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border transition lg:hidden ${
              solid
                ? "border-border text-text"
                : "border-white/35 text-white"
            }`}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 transition ${
                  solid ? "bg-text" : "bg-white"
                } ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 transition ${
                  solid ? "bg-text" : "bg-white"
                } ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 transition ${
                  solid ? "bg-text" : "bg-white"
                } ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-bg lg:hidden">
          <nav
            className="container-site flex flex-col gap-1 py-4"
            aria-label="Mobile"
          >
            {mainNav.map((group) => {
              const isOpen = mobileOpen === group.label;
              return (
                <div
                  key={group.label}
                  className="border-b border-border/60 py-1"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-3 text-left text-base font-medium"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setMobileOpen((v) =>
                        v === group.label ? null : group.label,
                      )
                    }
                  >
                    {group.label}
                    <span
                      className={`text-xs transition ${isOpen ? "rotate-180" : ""}`}
                    >
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
