import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "ECO INGENIERIE : bureau de vérification documentaire certifié ISO 9001, reconnu COFRAC.",
};

export default function CertificationsPage() {
  return (
    <section className="section">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">Certifications</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">
          Exigence & conformité
        </h1>
        <p className="mt-6 text-lg text-text-muted">
          ECO INGENIERIE est un représentant officiel, bureau de vérification
          documentaire certifié selon la norme ISO 9001 par une entité reconnue
          par le COFRAC.
        </p>
        <ul className="mt-10 space-y-4">
          {[
            "Contrôle documentaire rigoureux de chaque dossier CEE",
            "Veille réglementaire permanente",
            "Mandataire CEE et MaPrimeRénov’",
            "Processus qualité orienté conformité et délais",
          ].map((item) => (
            <li key={item} className="flex gap-3 text-lg">
              <span className="mt-2 h-2 w-2 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-cta mt-12">
          Nous contacter
        </Link>
      </div>
    </section>
  );
}
