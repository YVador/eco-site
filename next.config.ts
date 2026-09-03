import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/simulation",
        destination: "/demande",
        permanent: true,
      },
      {
        source: "/guides/mandataire-cee-maprimerenov",
        destination: "/guides/mandataire-cee",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
