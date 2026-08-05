import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité ECO INGENIERIE.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      description="Traitement des données personnelles collectées via ECO INGENIERIE."
    >
      <p>
        Les données collectées via formulaires (contact, simulation, newsletter)
        sont utilisées pour répondre à vos demandes relatives aux CEE et
        MaPrimeRénov’.
      </p>
      <p>
        Responsable de traitement : ECO INGENIERIE — contact@eco-ingenierie.fr
      </p>
      <p>
        Vous disposez d’un droit d’accès, de rectification et d’opposition.
        Document à finaliser avant mise en production.
      </p>
    </LegalLayout>
  );
}
