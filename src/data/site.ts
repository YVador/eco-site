export const site = {
  name: "ECO INGENIERIE",
  shortName: "ECO INGENIERIE",
  tagline: "Unis dans la mission d’une transition énergétique rapide",
  email: "contact@eco-ingenierie.fr",
  phone: "06 52 39 03 06",
  phoneHref: "tel:+33652390306",
  phoneDisplay: "06 52 39 03 06",
  address: "10 Rue de Penthièvre, Paris 8ème",
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
    slug: "collectivites",
    title: "Collectivités locales",
    description:
      "Rénovez bâtiments et infrastructures et maximisez la valorisation de vos CEE.",
    icon: "badge" as const,
    image: "/media/audience-collectivite.jpg",
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
    slug: "installateurs-artisans",
    title: "Installateurs & artisans",
    description:
      "Simplifiez la gestion administrative des CEE pour vous et vos clients.",
    icon: "check" as const,
    image: "/media/audience-artisan.jpg",
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
    title: "Dépôt de demande",
    text: "Envoyez simplement votre demande de prise en charge à ECO INGENIERIE.",
    image: "/media/step-01.jpg",
  },
  {
    step: "02",
    title: "Prise de contact",
    text: "Votre interlocuteur dédié prend contact et se charge de votre dossier.",
    image: "/media/step-02.jpg",
  },
  {
    step: "03",
    title: "Envoi du dossier",
    text: "Dépôt de votre dossier CEE auprès de notre obligé.",
    image: "/media/step-03.jpg",
  },
  {
    step: "04",
    title: "Paiement de la prime",
    text: "Une fois la demande traitée, nous procédons au paiement rapide de la prime CEE.",
    image: "/media/step-04.jpg",
  },
  {
    step: "05",
    title: "Suivi & conformité",
    text: "Contrôle documentaire, veille réglementaire et accompagnement jusqu’au bout.",
    image: "/media/step-05.jpg",
  },
  {
    step: "06",
    title: "Transition réussie",
    text: "Vos travaux éligibles valorisés, vos obligations honorées, votre projet accéléré.",
    image: "/media/step-06.jpg",
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
