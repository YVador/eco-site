import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "ECO INGENIERIE : mandataire CEE, contrôle documentaire et cadre qualité pour sécuriser vos dossiers.",
};

const missions = [
  {
    title: "Délégation des CEE",
    text: "Générer des CEE au profit de tiers, qu’ils soient obligés ou délégataires, dans un cadre officiel maîtrisé.",
  },
  {
    title: "Accompagnement administratif",
    text: "Assister bénéficiaires, fournisseurs et poseurs dans la structuration et la mise en valeur de leurs dossiers CEE.",
  },
  {
    title: "Gestion des mandats",
    text: "Mandataire administratif et financier dans le cadre des CEE.",
  },
];

const garanties = [
  {
    title: "Mandataire CEE",
    text: "Accompagnement administratif et financier pour sécuriser vos primes énergie.",
  },
  {
    title: "Vérification documentaire",
    text: "Bureau de contrôle dédié : chaque pièce est vérifiée avant dépôt.",
  },
  {
    title: "Contrôle systématique",
    text: "Chaque dossier passe un contrôle qualité avant dépôt auprès de l’obligé.",
  },
  {
    title: "Veille réglementaire",
    text: "Suivi permanent des évolutions pour garantir la conformité dans le temps.",
  },
];

export default function CertificationsPage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Certifications</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Exigence & conformité
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            ECO INGENIERIE est un représentant officiel dédié au traitement
            accéléré de vos dossiers CEE, avec un contrôle documentaire
            systématique.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <h2 className="font-display text-3xl md:text-4xl">Nos responsabilités</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {missions.map((m) => (
              <article
                key={m.title}
                className="border-t-2 border-accent pt-5"
              >
                <h3 className="font-display text-xl">{m.title}</h3>
                <p className="mt-3 text-text-muted">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site">
          <h2 className="font-display text-3xl md:text-4xl">
            Ce que garantit notre cadre qualité
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {garanties.map((g) => (
              <div
                key={g.title}
                className="rounded-[var(--radius)] border border-border bg-surface p-6"
              >
                <h3 className="font-display text-xl text-accent">{g.title}</h3>
                <p className="mt-2 text-text-muted">{g.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta">
              Un expert vous rappelle
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
