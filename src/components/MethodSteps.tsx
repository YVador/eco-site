"use client";

import Image from "next/image";
import { useState } from "react";
import { timeline } from "@/data/site";

export function MethodSteps() {
  const [active, setActive] = useState(0);
  const step = timeline[active];

  return (
    <div className="mt-12">
      {/* Étapes — ligne horizontale */}
      <ol className="relative grid grid-cols-2 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        <span
          className="pointer-events-none absolute top-5 right-[10%] left-[10%] hidden h-px bg-border lg:block"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute top-5 left-[10%] hidden h-px bg-cta transition-[width] duration-500 ease-out lg:block"
          style={{
            width: `calc(${(active / (timeline.length - 1)) * 80}%)`,
          }}
          aria-hidden
        />

        {timeline.map((item, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <li key={item.step} className="relative z-10 flex justify-center">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`group flex w-full max-w-[12rem] flex-col items-center rounded-[var(--radius)] px-2 py-3 text-center transition ${
                  isActive
                    ? "bg-cta/10 ring-1 ring-cta/30"
                    : "hover:bg-surface/80"
                }`}
              >
                <span
                  className={`flex items-center justify-center rounded-full text-xs font-bold tabular-nums transition ${
                    isActive
                      ? "h-12 w-12 scale-110 bg-cta text-white shadow-[0_8px_24px_rgb(16_96_176_/_0.35)] ring-4 ring-cta/20"
                      : isDone
                        ? "h-10 w-10 bg-accent text-white ring-4 ring-bg-muted"
                        : "h-10 w-10 bg-surface text-text-muted ring-4 ring-bg-muted group-hover:bg-cta/15 group-hover:text-cta"
                  }`}
                >
                  {item.step}
                </span>
                <span
                  className={`mt-3 block text-[0.65rem] font-semibold tracking-[0.12em] uppercase ${
                    isActive ? "text-cta" : "text-text-muted/70"
                  }`}
                >
                  {item.tag}
                </span>
                <span
                  className={`mt-1 block font-display leading-snug transition ${
                    isActive
                      ? "text-base text-text md:text-lg"
                      : "text-sm text-text-muted group-hover:text-text md:text-base"
                  }`}
                >
                  {item.title}
                </span>
                {isActive && (
                  <span
                    className="mt-2 h-0.5 w-10 rounded-full bg-lime"
                    aria-hidden
                  />
                )}
              </button>
            </li>
          );
        })}
      </ol>

      {/* Détail — bandeau horizontal */}
      <article className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-sm)] lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="relative aspect-[16/10] overflow-hidden bg-bg-muted lg:aspect-auto lg:min-h-[320px]">
          <Image
            key={step.image}
            src={step.image}
            alt={step.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={active === 0}
          />
        </div>

        <div className="flex flex-col justify-center p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-[var(--radius-sm)] bg-cta/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-cta uppercase">
              Étape {step.step} / {timeline.length}
            </span>
            <span className="text-sm text-text-muted">
              <span className="font-display text-xl text-text md:text-2xl">
                {step.metric}
              </span>
              <span className="ml-2">{step.metricLabel}</span>
            </span>
          </div>

          <h3 className="mt-5 font-display text-2xl md:text-3xl lg:text-[2.35rem]">
            {step.title}
          </h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-text-muted md:text-lg">
            {step.text}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              disabled={active === 0}
              onClick={() => setActive((v) => Math.max(0, v - 1))}
              className="rounded-[var(--radius-sm)] border border-border px-3 py-2 text-sm font-medium text-text-muted transition hover:border-cta hover:text-cta disabled:cursor-not-allowed disabled:opacity-40"
            >
              Précédent
            </button>
            <button
              type="button"
              disabled={active === timeline.length - 1}
              onClick={() =>
                setActive((v) => Math.min(timeline.length - 1, v + 1))
              }
              className="rounded-[var(--radius-sm)] border border-border px-3 py-2 text-sm font-medium text-text-muted transition hover:border-cta hover:text-cta disabled:cursor-not-allowed disabled:opacity-40"
            >
              Suivant
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}
