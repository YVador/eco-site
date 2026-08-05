"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, type AudienceSlug } from "@/data/products";

const steps = [
  {
    key: "usage",
    title: "Vous êtes ?",
    options: [
      { value: "entreprises-emettrices", label: "Entreprise émettrice" },
      { value: "fournisseurs-energie", label: "Fournisseur d’énergie" },
      { value: "collectivites", label: "Collectivité locale" },
      { value: "bailleurs-sociaux", label: "Bailleur social" },
      { value: "installateurs-artisans", label: "Installateur / artisan" },
      { value: "particuliers", label: "Particulier" },
    ],
  },
  {
    key: "need",
    title: "Votre besoin principal ?",
    options: [
      { value: "prise-en-charge", label: "Prise en charge CEE clé en main" },
      { value: "mandat", label: "Mandat administratif / financier" },
      { value: "delegation", label: "Délégation de CEE" },
      { value: "info", label: "Information / simulation" },
    ],
  },
  {
    key: "options",
    title: "Priorité ?",
    options: [
      { value: "speed", label: "Rapidité de prime" },
      { value: "conformite", label: "Conformité & contrôle" },
      { value: "finance", label: "Préfinancement" },
      { value: "none", label: "Accompagnement global" },
    ],
  },
] as const;

export default function SimulationPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= steps.length;

  const results = useMemo(() => {
    if (!done) return [];
    const usage = answers.usage as AudienceSlug;
    let list = products.filter((p) => p.usages.includes(usage));

    if (answers.need === "mandat") {
      list = list.filter((p) => p.slug.includes("mandat"));
    }
    if (answers.need === "delegation") {
      list = list.filter((p) => p.slug.includes("delegation"));
    }
    if (answers.options === "finance") {
      list = list.filter((p) => p.slug.includes("financier") || p.slug.includes("mandat"));
    }
    if (list.length === 0) {
      list = products.filter((p) => p.usages.includes(usage));
    }
    return list.slice(0, 3);
  }, [answers, done]);

  function select(value: string) {
    const key = steps[step].key;
    setAnswers({ ...answers, [key]: value });
    setStep((s) => s + 1);
  }

  return (
    <section className="section">
      <div className="container-site max-w-3xl">
        <p className="eyebrow">Simulation</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">
          Demandez votre simulation
        </h1>
        <p className="mt-4 text-text-muted">
          3 questions pour orienter votre demande CEE — sans engagement.
        </p>

        {!done ? (
          <div className="mt-10">
            <p className="text-sm text-text-muted">
              Étape {step + 1} / {steps.length}
            </p>
            <h2 className="mt-2 font-display text-2xl md:text-3xl">
              {steps[step].title}
            </h2>
            <div className="mt-6 grid gap-3">
              {steps[step].options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => select(opt.value)}
                  className="rounded-[var(--radius)] border border-border bg-surface px-5 py-4 text-left font-medium transition hover:border-accent"
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <h2 className="font-display text-2xl md:text-3xl">
              Solutions recommandées
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {results.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => {
                  setAnswers({});
                  setStep(0);
                }}
              >
                Recommencer
              </button>
              <Link href="/contact" className="btn btn-cta">
                Envoyer une demande
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
