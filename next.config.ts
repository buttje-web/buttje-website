import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Alte /dienstleistungen-Pfade auf die neuen /leistungen-Pfade (301).
      {
        source: "/dienstleistungen/umzugs-und-endreinigung",
        destination: "/leistungen/umzuege-und-endreinigungen",
        statusCode: 301,
      },
      {
        source: "/dienstleistungen/gewerbliche-reinigung",
        destination: "/leistungen/gewerbliche-reinigung",
        statusCode: 301,
      },
      {
        source: "/dienstleistungen/facility-services",
        destination: "/leistungen/facility-services",
        statusCode: 301,
      },
      { source: "/dienstleistungen", destination: "/#leistungen", statusCode: 301 },
      { source: "/dienstleistungen/:path*", destination: "/leistungen/:path*", statusCode: 301 },
    ];
  },
};

export default nextConfig;
