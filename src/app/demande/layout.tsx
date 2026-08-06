import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Orienter ma demande",
  description:
    "Orientez votre demande CEE ECO INGENIERIE en quelques questions.",
};

export default function DemandeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
