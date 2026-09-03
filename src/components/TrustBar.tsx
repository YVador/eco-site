import { AnimatedCounter } from "@/components/AnimatedCounter";
import { trustItems } from "@/data/site";

const stats = [
  {
    value: 5,
    suffix: " ans",
    label: "d’expertise CEE",
    detail: "Conseil, dossiers et valorisation",
  },
  {
    value: 3,
    suffix: " TWhc",
    label: "primes valorisées",
    detail: "Volume cumulé accompagné",
  },
  {
    value: 24.5,
    suffix: " M€",
    label: "primes versées",
    decimals: 1,
    detail: "Valorisation financière pour nos partenaires",
  },
  {
    value: 1,
    suffix: "",
    label: "interlocuteur dédié",
    detail: "Guichet unique, suivi personnalisé",
  },
] as const;

type ProofStripProps = {
  /** Version courte pour pages intérieures */
  compact?: boolean;
};

export function ProofStrip({ compact = false }: ProofStripProps) {
  if (compact) {
    return (
      <div className="border-y border-border bg-bg-muted" aria-label="Réassurance">
        <div className="container-site">
          <ul className="flex gap-6 overflow-x-auto py-4 text-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-between">
            {trustItems.slice(0, 5).map((item) => (
              <li
                key={item.short}
                className="flex shrink-0 items-center gap-2 whitespace-nowrap text-text-muted"
              >
                <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
                {item.short}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <section
      className="relative overflow-hidden bg-bg-inverse text-white"
      aria-label="Preuves et chiffres clés"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,96,176,0.22),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cta/40 to-transparent"
        aria-hidden
      />

      <div className="container-site relative py-14 md:py-16 lg:py-20">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cta">
              Pourquoi nous faire confiance
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl md:text-4xl lg:text-[2.75rem]">
              Des preuves concrètes, pas des promesses floues.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/55 md:text-right">
            Mandataire CEE — contrôle documentaire, suivi dédié, primes
            traitées sans friction.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-lg)] border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-bg-inverse px-5 py-8 md:px-7 md:py-10"
            >
              <p className="font-display text-4xl leading-none text-cta md:text-5xl lg:text-[3.25rem]">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals : 0}
                />
              </p>
              <p className="mt-4 text-sm font-semibold capitalize tracking-tight text-white md:text-base">
                {stat.label}
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-white/45 md:text-sm">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Alias pour les pages qui importaient encore TrustBar */
export function TrustBar({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <ProofStrip compact={compact} />
    </div>
  );
}
