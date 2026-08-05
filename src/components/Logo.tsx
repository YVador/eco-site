import Image from "next/image";
import { site } from "@/data/site";

type LogoProps = {
  className?: string;
  /** Hauteur visuelle en px (largeur auto) */
  height?: number;
  priority?: boolean;
};

export function Logo({ className = "", height = 40, priority = false }: LogoProps) {
  // Ratio approximatif du fichier (carré / portrait léger)
  const width = Math.round(height * 1.15);

  return (
    <Image
      src="/logo.png"
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ height, width: "auto" }}
    />
  );
}
