export type AudienceSlug =
  | "entreprises-emettrices"
  | "fournisseurs-energie"
  | "collectivites"
  | "bailleurs-sociaux"
  | "installateurs-artisans"
  | "particuliers";

export type Solution = {
  slug: string;
  name: string;
  reference: string;
  priceLabel: string;
  badge?: "bestseller" | "new";
  inStock: boolean;
  shipping: string;
  rating: number;
  reviewCount: number;
  autonomyHint: string;
  shortDescription: string;
  description: string;
  image: string;
  audiences: AudienceSlug[];
  specs: { label: string; value: string }[];
  /** kept for ProductCard compatibility */
  price: number;
  voltage: number;
  capacityAh: number;
  cycles: number;
  bluetooth: boolean;
  heater: boolean;
  usages: AudienceSlug[];
};

export const products: Solution[] = [
  {
    slug: "prise-en-charge-cee",
    name: "Prise en charge CEE clé en main",
    reference: "CEE-PACK",
    price: 0,
    priceLabel: "Sur devis",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: [
      "entreprises-emettrices",
      "fournisseurs-energie",
      "collectivites",
      "installateurs-artisans",
    ],
    audiences: [
      "entreprises-emettrices",
      "fournisseurs-energie",
      "collectivites",
      "installateurs-artisans",
    ],
    badge: "bestseller",
    inStock: true,
    shipping: "Démarrage sous 48 h",
    rating: 4.9,
    reviewCount: 128,
    autonomyHint: "Du dépôt au paiement",
    shortDescription:
      "Bureau unique pour vos demandes de prise en charge CEE : dépôt, suivi, dépôt auprès de l’obligé et paiement de la prime.",
    description:
      "ECO INGENIERIE facilite la mise en relation entre émetteurs et projets éco-responsables. Notre offre clé en main couvre le conseil jusqu’à la mise en œuvre pour une expérience fluide et efficace.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Type", value: "Offre clé en main" },
      { label: "Périmètre", value: "CEE" },
      { label: "Délai démarrage", value: "48 h" },
      { label: "Interlocuteur", value: "Dédié" },
    ],
  },
  {
    slug: "mandat-administratif",
    name: "Mandat administratif CEE",
    reference: "MANDAT-ADMIN",
    price: 0,
    priceLabel: "Inclus",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: ["particuliers", "bailleurs-sociaux", "installateurs-artisans"],
    audiences: ["particuliers", "bailleurs-sociaux", "installateurs-artisans"],
    badge: "new",
    inStock: true,
    shipping: "Accompagnement continu",
    rating: 4.8,
    reviewCount: 86,
    autonomyHint: "Guidage dossier complet",
    shortDescription:
      "Nous guidons le bénéficiaire tout au long de la démarche et de la préparation du dossier.",
    description:
      "En tant que mandataire administratif, ECO INGENIERIE sécurise chaque étape documentaire pour maximiser vos chances d’obtention des aides.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Type", value: "Mandat administratif" },
      { label: "Aides", value: "CEE · MaPrimeRénov’" },
      { label: "Suivi", value: "Chargé de mission" },
    ],
  },
  {
    slug: "mandat-financier",
    name: "Mandat financier & préfinancement",
    reference: "MANDAT-FIN",
    price: 0,
    priceLabel: "Sur étude",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: ["particuliers", "installateurs-artisans", "bailleurs-sociaux"],
    audiences: ["particuliers", "installateurs-artisans", "bailleurs-sociaux"],
    badge: "bestseller",
    inStock: true,
    shipping: "Étude sous 72 h",
    rating: 4.9,
    reviewCount: 94,
    autonomyHint: "Sans avance de frais",
    shortDescription:
      "Nous préfinançons le montant de l’aide en le soustrayant du devis : pas d’avance puis remboursement.",
    description:
      "Mandataire financier CEE et MaPrimeRénov’ : fluidifiez le financement de vos travaux d’économies d’énergie.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Type", value: "Mandat financier" },
      { label: "Avantage", value: "Préfinancement" },
      { label: "Aides", value: "CEE · MaPrimeRénov’" },
    ],
  },
  {
    slug: "delegation-cee",
    name: "Délégation des CEE",
    reference: "DELEG-CEE",
    price: 0,
    priceLabel: "Sur devis",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: ["entreprises-emettrices", "fournisseurs-energie"],
    audiences: ["entreprises-emettrices", "fournisseurs-energie"],
    inStock: true,
    shipping: "Cadre contractuel",
    rating: 4.7,
    reviewCount: 52,
    autonomyHint: "Obligés & délégataires",
    shortDescription:
      "Génération de CEE au profit de tiers, qu’ils soient obligés ou délégataires.",
    description:
      "ECO INGENIERIE agit comme représentant officiel pour la délégation de CEE dans un cadre maîtrisé et conforme.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Type", value: "Délégation" },
      { label: "Bénéficiaires", value: "Obligés / délégataires" },
      { label: "Cadre", value: "Officiel" },
    ],
  },
  {
    slug: "accompagnement-administratif",
    name: "Accompagnement administratif",
    reference: "ACCOMP-ADMIN",
    price: 0,
    priceLabel: "Sur devis",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: [
      "installateurs-artisans",
      "entreprises-emettrices",
      "collectivites",
    ],
    audiences: [
      "installateurs-artisans",
      "entreprises-emettrices",
      "collectivites",
    ],
    inStock: true,
    shipping: "Dossier structuré",
    rating: 4.8,
    reviewCount: 71,
    autonomyHint: "Structuration & valorisation",
    shortDescription:
      "Assistance aux bénéficiaires, fournisseurs et poseurs pour structurer et valoriser leurs dossiers CEE.",
    description:
      "Nous transformons la complexité administrative en parcours clair, conforme et orienté résultat.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Type", value: "Accompagnement" },
      { label: "Public", value: "Pro & institutions" },
      { label: "Livrable", value: "Dossier CEE" },
    ],
  },
  {
    slug: "verification-documentaire",
    name: "Vérification documentaire certifiée",
    reference: "ISO-DOC",
    price: 0,
    priceLabel: "Inclus offre",
    voltage: 0,
    capacityAh: 0,
    cycles: 0,
    bluetooth: false,
    heater: false,
    usages: ["fournisseurs-energie", "collectivites", "entreprises-emettrices"],
    audiences: ["fournisseurs-energie", "collectivites", "entreprises-emettrices"],
    badge: "new",
    inStock: true,
    shipping: "Contrôle systématique",
    rating: 4.9,
    reviewCount: 63,
    autonomyHint: "ISO 9001 · COFRAC",
    shortDescription:
      "Bureau de vérification documentaire certifié ISO 9001 par une entité reconnue par le COFRAC.",
    description:
      "Chaque dossier passe un contrôle qualité strict pour sécuriser vos primes et votre conformité.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    specs: [
      { label: "Norme", value: "ISO 9001" },
      { label: "Reconnaissance", value: "COFRAC" },
      { label: "Objectif", value: "Conformité" },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByUsage(usage: AudienceSlug) {
  return products.filter((p) => p.usages.includes(usage));
}

export function getBestsellers(limit = 4) {
  return [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit);
}

export function formatPrice(price: number) {
  if (price <= 0) return "Sur devis";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export type Product = Solution;
export type UsageSlug = AudienceSlug;
