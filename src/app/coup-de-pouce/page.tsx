import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Coup de pouce CEE",
  description:
    "Les Coups de pouce CEE : bonifications du dispositif des Certificats d’Économies d’Énergie avec ECO INGENIERIE.",
};

const regles = [
  "les opérations concernées ;",
  "les conditions d’éligibilité ;",
  "les critères techniques à respecter ;",
  "les modalités de calcul et de versement des primes ;",
  "les engagements des signataires de la charte Coup de pouce.",
] as const;

const dispositifs = [
  {
    title: "Coup de pouce Chauffage",
    text: "Vise certaines opérations de remplacement d’équipements de chauffage existants par des solutions plus performantes.",
  },
  {
    title: "Coup de pouce Bâtiment Tertiaire",
    text: "Destiné à accompagner certaines opérations d’économies d’énergie dans les bâtiments du secteur tertiaire.",
  },
] as const;

export default function CoupDePoucePage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Coup de pouce</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Les Coups de pouce CEE&nbsp;: des bonifications du dispositif
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Les Coups de pouce sont des dispositifs spécifiques intégrés au
            mécanisme des Certificats d’Économies d’Énergie (CEE). Ils ont été
            mis en place par l’État afin d’accélérer la réalisation de certaines
            opérations d’économies d’énergie considérées comme prioritaires.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Contrairement aux primes CEE classiques, les opérations bénéficiant
            d’un «&nbsp;Coup de pouce&nbsp;» font l’objet d’une bonification du
            volume de certificats générés, permettant d’augmenter le soutien
            financier accordé au bénéficiaire.
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
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Un dispositif encadré par la réglementation CEE
          </h2>
          <p className="mt-5 text-lg text-text-muted">
            Chaque dispositif «&nbsp;Coup de pouce&nbsp;» est défini par des
            textes réglementaires précisant notamment&nbsp;:
          </p>
          <ul className="mt-6 space-y-3">
            {regles.map((item) => (
              <li key={item} className="flex gap-3 text-text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-text-muted">
            Les travaux doivent également respecter les exigences prévues par
            les fiches d’opérations standardisées CEE lorsqu’elles existent. Les
            Coups de pouce sont définis par des textes réglementaires et des
            chartes d’engagement qui précisent les opérations concernées, les
            conditions d’éligibilité et les modalités de bonification associées.
            Ils viennent compléter les fiches d’opérations standardisées
            lorsqu’un cadre spécifique est prévu.
          </p>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site">
          <h2 className="max-w-3xl font-display text-3xl md:text-4xl">
            Des dispositifs adaptés aux priorités de la transition énergétique
          </h2>
          <p className="mt-5 max-w-3xl text-text-muted">
            Les Coups de pouce peuvent concerner différents types d’actions
            d’efficacité énergétique selon les périodes réglementaires en
            vigueur. Parmi les dispositifs existants ou ayant existé figurent
            notamment&nbsp;:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dispositifs.map((d) => (
              <article
                key={d.title}
                className="rounded-[var(--radius)] border border-border bg-surface p-6"
              >
                <h3 className="font-display text-xl">{d.title}</h3>
                <p className="mt-3 text-text-muted">{d.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm text-text-muted">
            La liste des dispositifs disponibles évolue régulièrement en
            fonction des orientations fixées par les pouvoirs publics.
          </p>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Un accompagnement essentiel pour sécuriser vos projets
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Les conditions d’accès aux Coups de pouce CEE étant précisément
            encadrées, une analyse préalable est nécessaire afin de vérifier
            l’éligibilité des travaux réalisés et de constituer un dossier
            conforme aux exigences réglementaires.
          </p>
          <p className="mt-4 text-white/75">
            ECO INGENIERIE vous accompagne dans l’identification des dispositifs
            CEE adaptés à vos projets, la constitution de vos dossiers et la
            valorisation de vos économies d’énergie.
          </p>
          <Link href="/contact" className="btn btn-cta mt-10">
            Un expert vous rappelle
          </Link>
        </div>
      </section>
    </>
  );
}
