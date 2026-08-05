import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

/** Titres : serif optique, caractère éditorial — loin des stacks “IA” */
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

/** Texte : technique, lisible, ancré “ingénierie” */
const plexSans = IBM_Plex_Sans({
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
    "ECO INGENIERIE, partenaire clé de la transition énergétique. Valorisation des CEE, mandataire CEE & MaPrimeRénov’, offre clé en main.",
  openGraph: {
    title: "ECO INGENIERIE – Transition énergétique rapide",
    description:
      "Bureau unique pour vos prises en charge CEE. Expertise, conformité ISO 9001, paiement rapide des primes.",
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
      className={`${fraunces.variable} ${plexSans.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
