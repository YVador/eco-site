import type { Metadata } from "next";
import Image from "next/image";
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
    text: "Générer des CEE au profit de tiers, qu’ils soient obligés ou délégataires.",
  },
  {
    title: "L’accompagnement administratif",
    text: "Assister les entreprises bénéficiaires, fournisseurs et poseurs d’équipements favorisant les économies d’énergie, dans la structuration et la mise en valeur de leurs dossiers CEE.",
  },
  {
    title: "La gestion des mandats",
    text: "Être mandataire administratif et financier dans le cadre des CEE.",
  },
];

const mandats = [
  {
    title: "Mandataire administratif",
    text: "Nous guidons le bénéficiaire tout au long de sa démarche et lors de la préparation de son dossier.",
  },
  {
    title: "Mandataire financier",
    text: "Nous préfinançons le montant de l’aide en le soustrayant directement du devis des travaux. Le bénéficiaire n’a pas à avancer le coût initial ni à attendre un remboursement.",
  },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Qui sommes-nous ?</p>
            <h1 className="mt-3 font-display text-4xl md:text-6xl">
              ECO INGENIERIE, partenaire clé de la transition énergétique
            </h1>
            <p className="mt-6 text-lg text-text-muted">
              Nous facilitons la mise en relation entre les émetteurs et ceux
              qui souhaitent entreprendre des projets éco-responsables.
            </p>
            <p className="mt-4 text-text-muted">
              Notre expertise de 5 ans dans le secteur des CEE couvre les
              demandes du conseil à la mise en œuvre, pour une expérience fluide
              et efficace. Prise en charge simplifiée et rapide avec notre offre
              clé en main.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-cta">
                Un expert vous rappelle
              </Link>
              <Link href="/solutions" className="btn btn-ghost">
                Nos solutions
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-bg-soft">
            <Image
              src="/media/atelier.jpg"
              alt="ECO INGENIERIE — transition énergétique"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Notre rôle</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Une société dédiée au traitement accéléré de vos dossiers CEE
          </h2>
          <p className="mt-5 max-w-3xl text-lg text-text-muted">
            ECO INGENIERIE est un représentant officiel, bureau de vérification
            documentaire dédié à la conformité et à la valorisation de vos
            dossiers CEE.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {missions.map((m) => (
              <article key={m.title} className="border-t-2 border-accent pt-5">
                <h3 className="font-display text-xl md:text-2xl">{m.title}</h3>
                <p className="mt-3 text-text-muted">{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cta">
            Mandataire CEE
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Administratif et financier : on avance avec vous
          </h2>
          <p className="mt-5 max-w-2xl text-white/70">
            Notre rôle est d’aider les bénéficiaires dans leurs démarches et
            dans l’avance de frais.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {mandats.map((m) => (
              <div
                key={m.title}
                className="rounded-[var(--radius-lg)] border border-white/10 bg-white/[0.04] p-7"
              >
                <h3 className="font-display text-2xl text-cta">{m.title}</h3>
                <p className="mt-3 text-white/75">{m.text}</p>
              </div>
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
