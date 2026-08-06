export const site = {
  name: "ECO INGENIERIE",
  shortName: "ECO INGENIERIE",
  tagline: "Unis dans la mission d’une transition énergétique rapide",
  email: "contact@eco-ingenierie.fr",
  phone: "06 52 39 03 06",
  phoneHref: "tel:+33652390306",
  phoneDisplay: "06 52 39 03 06",
  address: "122 Avenue des Champs-Elysées, 75008 Paris",
  hours: "10:00 – 20:00",
  url: "https://eco-ingenierie.fr",
  socials: [
    // À remplacer par les URLs exactes du compte ECO INGENIERIE quand confirmées
    {
      label: "Facebook",
      href: "https://www.facebook.com/search/top?q=ECO%20INGENIERIE",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/results?search_query=ECO+INGENIERIE",
    },
  ],
} as const;

export const trustItems = [
  { label: "Expertise CEE · 5 ans", short: "5 ans d’expertise" },
  { label: "Mandataire CEE & MaPrimeRénov’", short: "Mandataire officiel" },
  { label: "ISO 9001 / COFRAC", short: "ISO 9001" },
  { label: "Guichet unique", short: "Guichet unique" },
  { label: "Paiement rapide des primes", short: "Primes rapides" },
  { label: "Veille réglementaire", short: "Veille réglementaire" },
  { label: "Accompagnement dédié", short: "Chargé de mission" },
] as const;

export const audiences = [
  {
    slug: "installateurs-artisans",
    title: "Artisans",
    description:
      "Simplifiez la gestion administrative des CEE pour vous et vos clients.",
    icon: "check" as const,
    image: "/media/audience-artisan.jpg",
  },
  {
    slug: "gestionnaires-batiments",
    title: "Gestionnaire de bâtiments",
    description:
      "Répondez au décret tertiaire et valorisez vos travaux d’économies d’énergie grâce aux CEE.",
    highlight:
      "Le décret tertiaire impose une réduction progressive des consommations énergétiques des bâtiments tertiaires. ECO INGENIERIE vous aide à financer et valoriser vos actions via les primes CEE, en sécurisant conformité et dossiers.",
    icon: "shield" as const,
    image: "/media/audience-entreprise.jpg",
  },
  {
    slug: "collectivites",
    title: "Mairie ou collectivités",
    description:
      "Rénovez bâtiments et infrastructures et maximisez la valorisation de vos CEE.",
    icon: "badge" as const,
    image: "/media/audience-collectivite.jpg",
  },
  {
    slug: "entreprises-emettrices",
    title: "Entreprises émettrices",
    description:
      "Investissez dans des projets éco-responsables et valorisez vos CEE plutôt que de subir une taxe carbone.",
    icon: "ev" as const,
    image: "/media/audience-entreprise.jpg",
  },
  {
    slug: "fournisseurs-energie",
    title: "Fournisseurs d’énergie",
    description:
      "Obligés : remplissez vos obligations en soutenant des travaux d’économies d’énergie.",
    icon: "solar" as const,
    image: "/media/audience-energie.jpg",
  },
  {
    slug: "bailleurs-sociaux",
    title: "Bailleurs sociaux",
    description:
      "Réalisez des économies sur vos parcs immobiliers grâce à la rénovation énergétique.",
    icon: "shield" as const,
    image: "/media/audience-bailleur.jpg",
  },
  {
    slug: "particuliers",
    title: "Particuliers",
    description:
      "Comprenez et valorisez vos aides CEE / MaPrimeRénov’ pour vos travaux.",
    icon: "van" as const,
    image: "/media/audience-particulier.jpg",
  },
] as const;

/** alias for components still expecting `usages` shape */
export const usages = audiences;

/** Audiences mises en avant dans le menu « Vous êtes ? » */
export const navAudiences = [
  "installateurs-artisans",
  "gestionnaires-batiments",
  "collectivites",
] as const;

export const mainNav = [
  {
    label: "Nos solutions",
    children: [
      { href: "/solutions", label: "CEE" },
      { href: "/fiches-cee", label: "Fiches CEE" },
      { href: "/coup-de-pouce", label: "Coup de Pouce" },
      { href: "/solutions/mandat-financier", label: "Préfinancement" },
    ],
  },
  {
    label: "Vous êtes ?",
    children: [
      { href: "/pour-qui/installateurs-artisans", label: "Artisans" },
      {
        href: "/pour-qui/gestionnaires-batiments",
        label: "Gestionnaire de bâtiments",
      },
      { href: "/pour-qui/collectivites", label: "Mairie ou collectivités" },
    ],
  },
] as const;

export const mainNavLinks = [
  { href: "/qui-sommes-nous", label: "Qui sommes-nous ?" },
  { href: "/contact", label: "Contact" },
] as const;

export const clientSectors = [
  { name: "Entreprises tertiaires", tag: "Émetteurs" },
  { name: "Fournisseurs d’énergie", tag: "Obligés" },
  { name: "Collectivités locales", tag: "Public" },
  { name: "Bailleurs sociaux", tag: "Habitat" },
  { name: "Installateurs RGE", tag: "Artisans" },
  { name: "Particuliers", tag: "Résidentiel" },
] as const;

export const guides = [
  {
    slug: "quest-ce-quun-cee",
    title: "Qu’est-ce qu’un CEE ?",
    excerpt:
      "Le Certificat d’Économies d’Énergie : définition, rôle et enjeux de la rénovation.",
    readTime: "4 min",
    category: "Comprendre",
    image: "/media/guide-cee.jpg",
  },
  {
    slug: "mandataire-cee-maprimerenov",
    title: "Mandataire CEE & MaPrimeRénov’",
    excerpt:
      "Administratif et financier : comment ECO INGENIERIE avance les aides et sécurise vos dossiers.",
    readTime: "5 min",
    category: "Rôle",
    image: "/media/guide-mandat.jpg",
  },
  {
    slug: "valoriser-ses-cee",
    title: "Comment valoriser ses CEE ?",
    excerpt:
      "Du dépôt à la prime : les étapes clés pour maximiser vos certificats.",
    readTime: "6 min",
    category: "Parcours",
    image: "/media/guide-valorisation.jpg",
  },
] as const;

export const testimonials = [
  {
    name: "Marie L.",
    city: "Paris",
    product: "Entreprise tertiaire",
    rating: 5,
    date: "2025",
    quote:
      "Grâce à ECO INGENIERIE, nous avons pu valoriser nos CEE sans tracas. Leur expertise et leur dévouement sont inégalés.",
    photo: "/media/temoin-marie.jpg",
  },
  {
    name: "Lucas P.",
    city: "Lyon",
    product: "Artisan",
    rating: 5,
    date: "2025",
    quote:
      "ECO INGENIERIE a simplifié le financement de mes chantiers. Leur support a été essentiel pour obtenir les éco-primes à temps.",
    photo: "/media/temoin-lucas.jpg",
  },
  {
    name: "Nathalie R.",
    city: "Bordeaux",
    product: "Collectivité",
    rating: 5,
    date: "2025",
    quote:
      "Ils nous ont guidés à chaque étape, assurant la conformité de nos dossiers. Une collaboration enrichissante.",
    photo: "/media/temoin-nathalie.jpg",
  },
] as const;

export const faqHome = [
  {
    q: "Qu’est-ce qu’un CEE ?",
    a: "Un Certificat d’Économies d’Énergie atteste de la réalisation d’économies d’énergie suite à des travaux de rénovation énergétique.",
  },
  {
    q: "Pourquoi choisir ECO INGENIERIE ?",
    a: "Expertise dédiée, approche personnalisée et valorisation optimale de vos CEE, avec un processus simplifié de bout en bout.",
  },
  {
    q: "Comment assurez-vous la conformité des dossiers ?",
    a: "Contrôle documentaire rigoureux et veille réglementaire permanente pour garantir la conformité de chaque dossier.",
  },
  {
    q: "Combien de temps pour obtenir les éco-primes ?",
    a: "Les délais dépendent de la complexité du dossier. Nous nous appuyons sur nos relations avec les acteurs du secteur pour des délais maîtrisés.",
  },
  {
    q: "Qui peut bénéficier des CEE ?",
    a: "Entreprises, collectivités, fournisseurs d’énergie, bailleurs, installateurs et, dans certains cas, particuliers engagés dans la rénovation énergétique.",
  },
  {
    q: "Êtes-vous mandataire MaPrimeRénov’ ?",
    a: "Oui. ECO INGENIERIE est mandataire administratif et financier pour les CEE et MaPrimeRénov’ : accompagnement du dossier et préfinancement possible.",
  },
] as const;

export const timeline = [
  {
    step: "01",
    title: "Éligibilité & cadrage",
    tag: "Cadrage",
    text: "Nous identifions vos gisements, vérifions l’éligibilité des travaux et cadrons le dossier selon les fiches CEE les plus adaptées à votre projet.",
    metric: "48h",
    metricLabel: "Retour éligibilité",
    image: "/media/step-01.jpg",
  },
  {
    step: "02",
    title: "Montage du dossier",
    tag: "Montage",
    text: "Votre interlocuteur dédié collecte les pièces, structure le dossier administratif et prépare les justificatifs requis pour une instruction fluide.",
    metric: "Dédié",
    metricLabel: "Chargé de mission",
    image: "/media/step-02.jpg",
  },
  {
    step: "03",
    title: "Contrôle conformité",
    tag: "Contrôle",
    text: "Vérification documentaire rigoureuse et veille réglementaire pour sécuriser chaque dossier avant dépôt auprès de l’obligé.",
    metric: "ISO",
    metricLabel: "Contrôle qualité",
    image: "/media/step-03.jpg",
  },
  {
    step: "04",
    title: "Dépôt auprès de l’obligé",
    tag: "Dépôt",
    text: "Nous déposons votre dossier CEE auprès de notre obligé et assurons le suivi jusqu’à validation de la demande de certificats.",
    metric: "Suivi",
    metricLabel: "Jusqu’à validation",
    image: "/media/step-04.jpg",
  },
  {
    step: "05",
    title: "Versement de la prime",
    tag: "Prime",
    text: "Une fois la demande traitée, nous procédons au versement rapide de la prime CEE — avec préfinancement possible selon le mandat.",
    metric: "Rapide",
    metricLabel: "Paiement de la prime",
    image: "/media/step-05.jpg",
  },
] as const;

export const comparisonRows = [
  {
    label: "Complexité administrative",
    lithium: "Prise en charge clé en main",
    agm: "Gestion seule, risque d’erreurs",
  },
  {
    label: "Délais de prime",
    lithium: "Traitement accéléré",
    agm: "Délais souvent allongés",
  },
  {
    label: "Conformité",
    lithium: "Contrôle ISO 9001",
    agm: "Risque de non-conformité",
  },
  {
    label: "Interlocuteur",
    lithium: "Chargé de mission dédié",
    agm: "Multiples contacts",
  },
  {
    label: "Préfinancement",
    lithium: "Mandat financier possible",
    agm: "Avance de frais à votre charge",
  },
  {
    label: "Veille réglementaire",
    lithium: "Incluse",
    agm: "À votre charge",
  },
] as const;

export const comparisonLabels = {
  title: "Pourquoi passer par ECO INGENIERIE ?",
  left: "Avec ECO INGENIERIE",
  right: "Sans accompagnement",
} as const;
