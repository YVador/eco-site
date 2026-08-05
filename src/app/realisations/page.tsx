import type { Metadata } from "next";
import Link from "next/link";
import { clientSectors, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Nos clients",
  description:
    "Clients ECO INGENIERIE : entreprises, obligés, collectivités, bailleurs, artisans et particuliers.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Nos clients</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Au service de la transition énergétique
          </h1>
          <p className="mt-4 text-text-muted">
            Grandes entreprises, artisans locaux, collectivités et particuliers :
            chaque client est au cœur de notre mission — faciliter la transition
            énergétique et maximiser la valeur des CEE.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <h2 className="font-display text-3xl md:text-4xl">
            Secteurs accompagnés
          </h2>
          <p className="mt-3 max-w-2xl text-text-muted">
            Remplacez cette grille par vos logos partenaires dès qu’ils sont
            disponibles (`public/partners/`).
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientSectors.map((s) => (
              <div
                key={s.name}
                className="flex min-h-[140px] flex-col justify-between rounded-[var(--radius-lg)] border border-border bg-surface p-6 transition hover:border-accent"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {s.tag}
                </span>
                <p className="mt-6 font-display text-2xl">{s.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta">
              Devenir partenaire
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
