import type { Metadata } from "next";
import { Libre_Baskerville, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

/** Titres : serif classique proche du logo ECO INGENIERIE */
const display = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

/** Texte : géométrique, technique — ancré “ingénierie” */
const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ECO INGENIERIE – Transition énergétique & CEE",
    template: "%s – ECO INGENIERIE",
  },
  description:
    "ECO INGENIERIE, partenaire clé de la transition énergétique. Valorisation des CEE, mandataire CEE, offre clé en main.",
  openGraph: {
    title: "ECO INGENIERIE – Transition énergétique rapide",
    description:
      "Accompagnement CEE clé en main. Expertise, conformité et paiement rapide des primes.",
    locale: "fr_FR",
    type: "website",
    siteName: site.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[4.25rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
