import fichesData from "./fiches-cee.json";

export type FicheCee = {
  code: string;
  title: string;
  sector: string;
  family: "BAR" | "BAT" | "IND" | "AGRI" | "RES" | "TRA" | string;
  category: string;
  summary: string;
};

export const ficheSectors = [
  { id: "all", label: "Toutes", family: null },
  { id: "BAR", label: "Résidentiel", family: "BAR" },
  { id: "BAT", label: "Tertiaire", family: "BAT" },
  { id: "IND", label: "Industrie", family: "IND" },
  { id: "AGRI", label: "Agriculture", family: "AGRI" },
  { id: "RES", label: "Réseaux", family: "RES" },
  { id: "TRA", label: "Transport", family: "TRA" },
] as const;

export const fichesCee = fichesData as FicheCee[];

export const fichesCeeCount = fichesCee.length;

export const officialFichesUrl =
  "https://www.ecologie.gouv.fr/politiques-publiques/operations-standardisees-deconomies-denergie";
