import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Politique cookies ECO INGENIERIE.",
};

export default function Page() {
  return (
    <LegalLayout
      title="Cookies et traceurs"
      description="Utilisation des cookies sur le site ECO INGENIERIE."
    >
      <p>
        Des cookies techniques peuvent être nécessaires au fonctionnement du
        site. Les cookies de mesure d’audience ne sont déposés qu’avec votre
        consentement.
      </p>
    </LegalLayout>
  );
}
