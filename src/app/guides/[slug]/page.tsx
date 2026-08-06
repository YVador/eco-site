import type { Metadata } from "next";
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
      "Un Certificat d’Économies d’Énergie atteste de la réalisation d’économies d’énergie suite à des travaux de rénovation énergétique.",
    sections: [
      {
        h: "À quoi servent les CEE ?",
        p: "Ils valorisent les actions d’économies d’énergie et permettent aux obligés de remplir leurs obligations réglementaires.",
      },
      {
        h: "Qui est concerné ?",
        p: "Entreprises, collectivités, fournisseurs d’énergie, bailleurs, installateurs et, dans certains cas, particuliers.",
      },
      {
        h: "Le rôle d’ECO INGENIERIE",
        p: "Nous structurons, contrôlons et valorisons vos dossiers pour maximiser vos primes en toute conformité.",
      },
    ],
  },
  "mandataire-cee-maprimerenov": {
    intro:
      "ECO INGENIERIE est mandataire CEE et MaPrimeRénov’. Nous aidons les bénéficiaires dans leurs démarches et l’avance de frais.",
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
        p: "Transmettez votre demande de prise en charge à notre bureau unique.",
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
