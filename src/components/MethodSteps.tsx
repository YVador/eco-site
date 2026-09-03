"use client";

import { useState } from "react";
import { timeline } from "@/data/site";

export function MethodSteps() {
  const [active, setActive] = useState(0);
  const step = timeline[active];
  const progress = ((active + 1) / timeline.length) * 100;

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-8 lg:items-stretch">
      <ol className="flex flex-col gap-2.5">
        {timeline.map((item, i) => {
          const isActive = i === active;
          return (
            <li key={item.step}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex w-full items-center gap-3 rounded-[var(--radius)] border px-3.5 py-3.5 text-left transition ${
                  isActive
                    ? "border-cta bg-surface shadow-[var(--shadow-sm)]"
                    : "border-border/80 bg-bg-muted/40 text-text-muted hover:border-border hover:bg-surface"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-xs font-bold tabular-nums ${
                    isActive
                      ? "bg-cta text-white"
                      : "bg-bg-soft text-text-muted"
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`flex-1 text-sm font-semibold md:text-[0.95rem] ${
                    isActive ? "text-text" : "text-text-muted"
                  }`}
                >
                  {item.title}
                </span>
                {isActive && (
                  <span className="text-cta" aria-hidden>
                    ›
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[var(--radius-lg)] bg-bg-inverse p-7 text-white md:p-9">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(16,96,176,0.32),transparent_55%)]"
          aria-hidden
        />
        <div className="relative flex items-start justify-between gap-4">
          <span className="rounded-[var(--radius-sm)] border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-white/75 uppercase">
            Étape {step.step} · {step.tag}
          </span>
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-cta text-white"
            aria-hidden
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M16 16l4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>

        <h3 className="relative mt-8 font-display text-3xl md:text-4xl lg:text-[2.75rem]">
          {step.title}
        </h3>
        <p className="relative mt-4 max-w-lg text-base leading-relaxed text-white/78 md:text-lg">
          {step.text}
        </p>

        <div className="relative mt-auto pt-10">
          <div className="h-1 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-cta transition-[width] duration-400 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 flex items-end justify-between gap-4">
            <p className="text-[11px] font-semibold tracking-[0.14em] text-white/55 uppercase">
              Avancement · {Math.round(progress)}%
            </p>
            <div className="text-right">
              <p className="font-display text-3xl leading-none md:text-4xl">
                {step.metric}
              </p>
              <p className="mt-1 text-xs text-white/60">{step.metricLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
