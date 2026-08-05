import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "ECO INGENIERIE, partenaire clé de la transition énergétique et de la valorisation des CEE.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Qui sommes-nous</p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">
              Partenaire clé de la transition énergétique
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              ECO INGENIERIE facilite la mise en relation entre les émetteurs et
              ceux qui souhaitent entreprendre des projets éco-responsables.
            </p>
            <p className="mt-4 text-text-muted">
              Notre expertise de 5 ans dans le secteur des CEE couvre le conseil
              jusqu’à la mise en œuvre, pour une expérience fluide et efficace.
              Prise en charge simplifiée et rapide avec notre offre clé en main.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-bg-muted">
            <Image
              src="/media/atelier.jpg"
              alt="Équipe ECO INGENIERIE"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site">
          <h2 className="font-display text-3xl md:text-4xl">Nos missions</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                t: "Délégation des CEE",
                d: "Générer des CEE au profit de tiers, obligés ou délégataires.",
              },
              {
                t: "Accompagnement administratif",
                d: "Assister bénéficiaires, fournisseurs et poseurs dans la structuration de leurs dossiers.",
              },
              {
                t: "Gestion des mandats",
                d: "Mandataire administratif et financier CEE et MaPrimeRénov’.",
              },
            ].map((b) => (
              <div key={b.t} className="border-t border-border pt-4">
                <h3 className="font-display text-xl">{b.t}</h3>
                <p className="mt-2 text-text-muted">{b.d}</p>
              </div>
            ))}
          </div>
          <Link href="/contact" className="btn btn-cta mt-10">
            Contactez-nous
          </Link>
          <p className="mt-6 text-sm text-text-muted">
            {site.phoneDisplay} · {site.email} · {site.hours}
          </p>
        </div>
      </section>
    </>
  );
}
