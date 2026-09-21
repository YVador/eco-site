import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinancedWorks } from "@/components/FinancedWorks";
import {
  IconBadge,
  IconCheck,
  IconShield,
  IconSupport,
  IconTruck,
} from "@/components/Icons";
import { MethodSteps } from "@/components/MethodSteps";
import { ProofStrip } from "@/components/TrustBar";
import { Reveal } from "@/components/Reveal";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import {
  audiences,
  comparisonLabels,
  comparisonRows,
  faqHome,
  guides,
  navAudiences,
  site,
  testimonials,
} from "@/data/site";

const whyItems = [
  {
    icon: IconShield,
    title: "Expertise dédiée",
    text: "Spécialistes CEE : savoir-faire sur chaque projet.",
  },
  {
    icon: IconSupport,
    title: "Guichet unique",
    text: "Un point de contact central pour simplifier vos démarches.",
  },
  {
    icon: IconBadge,
    title: "Interlocuteur privilégié",
    text: "Un chargé de mission dédié, accompagnement personnalisé.",
  },
  {
    icon: IconCheck,
    title: "Contrôle rigoureux",
    text: "Conformité et qualité de chaque dossier documentaire.",
  },
  {
    icon: IconTruck,
    title: "Rapidité & efficacité",
    text: "Obtenez rapidement vos primes pour travaux éligibles.",
  },
];

export default function HomePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqHome.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="relative -mt-[4.25rem] min-h-svh overflow-hidden text-white">
        <div className="absolute inset-0">
          <video
            className="hero-media absolute inset-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/media/hero.jpg"
            aria-hidden
          >
            <source
              src="/media/AdobeStock_1554334214.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,22,40,0.92)_0%,rgba(11,22,40,0.72)_45%,rgba(11,22,40,0.35)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,96,176,0.28),transparent_55%)]"
          aria-hidden
        />

        <div className="container-site relative flex min-h-svh flex-col justify-center py-20 pt-28 md:py-28 md:pt-32">
          <h1 className="fade-up max-w-[24ch] font-display text-[2.4rem] leading-[0.98] md:text-4xl lg:text-[3.15rem]">
            Vous réalisez les travaux.
            <br />
            Nous valorisons vos primes CEE.
          </h1>
          <p className="fade-up-delay-2 mt-7 max-w-3xl text-base leading-relaxed text-white/88 md:text-xl">
            ECO INGENIERIE accompagne les installateurs et les collectivités dans le montage   
            <br /> 
            la conformité et le dépôt de leurs dossiers CEE. Nous vous aidons à sécuriser vos dossiers et à bénéficier d'une valorisation compétitive de vos primes.
          </p>
          <ul className="fade-up-delay-2 mt-8 flex flex-col gap-2.5 text-sm font-medium text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Mandataire CEE
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Préfinancement des primes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Montage et conformité des dossiers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Valorisation compétitive
            </li>
          </ul>
          <div className="fade-up-delay-3 mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn btn-cta text-base px-8 py-4">
              Un expert vous rappelle
            </Link>
            <Link
              href="/solutions"
              className="btn btn-ghost border-white/35 text-base px-8 py-4 text-white hover:border-white hover:bg-white/10"
            >
              Nos solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] bg-bg-muted md:aspect-[4/3]">
              <Image
                src="/media/batiment1.png"
                alt="ECO INGENIERIE — partenaire de la transition énergétique"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="eyebrow">Qui sommes-nous ?</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Votre partenaire CEE, de la réalisation des travaux au versement de la prime
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                ECO INGENIERIE accompagne les installateurs et collectivités dans le montage, 
                le contrôle et le dépôt de leurs dossiers. Notre rôle : simplifier vos démarches, 
                sécuriser vos opérations et vous permettre de bénéficier d’une valorisation compétitive de vos primes CEE.              
              </p>
              <p className="mt-4 text-text-muted">
                Notre expertise de 5 ans dans le secteur des CEE couvre les
                demandes du conseil à la mise en œuvre, pour une expérience
                efficace. De la constitution du dossier jusqu’à son financement, 
                vous bénéficiez de notre expertise, d’un accompagnement personnalisé et d’un interlocuteur unique.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm font-medium">
                {[
                  "Montage et suivi de vos dossiers CEE",
                  "Contrôle et sécurisation des pièces justificatives",
                  "Préfinancement et valorisation de vos primes",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/qui-sommes-nous" className="btn btn-primary">
                  En savoir plus
                </Link>
                <Link href="/contact" className="btn btn-ghost">
                  Un expert vous rappelle
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ProofStrip />

      <section id="pour-qui" className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Vous êtes ?</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl">
              À qui s’adresse notre expertise CEE ?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              Public ou privé, grand ou petit : maximisez la valeur de vos
              initiatives d’économies d’énergie.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {navAudiences.map((slug, i) => {
              const audience = audiences.find((a) => a.slug === slug)!;
              return (
                <Reveal key={audience.slug} delay={i * 60}>
                  <Link
                    href={`/pour-qui/${audience.slug}`}
                    className="group relative block min-h-[300px] overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] md:min-h-[340px]"
                  >
                    <Image
                      src={audience.image}
                      alt={audience.title}
                      fill
                      className="object-cover transition duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-inverse via-bg-inverse/45 to-bg-inverse/10" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                      <h3 className="font-display text-2xl md:text-3xl">
                        {audience.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">
                        {audience.description}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Solutions</p>
                <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl">
                  Les travaux suivants peuvent être financés
                </h2>
                <p className="mt-4 max-w-lg text-lg text-text-muted">
                  Isolation, chauffage, ventilation, rénovation globale… des
                  gestes éligibles CEE que nous vous aidons à valoriser.
                </p>
              </div>
              <Link href="/fiches-cee" className="btn btn-primary shrink-0">
                Voir les fiches CEE
              </Link>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <FinancedWorks />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Confiance</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
              Un partenaire unique pour une gestion complète
            </h2>
            <p className="mt-5 max-w-xl text-lg text-text-muted">
              Partenaire clé de la transition énergétique et de la valorisation
              de vos CEE.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {whyItems.map((item, i) => {
              const span = i < 3 ? "lg:col-span-2" : "lg:col-span-3";
              return (
                <Reveal key={item.title} delay={i * 50} className={span}>
                  <div className="card-surface h-full p-6">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-[var(--radius-sm)] bg-accent/10 text-accent">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-display text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal>
            <Link href="/qui-sommes-nous" className="btn btn-primary mt-12">
              Qui sommes-nous ?
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow !text-cta">Comparatif</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl md:text-5xl lg:text-6xl">
              {comparisonLabels.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/70">
              Clé en main vs gestion seule — ce qui change vraiment.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-12 overflow-hidden rounded-[var(--radius-lg)] border border-white/10">
              <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-white/5 text-sm font-semibold md:text-base">
                <div className="border-b border-white/10 p-4 md:p-5" />
                <div className="border-b border-l border-white/10 bg-accent/20 p-4 text-center text-cta md:p-5">
                  {comparisonLabels.left}
                </div>
                <div className="border-b border-l border-white/10 p-4 text-center text-white/60 md:p-5">
                  {comparisonLabels.right}
                </div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1.2fr_1fr_1fr] border-b border-white/10 last:border-b-0"
                >
                  <div className="p-4 text-sm text-white/70 md:p-5 md:text-base">
                    {row.label}
                  </div>
                  <div className="border-l border-white/10 bg-accent/10 p-4 text-center text-sm font-semibold md:p-5 md:text-base">
                    {row.withUs}
                  </div>
                  <div className="border-l border-white/10 p-4 text-center text-sm text-white/55 md:p-5 md:text-base">
                    {row.withoutUs}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Notre méthode</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl">
              Du dépôt de demande au paiement de la prime
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              Un seul interlocuteur, cinq étapes, un dossier sécurisé.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <MethodSteps />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Les CEE</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Comprendre les CEE et notre rôle
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {guides.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 80}>
                <article className="card-surface flex h-full flex-col overflow-hidden">
                  <div className="relative aspect-[16/10] bg-bg-soft">
                    <Image
                      src={guide.image}
                      alt=""
                      fill
                      loading="eager"
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-text-muted">
                      <span className="text-accent">{guide.category}</span>
                      <span>·</span>
                      <span>{guide.readTime}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl leading-snug">
                      {guide.title}
                    </h3>
                    <p className="mt-3 flex-1 text-text-muted">{guide.excerpt}</p>
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="btn btn-ghost mt-6 self-start"
                    >
                      Lire l’article
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Témoignages</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
              Partenaire exigeant
            </h2>
          </Reveal>
          <div className="mt-12">
            <Reveal>
              <TestimonialsSlider items={[...testimonials]} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              Questions fréquentes
            </h2>
          </Reveal>
          <div className="mt-10">
            <Reveal>
              <FaqAccordion items={faqHome} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-bg-inverse text-white">
        <div className="container-site max-w-3xl">
          <Reveal>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
              Prenez contact avec nous
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/75">
              Envoyez une demande d’information ou orientez votre projet CEE.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contact" className="btn btn-cta">
                Un expert vous rappelle
              </Link>
              <a
                href={site.phoneHref}
                className="text-white/75 transition hover:text-cta"
              >
                ou appeler le {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
