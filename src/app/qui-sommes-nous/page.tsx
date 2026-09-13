import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description:
    "ECO INGENIERIE, partenaire clé de la transition énergétique et de la valorisation de vos CEE. Expertise, offre clé en main, mandats CEE.",
};

const valeurs = [
  {
    title: "Expertise dédiée",
    text: "Spécialistes du domaine des CEE, nous apportons notre savoir-faire à chaque projet, du conseil à la mise en œuvre.",
  },
  {
    title: "Guichet unique",
    text: "Un point de contact central pour simplifier vos démarches et accélérer le traitement de vos dossiers.",
  },
  {
    title: "Interlocuteur privilégié",
    text: "Un chargé de mission dédié vous accompagne de façon personnalisée tout au long du parcours.",
  },
  {
    title: "Contrôle rigoureux",
    text: "Conformité et qualité de chaque dossier, avec une vérification documentaire exigeante.",
  },
  {
    title: "Rapidité & efficacité",
    text: "Obtenez rapidement vos primes pour les travaux éligibles, grâce à nos process et nos relations sectorielles.",
  },
  {
    title: "Veille réglementaire",
    text: "Restez aligné sur les dernières réglementations et bonnes pratiques grâce à notre suivi permanent.",
  },
];

const missions = [
  {
    title: "La délégation des CEE",
    text: "Produire des CEE pour le compte d’obligés ou de délégataires.",
  },
  {
    title: "L’accompagnement administratif",
    text: "Assister les acteurs favorisant des économies d’énergie, dans le montage et la conformité des dossiers CEE.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Notre rôle</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Une société dédiée au traitement accéléré de vos dossiers CEE
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-text-muted">
            ECO INGENIERIE vous accompagne à chaque étape de la demande prime
            CEE, de l’identification des gisements jusqu’à l’obtention de la
            prime CEE.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {missions.map((m) => (
              <article key={m.title} className="border-t-2 border-accent pt-5">
                <h2 className="font-display text-xl md:text-2xl">{m.title}</h2>
                <p className="mt-3 text-text-muted">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Notre approche</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Un partenaire unique pour une gestion complète et simplifiée
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valeurs.map((v) => (
              <article
                key={v.title}
                className="rounded-[var(--radius)] border border-border bg-surface p-6"
              >
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">
                  {v.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">Nous contacter</h2>
          <p className="mt-4 text-text-muted">
            {site.address}
            <br />
            {site.email} · {site.hours}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta">
              Un expert vous rappelle
            </Link>
            <Link href="/certifications" className="btn btn-ghost">
              Voir nos certifications
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
