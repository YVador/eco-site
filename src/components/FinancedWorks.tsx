import Link from "next/link";

const works = [
  {
    id: "murs",
    title: "Isolation des murs (ITE / ITI)",
    href: "/fiches-cee",
    icon: IconWalls,
  },
  {
    id: "combles",
    title: "Isolation des combles",
    href: "/fiches-cee",
    icon: IconAttic,
  },
  {
    id: "toitures",
    title: "Isolation des toitures-terrasses",
    href: "/fiches-cee",
    icon: IconFlatRoof,
  },
  {
    id: "planchers",
    title: "Isolation des planchers bas",
    href: "/fiches-cee",
    icon: IconFloor,
  },
  {
    id: "pac",
    title: "Installation d’une PAC",
    href: "/fiches-cee",
    icon: IconHeatPump,
  },
  {
    id: "reseau",
    title: "Raccordement à un réseau de chaleur",
    href: "/fiches-cee",
    icon: IconHeatNetwork,
  },
  {
    id: "reno",
    title: "Rénovation globale",
    href: "/fiches-cee",
    icon: IconToolbox,
  },
  {
    id: "vmc",
    title: "VMC",
    href: "/fiches-cee",
    icon: IconVmc,
  },
  {
    id: "recup",
    title: "Récupération de chaleur",
    href: "/fiches-cee",
    icon: IconHeatRecovery,
  },
  {
    id: "gtb",
    title: "Gestion technique des bâtiments",
    href: "/fiches-cee",
    icon: IconBuildingMgmt,
  },
] as const;

export function FinancedWorks() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {works.map((work) => (
        <Link
          key={work.id}
          href={work.href}
          className="group flex flex-col items-center rounded-[var(--radius)] border border-border/70 bg-bg px-4 py-8 text-center transition hover:-translate-y-0.5 hover:border-accent/35 hover:shadow-[var(--shadow-sm)]"
        >
          <span className="text-text transition group-hover:text-accent">
            <work.icon />
          </span>
          <span className="mt-5 text-sm font-semibold leading-snug text-text">
            {work.title}
          </span>
        </Link>
      ))}
    </div>
  );
}

function IconWalls() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M14 48V24l18-8 18 8v24l-18 8-18-8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M32 16v40M14 24l18 8 18-8M14 36l18 8 18-8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M22 42h8M38 34h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconAttic() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M12 48 36 18l24 30H12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M20 48V36l16-12 16 12v12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M28 48v-8h16v8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 32l12-9 12 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconFlatRoof() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M16 28h40v8H16zM20 36h32v20H20z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M16 28l4-6h32l4 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M26 44h20M26 50h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconFloor() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M14 42 36 30l22 12-22 12-22-12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 42v8l22 12 22-12v-8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M36 30v24M20 38l16 9 16-9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function IconHeatPump() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <rect x="20" y="18" width="32" height="40" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M26 26h20M26 32h20M26 38h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="46" cy="46" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 58h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconHeatNetwork() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M28 48c0-8 4-12 8-16 4 4 8 8 8 16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M32 48c0-5 2-8 4-11 2 3 4 6 4 11"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M24 52h24M28 56h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M36 20v8M30 24l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconToolbox() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <rect x="16" y="30" width="40" height="24" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M28 30v-6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 40h40M34 38h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M42 22l8 4-4 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconVmc() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <rect x="18" y="22" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="36" cy="36" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M36 28v16M28 36h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M24 56h24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconHeatRecovery() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <rect x="18" y="20" width="20" height="32" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 28h8M24 34h8M24 40h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path
        d="M42 44c0-6 3-10 6-13 3 3 6 7 6 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M40 48h20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconBuildingMgmt() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <path
        d="M22 52V28l14-8 14 8v24H22Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M30 36h4v4h-4zM38 36h4v4h-4zM30 44h4v4h-4zM38 44h4v4h-4z" stroke="currentColor" strokeWidth="1.3" />
      <path d="M48 24c4 0 8 3 8 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M52 20c6 0 10 5 10 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="48" cy="24" r="1.5" fill="currentColor" />
    </svg>
  );
}
