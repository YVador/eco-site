export type AudienceBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: { title: string; text: string }[];
  steps?: { title: string; text: string }[];
  columns?: { title: string; bullets: string[] }[];
};

export type AudiencePageContent = {
  eyebrow: string;
  headline: string;
  intro: string[];
  ctas: { label: string; href: string; primary?: boolean }[];
  blocks: AudienceBlock[];
};

export const audiencePages: Record<string, AudiencePageContent> = {
  "installateurs-artisans": {
    eyebrow: "Artisans / installateurs",
    headline:
      "Transformez vos chantiers en opportunités supplémentaires grâce aux CEE",
    intro: [
      "Vous réalisez des travaux de rénovation énergétique ? Valorisez les Certificats d’Économies d’Énergie (CEE) générés par vos chantiers et proposez à vos clients une solution simple pour réduire le coût de leurs travaux.",
      "Nous vous accompagnons à chaque étape, de l’identification du chantier jusqu’à la valorisation de vos CEE.",
    ],
    ctas: [
      { label: "Je deviens partenaire", href: "/contact", primary: true },
      { label: "Découvrir les travaux éligibles", href: "/fiches-cee" },
    ],
    blocks: [
      {
        title: "Pourquoi travailler avec nous ?",
        items: [
          {
            title: "Un accompagnement simple",
            text: "Pas besoin de devenir expert des CEE. Nous vous guidons dans vos démarches et vous aidons à constituer les éléments nécessaires à la valorisation de vos dossiers.",
          },
          {
            title: "Une nouvelle source de revenus",
            text: "Chaque chantier éligible peut générer des CEE. Valorisez votre activité et augmentez la rentabilité de vos chantiers.",
          },
          {
            title: "Un argument commercial pour vos clients",
            text: "Les aides CEE peuvent contribuer à réduire le reste à charge de vos clients. Un véritable levier pour faciliter la décision et accélérer la signature de vos devis.",
          },
          {
            title: "Moins d’administratif",
            text: "Nous simplifions le parcours et vous accompagnons dans le suivi de vos dossiers afin que vous puissiez rester concentré sur votre métier : installer et rénover.",
          },
        ],
      },
      {
        title: "Quels travaux pouvez-vous valoriser ?",
        paragraphs: [
          "De nombreux travaux de rénovation énergétique peuvent être concernés par le dispositif des CEE, notamment :",
          "L’éligibilité dépend notamment du type de travaux, du bâtiment, des équipements installés et des critères techniques applicables.",
        ],
        items: [
          {
            title: "Isolation",
            text: "Combles, toitures, murs, planchers…",
          },
          {
            title: "Chauffage & eau chaude",
            text: "Pompes à chaleur, chaudières performantes, équipements de régulation…",
          },
          {
            title: "Ventilation",
            text: "Installation ou amélioration des systèmes de ventilation.",
          },
          {
            title: "Équipements performants",
            text: "Solutions permettant de réduire durablement les consommations énergétiques.",
          },
        ],
      },
      {
        title: "Comment ça fonctionne ?",
        steps: [
          {
            title: "Vous réalisez votre chantier",
            text: "Vous accompagnez votre client dans la réalisation de ses travaux de rénovation énergétique.",
          },
          {
            title: "Vous nous transmettez les informations",
            text: "Nous vérifions l’éligibilité du chantier et vous indiquons les documents nécessaires.",
          },
          {
            title: "Nous vous accompagnons dans le dossier CEE",
            text: "Notre équipe vous accompagne dans la constitution et le suivi de votre dossier.",
          },
          {
            title: "Les CEE sont valorisés",
            text: "Une fois le dossier conforme et validé, les CEE peuvent être valorisés selon les conditions convenues.",
          },
          {
            title: "Vous développez votre activité",
            text: "Vous bénéficiez d’un accompagnement qui vous permet de proposer une solution supplémentaire à vos clients, sans complexifier votre quotidien.",
          },
        ],
      },
      {
        title: "Votre métier, c’est le chantier. Le nôtre, c’est de simplifier les CEE.",
        paragraphs: [
          "Nous savons que les démarches administratives peuvent prendre du temps. Notre objectif : vous permettre de bénéficier du dispositif CEE sans vous noyer dans la réglementation.",
          "Vous gardez la main sur votre relation client et vos travaux. Nous vous accompagnons sur la partie CEE.",
        ],
      },
      {
        title: "Devenez partenaire",
        paragraphs: [
          "Vous êtes artisan, installateur, entreprise de rénovation ou professionnel du bâtiment ?",
          "Rejoignez notre réseau de partenaires et développez une nouvelle opportunité autour de vos chantiers de rénovation énergétique.",
          "Inscrivez-vous gratuitement — quelques informations suffisent pour prendre contact avec notre équipe.",
        ],
      },
      {
        title: "Une relation gagnant-gagnant",
        columns: [
          {
            title: "Pour vous",
            bullets: [
              "Valoriser vos chantiers",
              "Développer votre activité",
              "Faciliter la vente de vos travaux",
              "Bénéficier d’un accompagnement CEE",
            ],
          },
          {
            title: "Pour vos clients",
            bullets: [
              "Identifier les aides disponibles",
              "Réduire potentiellement leur reste à charge",
              "Réaliser des travaux plus facilement",
              "Améliorer la performance énergétique de leur logement ou bâtiment",
            ],
          },
          {
            title: "Pour tous",
            bullets: [
              "Plus de travaux de rénovation énergétique",
              "Plus d’économies d’énergie",
              "Un accompagnement simplifié",
            ],
          },
        ],
      },
      {
        title: "Vous avez un chantier en cours ?",
        paragraphs: [
          "Parlons-en. Avant de commencer vos travaux, vérifiez si votre chantier peut bénéficier du dispositif des CEE.",
        ],
      },
    ],
  },

  "gestionnaires-batiments": {
    eyebrow: "Bâtiments tertiaire ou industriel",
    headline:
      "Transformez vos projets de rénovation énergétique en opportunités de financement",
    intro: [
      "Vous êtes propriétaire, bailleur, syndic, foncière, administrateur de biens ou gestionnaire d’un parc immobilier ?",
      "Vos bâtiments représentent un potentiel important d’économies d’énergie. Grâce au dispositif des Certificats d’Économies d’Énergie (CEE), certaines opérations de rénovation peuvent bénéficier d’une valorisation financière.",
      "En tant que mandataire CEE, nous vous accompagnons de l’identification des opérations jusqu’à la constitution et au suivi de vos dossiers.",
      "Votre patrimoine. Vos travaux. Nous valorisons vos CEE.",
    ],
    ctas: [
      { label: "Étudier mon projet", href: "/demande", primary: true },
      { label: "Parler à un expert CEE", href: "/contact" },
    ],
    blocks: [
      {
        title: "Pourquoi intégrer les CEE dans votre stratégie de rénovation ?",
        paragraphs: [
          "Rénover un patrimoine immobilier implique de nombreux enjeux :",
          "Les CEE constituent un levier supplémentaire à intégrer dans vos projets de travaux. Notre rôle est de vous permettre d’identifier les opérations susceptibles d’être valorisées et de simplifier la gestion administrative liée aux CEE.",
          "Le dispositif CEE repose notamment sur des opérations standardisées auxquelles sont associés des montants forfaitaires d’économies d’énergie. Des opérations spécifiques peuvent également être éligibles lorsqu’elles ne correspondent pas aux fiches standardisées.",
        ],
        bullets: [
          "maîtrise des charges énergétiques ;",
          "amélioration de la performance des bâtiments ;",
          "rénovation des équipements vieillissants ;",
          "respect des obligations réglementaires ;",
          "optimisation des investissements ;",
          "recherche de financements complémentaires.",
        ],
      },
      {
        title: "Vous gérez les bâtiments. Nous gérons la complexité des CEE.",
        paragraphs: [
          "Notre accompagnement s’intègre directement dans votre processus de rénovation.",
        ],
        steps: [
          {
            title: "Analyse de vos projets",
            text: "Vous nous présentez vos travaux prévus ou votre programme de rénovation. Nous identifions les opérations susceptibles d’être éligibles au dispositif.",
          },
          {
            title: "Identification du potentiel CEE",
            text: "Nous analysons les caractéristiques de vos bâtiments et des équipements concernés afin d’identifier les dispositifs applicables.",
          },
          {
            title: "Sécurisation en amont",
            text: "Les CEE doivent être anticipés dans le processus de réalisation des travaux. Nous vous accompagnons pour intégrer les exigences du dispositif au bon moment et limiter les risques de non-conformité.",
          },
          {
            title: "Gestion des dossiers",
            text: "Nous vous accompagnons dans la collecte des informations et des justificatifs nécessaires. En tant que mandataire, nous pouvons notamment déposer les demandes de CEE au nom du demandeur dans le cadre du mandat qui nous est confié.",
          },
          {
            title: "Suivi jusqu’à la valorisation",
            text: "Nous assurons le suivi administratif de vos dossiers et vous accompagnons jusqu’à leur valorisation.",
          },
        ],
      },
      {
        title: "Décret Tertiaire : faites des CEE un levier de votre stratégie énergétique",
        paragraphs: [
          "Pour les bâtiments tertiaires concernés par le dispositif Éco Énergie Tertiaire, la réduction des consommations devient un enjeu réglementaire majeur.",
          "Le dispositif concerne notamment les bâtiments, parties de bâtiments ou ensembles de bâtiments à usage tertiaire dont la surface de plancher est supérieure ou égale à 1 000 m². Il fixe une trajectoire de réduction des consommations d’énergie finale d’au moins 40 % en 2030, 50 % en 2040 et 60 % en 2050, par rapport à une année de référence. Les consommations sont suivies annuellement via la plateforme OPERAT.",
          "Vos obligations de performance énergétique peuvent devenir une feuille de route pour vos travaux et un levier pour mobiliser les CEE.",
        ],
        items: [
          {
            title: "Mesurer",
            text: "Connaître la performance énergétique de votre patrimoine.",
          },
          {
            title: "Identifier",
            text: "Déterminer les postes sur lesquels agir.",
          },
          {
            title: "Rénover",
            text: "Engager les travaux nécessaires.",
          },
          {
            title: "Valoriser",
            text: "Identifier les opérations pouvant générer des CEE.",
          },
          {
            title: "Suivre",
            text: "Mesurer les résultats obtenus.",
          },
        ],
      },
      {
        title: "Quels travaux pouvons-nous accompagner ?",
        paragraphs: [
          "Selon les caractéristiques de vos bâtiments et les critères applicables, nous pouvons étudier notamment les projets liés à :",
          "Chaque projet est étudié au regard des critères d’éligibilité applicables.",
        ],
        items: [
          {
            title: "Isolation",
            text: "Amélioration de l’enveloppe des bâtiments et réduction des déperditions énergétiques.",
          },
          {
            title: "Chauffage",
            text: "Remplacement ou amélioration des équipements de chauffage.",
          },
          {
            title: "Ventilation",
            text: "Modernisation et amélioration des systèmes de ventilation.",
          },
          {
            title: "Éclairage",
            text: "Remplacement et optimisation des installations d’éclairage.",
          },
          {
            title: "Régulation et pilotage",
            text: "Solutions permettant de mieux contrôler et optimiser les consommations.",
          },
          {
            title: "Eau chaude sanitaire",
            text: "Amélioration de la performance des installations de production d’eau chaude.",
          },
          {
            title: "Équipements énergétiques performants",
            text: "Étude des opérations permettant d’améliorer durablement la performance énergétique du bâtiment.",
          },
        ],
      },
      {
        title: "Un accompagnement adapté à votre activité",
        items: [
          {
            title: "Propriétaires & foncières",
            text: "Valorisez les travaux réalisés sur votre patrimoine et intégrez les CEE dans votre stratégie d’investissement.",
          },
          {
            title: "Bailleurs & gestionnaires résidentiels",
            text: "Identifiez les opportunités de valorisation liées aux travaux réalisés sur vos résidences et votre parc immobilier.",
          },
          {
            title: "Syndics de copropriété",
            text: "Accompagnez les copropriétés dans leurs projets de rénovation énergétique et simplifiez la gestion des dossiers CEE.",
          },
          {
            title: "Administrateurs de biens",
            text: "Centralisez la gestion des opportunités CEE liées aux différents immeubles que vous administrez.",
          },
          {
            title: "Gestionnaires de patrimoine tertiaire",
            text: "Déployez une stratégie CEE à l’échelle de votre parc et intégrez les aides dans vos programmes de travaux.",
          },
        ],
      },
      {
        title: "Un seul partenaire pour plusieurs bâtiments",
        paragraphs: [
          "Votre patrimoine ne se résume pas à un seul chantier. Lorsque vous gérez plusieurs bâtiments, le véritable enjeu est d’avoir une vision globale du potentiel de votre parc.",
          "Un interlocuteur CEE pour l’ensemble de votre patrimoine.",
        ],
        items: [
          {
            title: "Identifier",
            text: "Les bâtiments et opérations présentant un potentiel CEE.",
          },
          {
            title: "Prioriser",
            text: "Les projets en fonction de vos programmes de travaux.",
          },
          {
            title: "Centraliser",
            text: "Les informations et le suivi de vos dossiers.",
          },
          {
            title: "Accompagner",
            text: "Vos équipes et vos différents interlocuteurs.",
          },
          {
            title: "Valoriser",
            text: "Les CEE générés par vos opérations éligibles.",
          },
        ],
      },
      {
        title: "Pourquoi nous confier vos CEE ?",
        items: [
          {
            title: "Expertise",
            text: "Nous maîtrisons les mécanismes et exigences du dispositif CEE.",
          },
          {
            title: "Accompagnement B2B",
            text: "Nous travaillons avec les équipes immobilières, techniques, achats et travaux.",
          },
          {
            title: "Anticipation",
            text: "Nous intervenons en amont afin d’intégrer les exigences CEE à vos projets.",
          },
          {
            title: "Simplification",
            text: "Nous prenons en charge une grande partie du suivi administratif lié à vos dossiers.",
          },
          {
            title: "Vision patrimoniale",
            text: "Nous pouvons raisonner à l’échelle d’un bâtiment comme d’un parc immobilier.",
          },
          {
            title: "Suivi",
            text: "Vous disposez d’un interlocuteur dédié pour suivre vos opérations et vos dossiers.",
          },
        ],
      },
      {
        title: "Vous avez des travaux prévus ?",
        paragraphs: [
          "Ne lancez pas votre projet sans étudier son potentiel CEE. Chauffage, isolation, ventilation, éclairage, régulation… Avant de signer vos travaux, faites analyser votre projet.",
          "Nous vous indiquons les opérations susceptibles d’être valorisées et les étapes à prévoir pour sécuriser votre dossier.",
          "Votre patrimoine évolue. Votre stratégie énergétique aussi. Faites des CEE un levier de vos projets de rénovation.",
        ],
      },
    ],
  },

  collectivites: {
    eyebrow: "Mairies et collectivités",
    headline:
      "Accélérez vos projets de rénovation énergétique grâce aux Certificats d’Économies d’Énergie",
    intro: [
      "Les collectivités territoriales sont aujourd’hui confrontées à un double enjeu : réduire durablement leurs consommations énergétiques tout en maîtrisant leurs budgets.",
      "ECO Ingénierie accompagne les mairies et collectivités dans la valorisation de leurs projets d’efficacité énergétique grâce au dispositif des Certificats d’Économies d’Énergie (CEE).",
      "Notre objectif : vous permettre de financer vos travaux, simplifier vos démarches et sécuriser la valorisation de vos opérations.",
    ],
    ctas: [
      { label: "Étudier mes opportunités CEE", href: "/contact", primary: true },
      { label: "Voir les fiches CEE", href: "/fiches-cee" },
    ],
    blocks: [
      {
        title: "Un accompagnement CEE adapté aux acteurs publics",
        paragraphs: [
          "Les projets énergétiques des collectivités nécessitent une approche rigoureuse et un accompagnement adapté aux contraintes du secteur public.",
          "ECO Ingénierie vous accompagne à chaque étape de vos projets :",
          "Vous bénéficiez d’un interlocuteur dédié pour simplifier la gestion de vos dossiers CEE.",
        ],
        bullets: [
          "identification des opérations éligibles aux CEE ;",
          "analyse des travaux pouvant bénéficier d’une valorisation ;",
          "constitution et suivi des dossiers administratifs ;",
          "contrôle des pièces nécessaires à la conformité ;",
          "valorisation des économies d’énergie générées.",
        ],
      },
      {
        title: "Valorisez vos travaux d’efficacité énergétique",
        paragraphs: [
          "De nombreux projets portés par les collectivités peuvent être valorisés dans le cadre du dispositif CEE :",
          "ECO Ingénierie vous aide à identifier les opportunités de financement liées à vos projets.",
        ],
        bullets: [
          "rénovation énergétique des bâtiments publics ;",
          "amélioration des systèmes de chauffage et de production d’eau chaude ;",
          "modernisation des équipements énergétiques ;",
          "optimisation de l’éclairage public ;",
          "actions visant à réduire les consommations énergétiques.",
        ],
      },
      {
        title: "Simplifiez vos démarches administratives",
        paragraphs: [
          "La gestion des dossiers CEE peut représenter une charge importante pour les équipes municipales et techniques.",
          "Nous vous accompagnons afin de :",
          "Vos équipes restent concentrées sur leurs projets, nous vous accompagnons dans la gestion du dispositif CEE.",
        ],
        bullets: [
          "sécuriser vos dossiers ;",
          "vérifier la conformité des justificatifs ;",
          "faciliter le suivi administratif ;",
          "limiter les risques de non-conformité ;",
          "optimiser la valorisation de vos opérations.",
        ],
      },
      {
        title: "Un partenaire engagé aux côtés des collectivités",
        paragraphs: [
          "Chez ECO Ingénierie, nous privilégions une approche basée sur la proximité, la réactivité et la transparence.",
          "Nous travaillons aux côtés des collectivités pour transformer leurs projets d’efficacité énergétique en véritables leviers de réduction des coûts et de transition énergétique.",
          "Vous avez un projet énergétique ? Nos experts vous accompagnent pour identifier les opérations éligibles et les solutions de valorisation adaptées à votre collectivité.",
        ],
      },
    ],
  },
};
