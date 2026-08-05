import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";
import { IconStar } from "@/components/Icons";
import { audiences } from "@/data/site";

const audienceLabels = Object.fromEntries(
  audiences.map((a) => [a.slug, a.title]),
) as Record<string, string>;

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card-surface group flex h-full flex-col overflow-hidden">
      <Link
        href={`/solutions/${product.slug}`}
        className="relative block aspect-[4/3] overflow-hidden bg-bg-muted"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-inverse/25 via-transparent to-transparent opacity-80" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.badge === "bestseller" && (
            <span className="rounded-full bg-bg-inverse px-2.5 py-1 text-[11px] font-bold tracking-wide text-cta uppercase">
              Populaire
            </span>
          )}
          {product.badge === "new" && (
            <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
              Nouveau
            </span>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3.5 p-5">
        <div>
          <Link href={`/solutions/${product.slug}`}>
            <h3 className="font-display text-[1.15rem] leading-snug transition group-hover:text-accent md:text-xl">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs text-text-muted">{product.reference}</p>
        </div>

        <div className="flex items-center gap-1.5 text-sm">
          <span className="flex text-accent" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.round(product.rating) ? "opacity-100" : "opacity-25"}`}
              />
            ))}
          </span>
          <span className="font-semibold">{product.rating.toFixed(1)}</span>
          <span className="text-text-muted">({product.reviewCount} retours)</span>
        </div>

        <p className="text-sm font-medium text-text">{product.autonomyHint}</p>

        <div className="flex flex-wrap gap-1.5">
          {product.usages.slice(0, 2).map((u) => (
            <span
              key={u}
              className="rounded-full bg-bg-muted px-2.5 py-1 text-[11px] font-medium text-text-muted"
            >
              {audienceLabels[u] ?? u}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5 text-xs text-text-muted">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {product.shipping}
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Mandataire CEE · conformité ISO 9001
          </li>
        </ul>

        <div className="mt-auto space-y-3 border-t border-border pt-4">
          <p className="font-display text-2xl tracking-tight">
            {product.priceLabel || formatPrice(product.price)}
          </p>
          <Link
            href={`/solutions/${product.slug}`}
            className="btn btn-cta w-full text-sm"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </article>
  );
}
