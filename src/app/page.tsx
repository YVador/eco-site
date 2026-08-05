import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Logo } from "@/components/Logo";
import {
  IconBadge,
  IconBluetooth,
  IconCheck,
  IconCycle,
  IconEv,
  IconShield,
  IconSolar,
  IconSupport,
  IconTruck,
  IconVan,
} from "@/components/Icons";
import { ProductCard } from "@/components/ProductCard";
import { ProofStrip } from "@/components/TrustBar";
import { Reveal } from "@/components/Reveal";
import { TestimonialsSlider } from "@/components/TestimonialsSlider";
import { getBestsellers } from "@/data/products";
import {
  audiences,
  comparisonLabels,
  comparisonRows,
  faqHome,
  guides,
  site,
  testimonials,
  timeline,
} from "@/data/site";

const audienceIcons = {
  van: IconVan,
  boat: IconSolar,
  solar: IconSolar,
  ev: IconEv,
  portable: IconSupport,
  badge: IconBadge,
  shield: IconShield,
  check: IconCheck,
};

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
    icon: IconBluetooth,
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
  {
    icon: IconCycle,
    title: "Veille réglementaire",
    text: "Restez informé des réglementations et bonnes pratiques.",
  },
  {
    icon: IconBadge,
    title: "ISO 9001 / COFRAC",
    text: "Bureau de vérification documentaire certifié.",
  },
  {
    icon: IconSolar,
    title: "CEE & MaPrimeRénov’",
    text: "Mandataire administratif et financier.",
  },
];

export default function HomePage() {
  const bestsellers = getBestsellers(4);

  return (
    <>
      <section className="relative min-h-[calc(100svh-4rem)] overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=2200&q=80"
            alt="Transition énergétique et bâtiments éco-responsables"
            fill
            priority
            className="hero-media object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div
          className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,18,16,0.92)_0%,rgba(10,18,16,0.72)_45%,rgba(10,18,16,0.35)_100%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(26,122,82,0.22),transparent_55%)]"
          aria-hidden
        />

        <div className="container-site relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-20 md:py-28">
          <div className="fade-up">
            <Logo height={72} priority className="max-h-[4.5rem] drop-shadow-lg" />
          </div>
          <h1 className="fade-up-delay mt-6 max-w-[16ch] font-display text-[2.6rem] leading-[0.98] md:text-6xl lg:text-[4.75rem]">
            Unis dans la mission d’une transition énergétique rapide
          </h1>
          <p className="fade-up-delay-2 mt-7 max-w-xl text-base leading-relaxed text-white/88 md:text-xl">
            Illuminez l’avenir avec des bâtiments éco-responsables. Faites la
            différence avec ECO INGENIERIE — votre bureau unique pour les CEE.
          </p>
          <ul className="fade-up-delay-2 mt-8 flex flex-col gap-2.5 text-sm font-medium text-white/90 sm:flex-row sm:flex-wrap sm:gap-x-8">
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Offre clé en main
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Mandataire CEE & MaPrimeRénov’
            </li>
            <li className="flex items-center gap-2">
              <span className="text-cta">✓</span> Paiement rapide des primes
            </li>
          </ul>
          <div className="fade-up-delay-3 mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/solutions" className="btn btn-cta text-base px-8 py-4">
              Nos solutions
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/75 transition hover:text-white"
            >
              Contactez-nous →
            </Link>
          </div>
        </div>
      </section>

      <ProofStrip />

      <section id="pour-qui" className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Pour qui</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl">
              À qui s’adresse notre expertise CEE ?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
              Public ou privé, grand ou petit : maximisez la valeur de vos
              initiatives d’économies d’énergie.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience, i) => {
              const Icon = audienceIcons[audience.icon] ?? IconCheck;
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
                      <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cta backdrop-blur-sm">
                        <Icon className="h-5 w-5" />
                      </span>
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

      <section className="section bg-bg-muted">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Solutions</p>
                <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl">
                  Solutions clés en main pour vos CEE
                </h2>
                <p className="mt-4 max-w-lg text-lg text-text-muted">
                  ECO INGENIERIE, votre bureau unique pour les prises en charge.
                </p>
              </div>
              <Link href="/solutions" className="btn btn-primary shrink-0">
                Voir toutes les solutions
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((product, i) => (
              <Reveal key={product.slug} delay={i * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
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
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
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
            ))}
          </div>
          <Reveal>
            <Link href="/a-propos" className="btn btn-primary mt-12">
              En savoir plus
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
                    {row.lithium}
                  </div>
                  <div className="border-l border-white/10 p-4 text-center text-sm text-white/55 md:p-5 md:text-base">
                    {row.agm}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-site">
          <Reveal>
            <p className="eyebrow">Parcours</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl lg:text-6xl">
              Du dépôt de demande au paiement de la prime
            </h2>
            <p className="mt-5 max-w-xl text-lg text-text-muted">
              Quatre étapes simples, un accompagnement jusqu’à la valorisation.
            </p>
          </Reveal>

          <div className="relative mt-16">
            <div
              className="absolute left-[1.15rem] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px"
              aria-hidden
            />
            <ol className="space-y-10 md:space-y-16">
              {timeline.map((item, i) => {
                const left = i % 2 === 0;
                return (
                  <Reveal key={item.step}>
                    <li className="relative grid gap-6 md:grid-cols-2 md:gap-12">
                      <div className="absolute left-[1.15rem] z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-bg text-xs font-bold text-accent md:left-1/2">
                        {item.step}
                      </div>
                      <div
                        className={`${left ? "md:col-start-1 md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"} pl-14 md:pl-0`}
                      >
                        <h3 className="font-display text-2xl md:text-3xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-text-muted">{item.text}</p>
                      </div>
                      <div
                        className={`relative ml-14 aspect-[16/10] overflow-hidden rounded-[var(--radius)] shadow-[var(--shadow-md)] md:ml-0 ${
                          left
                            ? "md:col-start-2 md:row-start-1"
                            : "md:col-start-1 md:row-start-1"
                        }`}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          loading="eager"
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section className="section bg-bg-muted">
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
              Envoyez une demande d’information ou demandez votre simulation
              CEE.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/simulation" className="btn btn-cta">
                Demander votre simulation
              </Link>
              <Link
                href="/contact"
                className="text-white/75 transition hover:text-cta"
              >
                ou écrire à {site.email}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
