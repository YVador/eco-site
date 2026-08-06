import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrustBar } from "@/components/TrustBar";
import { getProduct, products } from "@/data/products";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Solution" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <TrustBar compact />
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-sm text-text-muted">{product.reference}</p>
            <h1 className="mt-2 font-display text-3xl md:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-sm">
              ★ {product.rating.toFixed(1)} · {product.reviewCount} retours
            </p>
            <p className="mt-6 font-display text-3xl">{product.priceLabel}</p>
            <p className="mt-2 text-sm text-accent">{product.shipping}</p>
            <p className="mt-6 text-text-muted">{product.shortDescription}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/demande" className="btn btn-cta">
                Orienter ma demande
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Nous contacter
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-text-muted sm:grid-cols-2">
              <li>✓ Mandataire CEE</li>
              <li>✓ MaPrimeRénov’</li>
              <li>✓ Contrôle ISO 9001</li>
              <li>✓ Chargé de mission dédié</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section border-t border-border bg-bg-muted">
        <div className="container-site grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Description</h2>
            <p className="mt-4 text-text-muted">{product.description}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl">Détails</h2>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="flex justify-between gap-4 py-3 text-sm"
                >
                  <dt className="text-text-muted">{s.label}</dt>
                  <dd className="font-medium">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-text-muted">
              Contact :{" "}
              <a href={`mailto:${site.email}`} className="text-accent underline">
                {site.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
