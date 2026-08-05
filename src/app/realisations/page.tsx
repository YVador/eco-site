import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Réalisations & partenaires",
  description:
    "Clients et partenaires ECO INGENIERIE : entreprises, artisans, collectivités.",
};

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    alt: "Entreprise",
    tag: "Tertiaire",
  },
  {
    src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80",
    alt: "Artisan",
    tag: "Artisans",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1000&q=80",
    alt: "Collectivité",
    tag: "Collectivités",
  },
  {
    src: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80",
    alt: "Habitat",
    tag: "Bailleurs",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    alt: "Énergie",
    tag: "Obligés",
  },
  {
    src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1000&q=80",
    alt: "Particuliers",
    tag: "Particuliers",
  },
];

export default function RealisationsPage() {
  return (
    <>
      <section className="section bg-bg-muted">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">Nos clients</p>
          <h1 className="mt-2 font-display text-4xl md:text-6xl">
            Au service de la transition énergétique
          </h1>
          <p className="mt-4 text-text-muted">
            Grandes entreprises, artisans, collectivités et particuliers :
            chaque client est au cœur de notre mission.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.alt}
                className="group relative aspect-square overflow-hidden rounded-[var(--radius)] bg-bg-muted"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg-inverse/80 to-transparent p-3 text-sm text-white">
                  {item.tag}
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/contact" className="btn btn-cta mt-10">
            Devenir partenaire
          </Link>
        </div>
      </section>
    </>
  );
}
