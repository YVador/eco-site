"use client";

import { useDeferredValue, useMemo, useState } from "react";
import {
  fichesCee,
  ficheSectors,
  type FicheCee,
} from "@/data/fiches-cee";

export function FichesCatalog() {
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<string>("all");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const filtered = useMemo(() => {
    return fichesCee.filter((fiche) => {
      if (sector !== "all" && fiche.family !== sector) return false;
      if (!deferredQuery) return true;
      const haystack = `${fiche.code} ${fiche.title} ${fiche.summary} ${fiche.category}`.toLowerCase();
      return haystack.includes(deferredQuery);
    });
  }, [deferredQuery, sector]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: fichesCee.length };
    for (const fiche of fichesCee) {
      map[fiche.family] = (map[fiche.family] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <label className="block w-full max-w-md">
          <span className="text-sm font-medium text-text-muted">Rechercher</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Code, titre… (ex. BAR-EN-101, isolation, PAC)"
            className="mt-2 w-full rounded-[var(--radius)] border border-border bg-surface px-4 py-3 text-sm outline-none transition focus:border-accent"
          />
        </label>
        <p className="text-sm text-text-muted">
          <span className="font-semibold text-text">{filtered.length}</span> fiche
          {filtered.length > 1 ? "s" : ""} affichée
          {filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {ficheSectors.map((s) => {
          const active = sector === s.id;
          const count = counts[s.id] ?? 0;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setSector(s.id)}
              className={`rounded-[var(--radius)] border px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border-cta bg-cta text-white"
                  : "border-border bg-surface text-text-muted hover:border-accent hover:text-text"
              }`}
            >
              {s.label}
              <span className={`ml-1.5 ${active ? "text-white/80" : "text-text-muted"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-3">
        {filtered.map((fiche) => (
          <FicheRow key={fiche.code} fiche={fiche} />
        ))}
        {filtered.length === 0 && (
          <p className="rounded-[var(--radius)] border border-dashed border-border px-5 py-10 text-center text-text-muted">
            Aucune fiche ne correspond à votre recherche.
          </p>
        )}
      </div>
    </div>
  );
}

function FicheRow({ fiche }: { fiche: FicheCee }) {
  return (
    <article className="flex flex-col gap-3 rounded-[var(--radius)] border border-border bg-surface px-5 py-4 transition hover:border-accent/40 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-[var(--radius-sm)] bg-bg-muted px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-accent">
            {fiche.code}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
            {fiche.sector} · {fiche.category}
          </span>
        </div>
        <h2 className="mt-2 font-display text-xl leading-snug md:text-2xl">
          {fiche.title}
        </h2>
        {fiche.summary && (
          <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
            {fiche.summary}
          </p>
        )}
      </div>
    </article>
  );
}
