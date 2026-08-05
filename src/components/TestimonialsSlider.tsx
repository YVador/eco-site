"use client";

import Image from "next/image";
import { useState } from "react";
import { IconStar } from "@/components/Icons";

export type Testimonial = {
  name: string;
  city: string;
  product: string;
  rating: number;
  date: string;
  quote: string;
  photo: string;
};

export function TestimonialsSlider({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  function prev() {
    setIndex((i) => (i - 1 + items.length) % items.length);
  }

  function next() {
    setIndex((i) => (i + 1) % items.length);
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <article
          key={current.name + current.date}
          className="card-surface grid gap-0 overflow-hidden md:grid-cols-[280px_1fr]"
        >
          <div className="relative min-h-[240px] bg-bg-muted md:min-h-full">
            <Image
              src={current.photo}
              alt={`Photo de ${current.name}`}
              fill
              loading="eager"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 280px"
            />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <div className="flex text-accent" aria-label={`${current.rating} sur 5`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <blockquote className="mt-5 font-display text-xl leading-snug md:text-2xl lg:text-[1.7rem]">
              “{current.quote}”
            </blockquote>
            <footer className="mt-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-semibold">{current.name}</p>
                <p className="text-sm text-text-muted">
                  {current.city} · {current.product}
                </p>
              </div>
              <p className="text-xs text-text-muted">{current.date}</p>
            </footer>
          </div>
        </article>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div className="flex gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Avis ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-accent" : "w-2 bg-border hover:bg-text-muted"
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={prev}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent hover:text-accent"
            aria-label="Avis précédent"
          >
            ←
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface transition hover:border-accent hover:text-accent"
            aria-label="Avis suivant"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
