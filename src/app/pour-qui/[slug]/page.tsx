import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { TrustBar } from "@/components/TrustBar";
import { audiencePages } from "@/data/audience-content";
import { getProductsByUsage, type AudienceSlug } from "@/data/products";
import { audiences } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return audiences.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const u = audiences.find((x) => x.slug === slug);
  const rich = audiencePages[slug];
  if (!u) return { title: "Pour qui" };
  return {
    title: rich?.eyebrow ?? u.title,
    description: rich?.intro[0] ?? u.description,
  };
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const u = audiences.find((x) => x.slug === slug);
  if (!u) notFound();

  const rich = audiencePages[slug];
  const list = getProductsByUsage(slug as AudienceSlug);

  if (!rich) {
    const highlight = "highlight" in u ? u.highlight : undefined;
    return (
      <>
        <section className="relative min-h-[320px] overflow-hidden text-white">
          <Image
            src={u.image}
            alt={u.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg-inverse/70" />
          <div className="container-site relative flex min-h-[320px] flex-col justify-end py-12">
            <p className="eyebrow text-cta">Vous êtes ?</p>
            <h1 className="mt-2 font-display text-4xl md:text-6xl">{u.title}</h1>
            <p className="mt-3 max-w-xl text-white/80">{u.description}</p>
          </div>
        </section>
        <TrustBar compact />
        {highlight && (
          <section className="section-tight border-b border-border bg-bg-muted">
            <div className="container-site max-w-3xl">
              <p className="eyebrow">Décret tertiaire</p>
              <p className="mt-3 text-lg leading-relaxed text-text-muted">
                {highlight}
              </p>
            </div>
          </section>
        )}
        <section className="section">
          <div className="container-site">
            <h2 className="font-display text-3xl">Solutions adaptées</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <Link href="/demande" className="btn btn-cta mt-10">
              Orienter ma demande
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative min-h-[420px] overflow-hidden text-white md:min-h-[480px]">
        <Image
          src={u.image}
          alt={u.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(11,22,40,0.92)_0%,rgba(11,22,40,0.7)_55%,rgba(11,22,40,0.4)_100%)]" />
        <div className="container-site relative flex min-h-[420px] flex-col justify-end py-14 md:min-h-[480px] md:py-20">
          <p className="eyebrow text-cta">{rich.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-3xl md:text-5xl lg:text-6xl">
            {rich.headline}
          </h1>
          <div className="mt-5 max-w-2xl space-y-3 text-base leading-relaxed text-white/85 md:text-lg">
            {rich.intro.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {rich.ctas.map((cta) => (
              <Link
                key={cta.label}
                href={cta.href}
                className={cta.primary ? "btn btn-cta" : "btn btn-ghost border-white/35 text-white"}
              >
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {rich.blocks.map((block, i) => {
        const muted = i % 2 === 1;
        return (
          <section
            key={block.title}
            className={`section ${muted ? "bg-bg-muted" : ""}`}
          >
            <div className="container-site">
              <h2 className="max-w-3xl font-display text-3xl md:text-4xl">
                {block.title}
              </h2>
              {block.paragraphs?.map((p) => (
                <p
                  key={p.slice(0, 48)}
                  className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted"
                >
                  {p}
                </p>
              ))}
              {block.bullets && (
                <ul className="mt-6 max-w-3xl space-y-3">
                  {block.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {block.items && (
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <article
                      key={item.title}
                      className="border-t-2 border-accent pt-5"
                    >
                      <h3 className="font-display text-xl">{item.title}</h3>
                      <p className="mt-3 text-text-muted">{item.text}</p>
                    </article>
                  ))}
                </div>
              )}
              {block.steps && (
                <ol className="mt-10 space-y-6">
                  {block.steps.map((step, idx) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="font-display text-2xl text-cta tabular-nums">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">
                          {step.title}
                        </h3>
                        <p className="mt-2 text-text-muted">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
              {block.columns && (
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                  {block.columns.map((col) => (
                    <div
                      key={col.title}
                      className="rounded-[var(--radius)] border border-border bg-surface p-6"
                    >
                      <h3 className="font-display text-xl">{col.title}</h3>
                      <ul className="mt-4 space-y-2.5">
                        {col.bullets.map((b) => (
                          <li key={b} className="flex gap-2 text-sm text-text-muted">
                            <span className="text-accent">→</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      {list.length > 0 && (
        <section className="section bg-bg-muted">
          <div className="container-site">
            <h2 className="font-display text-3xl">Solutions adaptées</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-bg-inverse text-white">
        <div className="container-site max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl">
            Parlons de votre projet
          </h2>
          <p className="mt-4 text-white/75">
            Notre équipe vous répond rapidement pour étudier l’éligibilité et la
            valorisation de vos opérations CEE.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-cta">
              Être rappelé par un conseiller
            </Link>
            <Link
              href="/demande"
              className="btn btn-ghost border-white/25 text-white"
            >
              Faire étudier mon projet
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
