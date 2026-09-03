import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Outils digitaux — Pixel IQ & Certificall",
  description:
    "Pixel IQ et Certificall : les outils digitaux ECO INGENIERIE pour piloter, certifier et valoriser vos dossiers CEE.",
};

export default function OutilsDigitauxPage() {
  return (
    <>
      <section className="border-b border-border bg-bg-muted py-14 md:py-20">
        <div className="container-site">
          <p className="eyebrow">Nos solutions</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl md:text-6xl">
            Outils digitaux : Pixel IQ et Certificall
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-text-muted">
            Deux solutions digitales pour accompagner la gestion, le contrôle et
            la valorisation de vos CEE au quotidien.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="eyebrow">Pixel IQ</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              La solution CRM pour les entreprises de rénovation énergétique
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              PIXEL CRM simplifie et centralise la gestion de vos dossiers pour
              fluidifier vos processus et améliorer votre performance au
              quotidien — de l’éligibilité au pilotage des opérations CEE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://crm-pixel.com/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-cta"
              >
                Découvrir Pixel IQ
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Un expert vous rappelle
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-sm)]">
            <Image
              src="/media/pixel-iq-banner.png"
              alt="Pixel IQ — CRM pour la rénovation énergétique"
              width={2048}
              height={688}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
        <div className="container-site mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-md)]">
          <Image
            src="/media/pixel-iq-dashboard.png"
            alt="Interface Pixel IQ — tableau de bord et dossiers CEE"
            width={2048}
            height={1083}
            className="h-auto w-full"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="section bg-bg-muted">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Certificall</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl">
              Certifiez vos chantiers CEE, en quelques clics
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
              Horodatez et géolocalisez vos opérations en toute confiance. Avec
              les photos certifiées, vous simplifiez le contrôle, luttez contre
              la fraude et garantissez la valorisation de vos CEE.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.certificall.app/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-cta"
              >
                Découvrir Certificall
              </a>
              <Link href="/contact" className="btn btn-ghost">
                Prendre contact avec nous
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-lg lg:max-w-none">
            <Image
              src="/media/certificall-app-visual.png"
              alt="Certificall — géolocalisation renforcée et détection de fraude par IA"
              width={768}
              height={897}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl">
              Une certification des données sans compromis
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
              Notre chaîne de certification garantit l’authenticité, l’intégrité
              et une force probante renforcée à toutes vos données&nbsp;: photos,
              vidéos et données GPS.
            </p>
            <Link href="/contact" className="btn btn-cta mt-10">
              Prendre contact avec nous
            </Link>
          </div>
          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/media/certificall-process-timeline.png"
              alt="Processus Certificall : 1. Capturez les photos — 2. Recevez votre certificat — 3. Présentez votre dossier"
              width={728}
              height={691}
              className="h-auto w-full"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
