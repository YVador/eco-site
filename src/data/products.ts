export type AudienceSlug =
  | "entreprises-emettrices"
  | "fournisseurs-energie"
  | "collectivites"
  | "bailleurs-sociaux"
  | "installateurs-artisans"
  | "particuliers"
  | "gestionnaires-batiments";

export type Solution = {
  slug: string;
  name: string;
  highlight: string;
  shortDescription: string;
  description: string;
  image: string;
  audiences: AudienceSlug[];
  specs: { label: string; value: string }[];
  /** @deprecated alias — use audiences */
  usages: AudienceSlug[];
};

export const products: Solution[] = [
  {
    slug: "prise-en-charge-cee",
    name: "Valorisation de primes CEE",
    highlight: "Du dépôt au paiement",
    shortDescription:
      "Prise en charge clé en main : dépôt, suivi auprès de l’obligé et paiement de la prime.",
    description:
      "ECO INGENIERIE, votre partenaire expert dans la valorisation des Certificats d’Économies d’Énergie. Nous maximisons la valeur de vos CEE tout en simplifiant vos démarches administratives, avec une veille réglementaire permanente.",
    image: "/media/guide-valorisation.jpg",
    audiences: [
      "entreprises-emettrices",
      "fournisseurs-energie",
      "collectivites",
      "installateurs-artisans",
      "gestionnaires-batiments",
    ],
    usages: [
      "entreprises-emettrices",
      "fournisseurs-energie",
      "collectivites",
      "installateurs-artisans",
      "gestionnaires-batiments",
    ],
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
    highlight: "Guidage dossier complet",
    shortDescription:
      "Nous guidons le bénéficiaire tout au long de la démarche et de la préparation du dossier.",
    description:
      "En tant que mandataire administratif, ECO INGENIERIE sécurise chaque étape documentaire pour maximiser vos chances d’obtention des aides.",
    image: "/media/guide-mandat.jpg",
    audiences: [
      "particuliers",
      "bailleurs-sociaux",
      "installateurs-artisans",
      "gestionnaires-batiments",
    ],
    usages: [
      "particuliers",
      "bailleurs-sociaux",
      "installateurs-artisans",
      "gestionnaires-batiments",
    ],
    specs: [
      { label: "Type", value: "Mandat administratif" },
      { label: "Aides", value: "CEE" },
      { label: "Suivi", value: "Chargé de mission" },
    ],
  },
  {
    slug: "mandat-financier",
    name: "Préfinancement CEE",
    highlight: "Sans avance de frais",
    shortDescription:
      "Avancez tout ou partie de la prime CEE attendue avant le versement définitif des certificats.",
    description:
      "Le préfinancement CEE limite l’impact financier de vos investissements énergétiques et accélère le lancement de vos projets. ECO INGENIERIE, mandataire CEE, sécurise le dossier et optimise la valorisation.",
    image: "/media/step-05.jpg",
    audiences: [
      "particuliers",
      "installateurs-artisans",
      "bailleurs-sociaux",
      "gestionnaires-batiments",
    ],
    usages: [
      "particuliers",
      "installateurs-artisans",
      "bailleurs-sociaux",
      "gestionnaires-batiments",
    ],
    specs: [
      { label: "Type", value: "Mandat financier" },
      { label: "Avantage", value: "Préfinancement" },
      { label: "Aides", value: "CEE" },
    ],
  },
  {
    slug: "delegation-cee",
    name: "Délégation des CEE",
    highlight: "Obligés & délégataires",
    shortDescription:
      "Génération de CEE au profit de tiers, qu’ils soient obligés ou délégataires.",
    description:
      "ECO INGENIERIE accompagne la délégation de CEE dans un cadre maîtrisé et conforme.",
    image: "/media/audience-energie.jpg",
    audiences: ["entreprises-emettrices", "fournisseurs-energie"],
    usages: ["entreprises-emettrices", "fournisseurs-energie"],
    specs: [
      { label: "Type", value: "Délégation" },
      { label: "Bénéficiaires", value: "Obligés / délégataires" },
      { label: "Cadre", value: "Contractuel" },
    ],
  },
  {
    slug: "accompagnement-administratif",
    name: "Gestion des dossiers CEE",
    highlight: "Structuration & valorisation",
    shortDescription:
      "Assistance aux bénéficiaires, fournisseurs et poseurs pour structurer et valoriser leurs dossiers CEE.",
    description:
      "Nous transformons la complexité administrative en parcours clair, conforme et orienté résultat.",
    image: "/media/step-02.jpg",
    audiences: [
      "installateurs-artisans",
      "entreprises-emettrices",
      "collectivites",
      "gestionnaires-batiments",
    ],
    usages: [
      "installateurs-artisans",
      "entreprises-emettrices",
      "collectivites",
      "gestionnaires-batiments",
    ],
    specs: [
      { label: "Type", value: "Accompagnement" },
      { label: "Public", value: "Pro & institutions" },
      { label: "Livrable", value: "Dossier CEE" },
    ],
  },
  {
    slug: "verification-documentaire",
    name: "Contrôle et conformité",
    highlight: "Contrôle qualité",
    shortDescription:
      "Vérification documentaire : chaque dossier est contrôlé avant dépôt auprès de l’obligé.",
    description:
      "Chaque dossier passe un contrôle qualité strict pour sécuriser vos primes et votre conformité.",
    image: "/media/step-03.jpg",
    audiences: [
      "fournisseurs-energie",
      "collectivites",
      "entreprises-emettrices",
      "gestionnaires-batiments",
    ],
    usages: [
      "fournisseurs-energie",
      "collectivites",
      "entreprises-emettrices",
      "gestionnaires-batiments",
    ],
    specs: [
      { label: "Type", value: "Contrôle documentaire" },
      { label: "Méthode", value: "Vérification systématique" },
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

/** @deprecated use products slice — kept for legacy imports */
export function getBestsellers(limit = 4) {
  return products.slice(0, limit);
}

export type Product = Solution;
export type UsageSlug = AudienceSlug;
