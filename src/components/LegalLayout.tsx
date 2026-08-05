import type { Metadata } from "next";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, description, children }: Props) {
  return (
    <section className="section">
      <div className="container-site max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
        <p className="mt-4 text-text-muted">{description}</p>
        <div className="prose-legal mt-10 space-y-4 text-sm text-text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}

export const legalMeta = (title: string, description: string): Metadata => ({
  title,
  description,
});
