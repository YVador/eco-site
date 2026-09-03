import Image from "next/image";
import Link from "next/link";
import type { Solution } from "@/data/products";
import { audiences } from "@/data/site";

const audienceLabels = Object.fromEntries(
  audiences.map((a) => [a.slug, a.title]),
) as Record<string, string>;

export function ProductCard({ product }: { product: Solution }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border/80 bg-surface transition hover:border-accent/35 hover:shadow-[var(--shadow-sm)]">
      <Link
        href={`/solutions/${product.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-bg-muted"
      >
        <Image
          src={product.image}
          alt=""
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-inverse/50 via-transparent to-transparent" />
        <p className="absolute bottom-3 left-3 rounded-[var(--radius-sm)] bg-white/95 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent uppercase">
          {product.highlight}
        </p>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-5 md:p-6">
        <div>
          <Link href={`/solutions/${product.slug}`}>
            <h3 className="font-display text-xl leading-snug transition group-hover:text-accent md:text-2xl">
              {product.name}
            </h3>
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            {product.shortDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.audiences.slice(0, 3).map((u) => (
            <span
              key={u}
              className="rounded-[var(--radius-sm)] bg-bg-muted px-2.5 py-1 text-[11px] font-medium text-text-muted"
            >
              {audienceLabels[u] ?? u}
            </span>
          ))}
        </div>

        <div className="mt-auto border-t border-border pt-4">
          <Link
            href={`/solutions/${product.slug}`}
            className="text-sm font-semibold text-accent transition hover:text-accent-hover"
          >
            En savoir plus →
          </Link>
        </div>
      </div>
    </article>
  );
}

/** Alias sémantique */
export const SolutionCard = ProductCard;
