import Image from "next/image";
import Link from "next/link";

const works = [
  {
    id: "murs",
    title: "Isolation des murs (ITE / ITI)",
    href: "/fiches-cee",
    image: "/media/works/murs.jpg",
  },
  {
    id: "combles",
    title: "Isolation des combles",
    href: "/fiches-cee",
    image: "/media/works/combles.jpg",
  },
  {
    id: "toitures",
    title: "Isolation des toitures-terrasses",
    href: "/fiches-cee",
    image: "/media/works/toitures.jpg",
  },
  {
    id: "planchers",
    title: "Isolation des planchers bas",
    href: "/fiches-cee",
    image: "/media/works/planchers.jpg",
  },
  {
    id: "pac",
    title: "Installation d’une PAC",
    href: "/fiches-cee",
    image: "/media/works/pac.jpg",
  },
  {
    id: "reseau",
    title: "Raccordement à un réseau de chaleur",
    href: "/fiches-cee",
    image: "/media/works/reseau.jpg",
  },
  {
    id: "reno",
    title: "Rénovation globale",
    href: "/fiches-cee",
    image: "/media/works/reno.jpg",
  },
  {
    id: "vmc",
    title: "VMC",
    href: "/fiches-cee",
    image: "/media/works/vmc.jpg",
  },
  {
    id: "recup",
    title: "Récupération de chaleur",
    href: "/fiches-cee",
    image: "/media/works/recup.jpg",
  },
  {
    id: "gtb",
    title: "Gestion technique des bâtiments",
    href: "/fiches-cee",
    image: "/media/works/gtb.jpg",
  },
] as const;

export function FinancedWorks() {
  return (
    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
      {works.map((work, i) => {
        const rowPos = i % 5;
        const span =
          rowPos < 3 ? "lg:col-span-2" : "lg:col-span-3";

        return (
          <Link
            key={work.id}
            href={work.href}
            className={`group relative isolate overflow-hidden rounded-[var(--radius-lg)] border border-border/60 bg-bg-inverse shadow-[var(--shadow-sm)] transition duration-300 hover:-translate-y-1 hover:border-cta/40 hover:shadow-[var(--shadow-md)] ${span}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-inverse via-bg-inverse/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <span className="mb-2 block h-0.5 w-8 bg-lime transition group-hover:w-12" />
                <span className="block font-display text-base leading-snug text-white md:text-[1.05rem]">
                  {work.title}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold tracking-wide text-white/70 transition group-hover:text-lime">
                  Voir les fiches
                  <span
                    aria-hidden
                    className="transition group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
