import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/site";

export const metadata: Metadata = {
  title: "Les CEE",
  description:
    "Comprendre les Certificats d’Économies d’Énergie et le rôle d’ECO INGENIERIE.",
};

export default function GuidesPage() {
  return (
    <section className="section">
      <div className="container-site">
        <p className="eyebrow">Les CEE</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">
          Comprendre les CEE
        </h1>
        <p className="mt-4 max-w-xl text-text-muted">
          Définition, mandats et parcours de valorisation avec ECO INGENIERIE.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="card-surface block overflow-hidden transition"
            >
              <div className="border-t-4 border-accent p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                  {guide.category} · {guide.readTime}
                </p>
                <h2 className="mt-3 font-display text-2xl">{guide.title}</h2>
                <p className="mt-3 text-text-muted">{guide.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent">
                  Lire l’article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
