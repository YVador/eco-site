export type SolutionRichSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: { title: string; text: string }[];
};

export const solutionRichContent: Record<
  string,
  { eyebrow: string; headline: string; sections: SolutionRichSection[] }
> = {
  "prise-en-charge-cee": {
    eyebrow: "Valorisation des primes CEE",
    headline:
      "Transformez vos travaux d’efficacité énergétique en opportunités de financement",
    sections: [
      {
        title: "Votre métier est de réaliser les travaux",
        paragraphs: [
          "Vous réalisez des travaux de rénovation énergétique auprès de vos clients ? ECO INGENIERIE vous accompagne dans la valorisation des certificats d’économies d’énergie (CEE) générés par vos opérations.",
          "Grâce à notre expertise du dispositif CEE, nous vous aidons à identifier les opérations éligibles, constituer vos dossiers et optimiser la valorisation financière de vos chantiers.",
          "Votre métier est de réaliser les travaux. Notre métier est de valoriser les économies d’énergie associées.",
        ],
      },
      {
        title: "Faites des CEE un véritable levier de développement",
        paragraphs: [
          "Le dispositif des certificats d’économies d’énergie représente une opportunité pour les professionnels du bâtiment souhaitant proposer des solutions plus compétitives à leurs clients.",
          "En collaborant avec ECO INGENIERIE, vous pouvez :",
        ],
        bullets: [
          "valoriser vos travaux éligibles aux CEE ;",
          "proposer des solutions de financement complémentaires à vos clients ;",
          "améliorer l’attractivité de vos offres commerciales ;",
          "développer votre activité grâce aux dispositifs d’efficacité énergétique.",
        ],
      },
      {
        title: "Une prise en charge complète de vos dossiers CEE",
        paragraphs: [
          "La gestion des dossiers CEE peut rapidement devenir complexe : exigences réglementaires, collecte des justificatifs, contrôles de conformité…",
          "ECO INGENIERIE vous accompagne à chaque étape :",
        ],
        items: [
          {
            title: "Analyse de vos opérations",
            text: "Nous étudions vos chantiers afin d’identifier leur éligibilité au dispositif CEE.",
          },
          {
            title: "Constitution des dossiers",
            text: "Nous vous accompagnons dans la collecte des informations nécessaires et la préparation des éléments administratifs.",
          },
          {
            title: "Contrôle et conformité",
            text: "Nos équipes vérifient la conformité des dossiers afin de sécuriser leur valorisation.",
          },
          {
            title: "Suivi jusqu’à la valorisation",
            text: "Nous assurons le suivi des opérations jusqu’à leur traitement dans le cadre du dispositif CEE.",
          },
        ],
      },
      {
        title: "Simplifiez vos démarches, concentrez-vous sur vos chantiers",
        paragraphs: [
          "Les démarches administratives liées aux CEE ne doivent pas ralentir votre activité.",
          "Avec ECO INGENIERIE, vous bénéficiez :",
          "Vous gagnez du temps tout en optimisant la valeur de vos travaux.",
        ],
        bullets: [
          "d’un accompagnement personnalisé ;",
          "d’un interlocuteur dédié ;",
          "d’une gestion simplifiée de vos dossiers ;",
          "d’outils adaptés au suivi de vos opérations.",
        ],
      },
      {
        title: "Une expertise CEE au service des professionnels du bâtiment",
        paragraphs: [
          "ECO INGENIERIE accompagne les artisans et installateurs dans la transformation de leurs opérations d’efficacité énergétique en opportunités concrètes.",
          "Notre objectif : vous permettre de bénéficier pleinement du potentiel des CEE tout en simplifiant vos démarches administratives.",
          "Vous souhaitez valoriser vos chantiers CEE ? Contactez ECO INGENIERIE pour découvrir comment nous pouvons vous accompagner dans la valorisation de vos opérations.",
        ],
      },
    ],
  },
  "mandat-financier": {
    eyebrow: "Préfinancement",
    headline:
      "Le préfinancement des CEE : facilitez le financement de vos travaux d’efficacité énergétique",
    sections: [
      {
        title: "Pourquoi préfinancer ?",
        paragraphs: [
          "Le dispositif des certificats d’économies d’énergie (CEE) permet de financer une partie des travaux visant à réduire les consommations énergétiques des entreprises, des collectivités et des gestionnaires de bâtiments.",
          "Cependant, le versement des primes CEE intervient généralement après la réalisation des travaux et la validation du dossier administratif. Afin de faciliter le lancement des projets, certains acteurs du dispositif proposent des solutions de préfinancement des aides CEE.",
        ],
      },
      {
        title: "Qu’est-ce que le préfinancement CEE ?",
        paragraphs: [
          "Le préfinancement CEE consiste à avancer tout ou partie du montant de la prime CEE attendue avant le versement définitif des certificats.",
          "Cette solution permet aux bénéficiaires de limiter l’impact financier lié à leurs investissements énergétiques et de disposer d’une meilleure visibilité sur le financement de leurs travaux dès le démarrage du projet.",
          "Le préfinancement constitue ainsi un levier facilitant la mise en œuvre d’opérations d’efficacité énergétique, notamment pour les projets nécessitant des investissements importants.",
        ],
      },
      {
        title: "Un accompagnement financier pour accélérer vos projets",
        paragraphs: [
          "En tant que mandataire CEE, ECO INGENIERIE accompagne les porteurs de projets dans la valorisation de leurs certificats d’économies d’énergie et peut proposer des solutions adaptées pour faciliter le financement des opérations éligibles.",
          "Notre accompagnement permet notamment de :",
        ],
        bullets: [
          "identifier les dispositifs CEE mobilisables pour votre projet ;",
          "sécuriser la constitution de votre dossier ;",
          "optimiser la valorisation financière de vos économies d’énergie ;",
          "vous accompagner dans les différentes étapes administratives du dispositif.",
        ],
      },
      {
        title: "ECO INGENIERIE, votre partenaire pour valoriser vos CEE",
        paragraphs: [
          "Grâce à notre expertise du marché des CEE, nous contribuons à simplifier vos démarches et à accélérer la concrétisation de vos projets de performance énergétique.",
          "Le financement des travaux d’efficacité énergétique ne doit pas être un frein à votre transition énergétique.",
          "Avec ECO INGENIERIE, vous bénéficiez d’un accompagnement dédié pour transformer vos économies d’énergie en opportunités de financement et donner vie à vos projets dans les meilleures conditions.",
        ],
      },
    ],
  },
};
