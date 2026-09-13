import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TrustBar } from "@/components/TrustBar";
import { getProduct, products } from "@/data/products";
import { solutionRichContent } from "@/data/solution-content";
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

  const rich = solutionRichContent[slug];

  return (
    <>
      <TrustBar compact />
      <section className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-lg)] bg-bg-muted">
            <Image
              src={product.image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">{rich?.eyebrow ?? "Nos solutions"}</p>
            <h1 className="mt-3 font-display text-3xl md:text-5xl">
              {rich?.headline ?? product.name}
            </h1>
            <p className="mt-2 text-sm font-semibold tracking-wide text-accent">
              {product.highlight}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {product.shortDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-cta">
                Un expert vous rappelle
              </Link>
            </div>
            <ul className="mt-8 grid gap-2 text-sm text-text-muted sm:grid-cols-2">
              <li>✓ Mandataire CEE</li>
              <li>✓ Préfinancement possible</li>
              <li>✓ Contrôle documentaire</li>
              <li>✓ Chargé de mission dédié</li>
            </ul>
          </div>
        </div>
      </section>

      {rich ? (
        <section className="section border-t border-border bg-bg-muted">
          <div className="container-site max-w-3xl space-y-12">
            {rich.sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-2xl md:text-3xl">
                  {section.title}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p
                    key={p.slice(0, 48)}
                    className="mt-4 text-lg leading-relaxed text-text-muted"
                  >
                    {p}
                  </p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {section.items && (
                  <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {section.items.map((item) => (
                      <article
                        key={item.title}
                        className="border-t-2 border-accent pt-4"
                      >
                        <h3 className="font-display text-xl">{item.title}</h3>
                        <p className="mt-2 text-text-muted">{item.text}</p>
                      </article>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-2">
              <Link href="/contact" className="btn btn-cta">
                Un expert vous rappelle
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className="section border-t border-border bg-bg-muted">
          <div className="container-site grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl md:text-3xl">Description</h2>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">
                {product.description}
              </p>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl">En pratique</h2>
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
                <a
                  href={`mailto:${site.email}`}
                  className="text-accent underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
