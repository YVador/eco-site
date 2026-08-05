import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander une simulation",
  description:
    "Simulation CEE ECO INGENIERIE : orientez votre demande en quelques questions.",
};

export default function SimulationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
