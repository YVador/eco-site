import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { guides } from "@/data/site";

export const metadata: Metadata = {
  title: "Les CEE",
  description:
    "Comprendre le dispositif des Certificats d’Économies d’Énergie : éligibilité, Coups de pouce, Obligés et rôle d’ECO INGENIERIE.",
};

const sectors = [
  {
    title: "Secteur tertiaire",
    text: "Travaux d’isolation, installation de pompes à chaleur, mise en place d’un système de Gestion Technique du Bâtiment (GTB), amélioration des équipements énergétiques, etc.",
  },
  {
    title: "Secteur industriel",
    text: "Systèmes de récupération de chaleur, installation de variateurs de vitesse, remplacement par des chaudières plus performantes, optimisation des procédés industriels, etc.",
  },
  {
    title: "Secteur agriculture",
    text: "Dispositif de stockage d’eau chaude de type open buffer, chaudière à haute performance énergétique pour serres.",
  },
  {
    title: "Secteur résidentiel",
    text: "Pompe à chaleur type Air/Air, isolation de combles ou de toiture.",
  },
] as const;

export default function GuidesPage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Les CEE</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Qu’est-ce que le dispositif des Certificats d’Économies d’Énergie
            (CEE)&nbsp;?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-muted">
            Le dispositif des Certificats d’Économies d’Énergie (CEE), également
            appelé «&nbsp;primes CEE&nbsp;» ou «&nbsp;primes énergie&nbsp;»,
            constitue un levier majeur pour financer les actions en faveur de la
            performance énergétique. Créé dans le cadre de la loi POPE
            (Programme fixant les Orientations de la Politique Énergétique) du
            13 juillet 2005, ce mécanisme a pour objectif d’encourager la
            réduction des consommations d’énergie sur l’ensemble du territoire.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Depuis 2006, l’État impose aux fournisseurs d’énergie et de
            carburants, appelés «&nbsp;Obligés&nbsp;», de contribuer activement
            à la réalisation d’économies d’énergie. Ces acteurs doivent
            atteindre des objectifs réglementaires précis sous peine de
            sanctions financières. Pour remplir leurs obligations, ils peuvent
            financer des travaux d’amélioration énergétique réalisés sur leurs
            propres installations, mais également auprès des particuliers, des
            entreprises et des collectivités.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Les économies d’énergie générées par ces travaux sont ensuite
            valorisées sous forme de primes CEE, également connues sous les
            appellations «&nbsp;éco-primes&nbsp;», «&nbsp;primes énergie&nbsp;»
            ou «&nbsp;primes éco-énergie&nbsp;». Véritable outil
            d’accompagnement financier, le dispositif CEE permet aux entreprises
            et aux collectivités d’accélérer leurs projets de rénovation
            énergétique. Il facilite l’investissement dans des équipements plus
            performants, contribue à réduire les consommations d’énergie et
            permet ainsi de diminuer durablement les dépenses énergétiques.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/fiches-cee" className="btn btn-primary">
              Voir toutes les fiches CEE
            </Link>
            <Link href="/coup-de-pouce" className="btn btn-ghost">
              Coups de pouce CEE
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Éligibilité</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Vos opérations sont-elles éligibles aux primes CEE&nbsp;?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-muted">
            Les entreprises des secteurs tertiaire, industriel et agricole, ainsi
            que les collectivités, peuvent bénéficier des primes CEE lorsqu’elles
            réalisent des travaux permettant de réduire leur consommation
            énergétique et répondant aux critères définis par les fiches
            d’opérations standardisées.
          </p>
          <p className="mt-4 max-w-3xl text-text-muted">
            Plus de 250 types d’opérations peuvent aujourd’hui être éligibles au
            dispositif, parmi lesquelles&nbsp;:
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {sectors.map((s) => (
              <article
                key={s.title}
                className="border-t-2 border-accent pt-5"
              >
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-text-muted">{s.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 max-w-3xl space-y-4 text-text-muted">
            <p>
              Afin de simplifier l’accès au dispositif, des fiches d’opérations
              standardisées sont publiées par arrêté ministériel. Classées par
              secteur d’activité (bâtiments résidentiels, tertiaires,
              industriels, agricoles, transports et réseaux), elles permettent
              de déterminer un volume forfaitaire d’économies d’énergie associé
              aux investissements les plus courants.
            </p>
            <p>
              Lorsque les travaux réalisés ne correspondent pas à une opération
              standardisée, ils peuvent relever d’opérations spécifiques
              nécessitant une étude et une procédure particulière.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site max-w-3xl">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cta">
            Les Coups de pouce CEE
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Des bonifications pour accélérer certaines opérations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Dans le cadre du dispositif des Certificats d’Économies d’Énergie,
            certains types d’opérations peuvent faire l’objet de bonifications
            appelées «&nbsp;Coups de pouce&nbsp;». Ces dispositifs s’inscrivent
            dans le mécanisme des CEE et ont pour objectif d’encourager la
            réalisation de certaines opérations d’économies d’énergie en
            renforçant leur valorisation.
          </p>
          <p className="mt-4 text-white/75">
            Les Coups de pouce sont définis par des textes réglementaires et des
            chartes d’engagement qui précisent notamment les opérations
            concernées, les conditions d’éligibilité et les modalités de
            bonification associées. Ils s’appliquent à des opérations relevant
            du dispositif CEE et viennent compléter les fiches d’opérations
            standardisées lorsqu’un cadre spécifique est prévu.
          </p>
          <Link href="/coup-de-pouce" className="btn btn-cta mt-10">
            En savoir plus sur les Coups de pouce
          </Link>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Cadre réglementaire</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">
            Un dispositif soutenu par le Gouvernement
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-text-muted">
            <p>
              Le dispositif des Certificats d’Économies d’Énergie s’inscrit dans
              une démarche gouvernementale visant à accélérer la transition
              énergétique tout en encourageant les acteurs publics et privés à
              réduire leur consommation d’énergie.
            </p>
            <p>
              Les fournisseurs d’énergie, également appelés «&nbsp;Obligés&nbsp;»,
              ont pour mission de démontrer leur engagement en faveur de
              l’efficacité énergétique en finançant des actions permettant de
              générer des économies d’énergie.
            </p>
            <p>
              Afin d’encadrer ce mécanisme, le Pôle National des Certificats
              d’Économies d’Énergie (PNCEE) définit des règles précises ainsi que
              des critères d’éligibilité à travers des fiches d’opérations
              standardisées.
            </p>
            <p>
              Le dispositif fonctionne par périodes d’obligation successives de
              quatre ans. À la fin de chaque période, les Obligés doivent
              justifier du respect de leurs engagements en présentant les
              certificats obtenus grâce aux actions financées.
            </p>
            <p>
              L’unité de mesure utilisée pour quantifier les économies d’énergie
              est le <strong className="text-text">kWh cumac</strong> («&nbsp;cumulés
              et actualisés&nbsp;»). Un Certificat d’Économie d’Énergie
              correspond ainsi à 1&nbsp;kWh cumac d’énergie économisée.
            </p>
            <p>
              Depuis sa création, le dispositif CEE a permis de financer de
              nombreux projets d’efficacité énergétique. À l’issue de la
              quatrième période (2018-2021), plus de 2&nbsp;134&nbsp;TWh cumac
              d’économies d’énergie ont été générés, dont une part significative
              dédiée à l’accompagnement des ménages en situation de précarité
              énergétique.
            </p>
            <p>
              Fort de ces résultats, le Gouvernement a prolongé le dispositif
              avec une cinquième période couvrant les années 2022 à 2025,
              confirmant ainsi son rôle central dans la transition énergétique.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <p className="eyebrow">Écosystème</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl md:text-5xl">
            Les acteurs des CEE
          </h2>
          <p className="mt-4 max-w-2xl text-text-muted">
            Un écosystème engagé pour la transition énergétique — d’ECO
            INGENIERIE aux Obligés, en passant par le PNCEE et les
            consommateurs finaux.
          </p>
          <figure className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-sm)]">
            <Image
              src="/media/acteurs-cee.png"
              alt="Les acteurs des CEE : Autorité administrative, PNCEE, Acteurs éligibles, Acteurs obligés, Registre EMMY, C2E Market et consommateurs finaux"
              width={1650}
              height={953}
              className="h-auto w-full"
              sizes="(max-width: 1200px) 100vw, 1100px"
              priority
            />
            <figcaption className="border-t border-border px-5 py-4 text-sm text-text-muted">
              Schéma des acteurs du dispositif CEE — ECO INGENIERIE intervient
              comme mandataire auprès des Obligés.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site">
          <p className="eyebrow">Pour aller plus loin</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">
            Guides & parcours
          </h2>
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
                  <h3 className="mt-3 font-display text-2xl">{guide.title}</h3>
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
    </>
  );
}
