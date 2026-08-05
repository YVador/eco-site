import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales ECO INGENIERIE.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Mentions légales"
      description="Informations légales de l’éditeur du site ECO INGENIERIE."
    >
      <p>
        <strong>Éditeur :</strong> ECO INGENIERIE — 10 Rue de Penthièvre, Paris
        8ème
      </p>
      <p>
        <strong>Contact :</strong> contact@eco-ingenierie.fr
      </p>
      <p>
        <strong>Horaires :</strong> 10:00 – 20:00
      </p>
      <p>
        Site inspiré du contenu public de{" "}
        <a href="https://eco-ingenierie.fr/" className="text-accent underline">
          eco-ingenierie.fr
        </a>
        . Document à finaliser avec vos informations juridiques exactes.
      </p>
    </LegalLayout>
  );
}
