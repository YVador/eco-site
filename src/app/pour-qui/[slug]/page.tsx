import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { TrustBar } from "@/components/TrustBar";
import { getProductsByUsage, type AudienceSlug } from "@/data/products";
import { audiences } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return audiences.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const u = audiences.find((x) => x.slug === slug);
  if (!u) return { title: "Pour qui" };
  return { title: u.title, description: u.description };
}

export default async function AudiencePage({ params }: Props) {
  const { slug } = await params;
  const u = audiences.find((x) => x.slug === slug);
  if (!u) notFound();

  const list = getProductsByUsage(slug as AudienceSlug);
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
