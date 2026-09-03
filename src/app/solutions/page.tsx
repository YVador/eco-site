import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { TrustBar } from "@/components/TrustBar";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Solutions CEE",
  description:
    "Solutions clés en main ECO INGENIERIE : prise en charge CEE, mandats, délégation, vérification documentaire.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="border-b border-border bg-bg-muted py-14 md:py-20">
        <div className="container-site">
          <p className="eyebrow">Solutions</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">
            Solutions clés en main pour vos CEE
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-text-muted">
            Valorisation, préfinancement, gestion des dossiers et contrôle
            documentaire — un accompagnement CEE de bout en bout.
          </p>
        </div>
      </section>
      <TrustBar compact />
      <section className="section">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
