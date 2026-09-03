import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

const bodies: Record<
  string,
  { intro: string; sections: { h: string; p: string }[] }
> = {
  "quest-ce-quun-cee": {
    intro:
      "Qu’est-ce que le dispositif des Certificats d’Économies d’Énergie (CEE) ?",
    sections: [
      {
        h: "Un levier majeur pour la performance énergétique",
        p: "Le dispositif des Certificats d’Économies d’Énergie (CEE), également appelé « primes CEE » ou « primes énergie », constitue un levier majeur pour financer les actions en faveur de la performance énergétique. Créé dans le cadre de la loi POPE (Programme fixant les Orientations de la Politique Énergétique) du 13 juillet 2005, ce mécanisme a pour objectif d’encourager la réduction des consommations d’énergie sur l’ensemble du territoire.",
      },
      {
        h: "Les obligations des fournisseurs d’énergie",
        p: "Depuis 2006, l’État impose aux fournisseurs d’énergie et de carburants, appelés « Obligés », de contribuer activement à la réalisation d’économies d’énergie. Ces acteurs doivent atteindre des objectifs réglementaires précis sous peine de sanctions financières. Pour remplir leurs obligations, ils peuvent financer des travaux d’amélioration énergétique réalisés sur leurs propres installations, mais également auprès des particuliers, des entreprises et des collectivités.",
      },
      {
        h: "Des primes pour accélérer la rénovation",
        p: "Les économies d’énergie générées par ces travaux sont ensuite valorisées sous forme de primes CEE, également connues sous les appellations « éco-primes », « primes énergie » ou « primes éco-énergie ». Véritable outil d’accompagnement financier, le dispositif CEE permet aux entreprises et aux collectivités d’accélérer leurs projets de rénovation énergétique. Il facilite l’investissement dans des équipements plus performants, contribue à réduire les consommations d’énergie et permet ainsi de diminuer durablement les dépenses énergétiques.",
      },
      {
        h: "Le rôle d’ECO INGENIERIE",
        p: "Nous structurons, contrôlons et valorisons vos dossiers pour maximiser vos primes en toute conformité — du cadrage à l’obtention de la prime.",
      },
    ],
  },
  "mandataire-cee": {
    intro:
      "ECO INGENIERIE est mandataire CEE. Nous aidons les bénéficiaires dans leurs démarches et l’avance de frais.",
    sections: [
      {
        h: "Mandataire administratif",
        p: "Nous guidons le bénéficiaire tout au long de la démarche et de la préparation du dossier.",
      },
      {
        h: "Mandataire financier",
        p: "Nous préfinançons le montant de l’aide en le soustrayant du devis : pas d’avance puis remboursement.",
      },
      {
        h: "Bénéfice concret",
        p: "Vos travaux avancent plus vite, avec un risque administratif réduit et une trésorerie préservée.",
      },
    ],
  },
  "valoriser-ses-cee": {
    intro:
      "Du dépôt à la prime : un parcours en 4 étapes avec ECO INGENIERIE.",
    sections: [
      {
        h: "1. Dépôt de demande",
        p: "Transmettez votre demande de prise en charge à notre équipe.",
      },
      {
        h: "2. Prise de contact",
        p: "Un interlocuteur dédié prend en charge votre dossier.",
      },
      {
        h: "3. Envoi auprès de l’obligé",
        p: "Nous déposons le dossier CEE conforme.",
      },
      {
        h: "4. Paiement de la prime",
        p: "Une fois traité, nous procédons au paiement rapide de la prime.",
      },
    ],
  },
};

export async function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide" };
  return { title: guide.title, description: guide.excerpt };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);
  const body = bodies[slug];
  if (!guide || !body) notFound();

  return (
    <article className="section">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">
          {guide.category} · {guide.readTime}
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">{guide.title}</h1>
        <p className="mt-6 text-lg text-text-muted">{body.intro}</p>
        {slug === "quest-ce-quun-cee" && (
          <figure className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
            <Image
              src="/media/acteurs-cee.png"
              alt="Les acteurs des CEE : un écosystème engagé pour la transition énergétique"
              width={1650}
              height={953}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <figcaption className="border-t border-border px-4 py-3 text-sm text-text-muted">
              Les acteurs des CEE — ECO INGENIERIE, mandataire auprès des
              Obligés.
            </figcaption>
          </figure>
        )}
        <div className="mt-10 space-y-8">
          {body.sections.map((s) => (
            <section key={s.h}>
              <h2 className="font-display text-2xl">{s.h}</h2>
              <p className="mt-3 text-text-muted">{s.p}</p>
            </section>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8">
          <Link href="/demande" className="btn btn-cta">
            Orienter ma demande
          </Link>
          <Link href="/guides" className="ml-4 text-sm text-text-muted underline">
            Tous les articles
          </Link>
        </div>
      </div>
    </article>
  );
}
