import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Coup de pouce",
  description:
    "Coup de pouce énergie : CEE et MaPrimeRénov’ avec ECO INGENIERIE pour financer vos travaux d’économies d’énergie.",
};

const aides = [
  {
    title: "Primes CEE",
    text: "Valorisez vos travaux d’économies d’énergie via les Certificats d’Économies d’Énergie, avec un dossier structuré et conforme.",
  },
  {
    title: "MaPrimeRénov’",
    text: "En tant que mandataire, nous vous accompagnons dans la constitution du dossier et le préfinancement possible de l’aide.",
  },
  {
    title: "Offre clé en main",
    text: "Un seul interlocuteur : dépôt, suivi, envoi auprès de l’obligé, puis paiement de la prime.",
  },
];

const etapes = [
  "Éligibilité de vos travaux et estimation des aides",
  "Constitution et contrôle du dossier documentaire",
  "Dépôt auprès de l’obligé / instructeur",
  "Suivi jusqu’au versement de la prime",
];

export default function CoupDePoucePage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Coup de pouce</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Un coup de pouce pour financer vos travaux
          </h1>
          <p className="mt-6 text-lg text-text-muted">
            Grâce aux dispositifs CEE et MaPrimeRénov’, accélerez le financement
            de vos projets d’économies d’énergie. ECO INGENIERIE sécurise vos
            dossiers et maximise vos aides.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/demande" className="btn btn-cta">
              Orienter ma demande
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              Appeler {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <h2 className="font-display text-3xl md:text-4xl">
            Quelles aides mobiliser ?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {aides.map((a) => (
              <article
                key={a.title}
                className="rounded-[var(--radius)] border border-border bg-surface p-6"
              >
                <h3 className="font-display text-xl">{a.title}</h3>
                <p className="mt-3 text-text-muted">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Comment ça se passe ?
          </h2>
          <ol className="mt-8 space-y-5">
            {etapes.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="font-display text-2xl text-cta">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-white/80">{step}</p>
              </li>
            ))}
          </ol>
          <Link href="/contact" className="btn btn-cta mt-10">
            Un expert vous rappelle
          </Link>
        </div>
      </section>
    </>
  );
}
