import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coup de pouce",
  description:
    "Coup de pouce énergie avec ECO INGENIERIE : accompagnez vos travaux d’économies d’énergie.",
};

export default function CoupDePoucePage() {
  return (
    <section className="section">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">Coup de pouce</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">
          Un coup de pouce pour vos travaux
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          Grâce aux dispositifs CEE et MaPrimeRénov’, accélerez le financement
          de vos projets d’économies d’énergie. ECO INGENIERIE vous accompagne
          pour maximiser vos aides et sécuriser vos dossiers.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/simulation" className="btn btn-cta">
            Demander une simulation
          </Link>
          <Link href="/solutions" className="btn btn-ghost">
            Voir les solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
