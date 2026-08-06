import type { Metadata } from "next";
import Link from "next/link";
import { FichesCatalog } from "@/components/FichesCatalog";
import { fichesCeeCount, officialFichesUrl } from "@/data/fiches-cee";

export const metadata: Metadata = {
  title: "Fiches CEE",
  description:
    "Catalogue des fiches d’opérations standardisées CEE : résidentiel, tertiaire, industrie, agriculture, réseaux et transport.",
};

export default function FichesCeePage() {
  return (
    <>
      <section className="border-b border-border bg-bg-muted py-14 md:py-20">
        <div className="container-site">
          <p className="eyebrow">Catalogue</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">
            Fiches CEE
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-text-muted">
            {fichesCeeCount} fiches d’opérations standardisées réparties en six
            secteurs. Identifiez le geste éligible, puis confiez-nous la
            valorisation de votre dossier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta">
              Un expert vous rappelle
            </Link>
            <a
              href={officialFichesUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              Source officielle
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <FichesCatalog />
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-text-muted">
            Catalogue indicatif à usage d’orientation. Les conditions techniques,
            forfaits kWh cumac et versions en vigueur sont définis par les
            arrêtés ministériels. Pour un dossier conforme, notre équipe
            s’appuie sur la dernière version officielle de chaque fiche.
          </p>
        </div>
      </section>
    </>
  );
}
