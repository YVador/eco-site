export const site = {
  name: "ECO INGENIERIE",
  shortName: "ECO INGENIERIE",
  tagline: "Unis dans la mission d’une transition énergétique rapide",
  email: "contact@eco-ingenierie.fr",
  phone: "Contactez-nous",
  phoneHref: "mailto:contact@eco-ingenierie.fr",
  address: "10 Rue de Penthièvre, Paris 8ème",
  hours: "10:00 – 20:00",
  url: "https://eco-ingenierie.fr",
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
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "fournisseurs-energie",
    title: "Fournisseurs d’énergie",
    description:
      "Obligés : remplissez vos obligations en soutenant des travaux d’économies d’énergie.",
    icon: "solar" as const,
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "collectivites",
    title: "Collectivités locales",
    description:
      "Rénovez bâtiments et infrastructures et maximisez la valorisation de vos CEE.",
    icon: "badge" as const,
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "bailleurs-sociaux",
    title: "Bailleurs sociaux",
    description:
      "Réalisez des économies sur vos parcs immobiliers grâce à la rénovation énergétique.",
    icon: "shield" as const,
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "installateurs-artisans",
    title: "Installateurs & artisans",
    description:
      "Simplifiez la gestion administrative des CEE pour vous et vos clients.",
    icon: "check" as const,
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "particuliers",
    title: "Particuliers",
    description:
      "Comprenez et valorisez vos aides CEE / MaPrimeRénov’ pour vos travaux.",
    icon: "van" as const,
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=80",
  },
] as const;

/** alias for components still expecting `usages` shape */
export const usages = audiences;

export const guides = [
  {
    slug: "quest-ce-quun-cee",
    title: "Qu’est-ce qu’un CEE ?",
    excerpt:
      "Le Certificat d’Économies d’Énergie : définition, rôle et enjeux de la rénovation.",
    readTime: "4 min",
    category: "Comprendre",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    slug: "mandataire-cee-maprimerenov",
    title: "Mandataire CEE & MaPrimeRénov’",
    excerpt:
      "Administratif et financier : comment ECO INGENIERIE avance les aides et sécurise vos dossiers.",
    readTime: "5 min",
    category: "Rôle",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
  {
    slug: "valoriser-ses-cee",
    title: "Comment valoriser ses CEE ?",
    excerpt:
      "Du dépôt à la prime : les étapes clés pour maximiser vos certificats.",
    readTime: "6 min",
    category: "Parcours",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Lucas P.",
    city: "Lyon",
    product: "Artisan",
    rating: 5,
    date: "2025",
    quote:
      "ECO INGENIERIE a simplifié le financement de mes chantiers. Leur support a été essentiel pour obtenir les éco-primes à temps.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nathalie R.",
    city: "Bordeaux",
    product: "Collectivité",
    rating: 5,
    date: "2025",
    quote:
      "Ils nous ont guidés à chaque étape, assurant la conformité de nos dossiers. Une collaboration enrichissante.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80",
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
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "02",
    title: "Prise de contact",
    text: "Votre interlocuteur dédié prend contact et se charge de votre dossier.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "03",
    title: "Envoi du dossier",
    text: "Dépôt de votre dossier CEE auprès de notre obligé.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "04",
    title: "Paiement de la prime",
    text: "Une fois la demande traitée, nous procédons au paiement rapide de la prime CEE.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "05",
    title: "Suivi & conformité",
    text: "Contrôle documentaire, veille réglementaire et accompagnement jusqu’au bout.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    step: "06",
    title: "Transition réussie",
    text: "Vos travaux éligibles valorisés, vos obligations honorées, votre projet accéléré.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
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
