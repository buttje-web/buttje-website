import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Alte Leistungsseiten der frueheren Live-Seite auf die thematisch
      // passende neue Leistungsseite (301). Diese spezifischen /leistungen-
      // Regeln stehen VOR der /dienstleistungen-Catch-all, damit sie greifen.
      {
        source: "/leistungen/premium-unterhaltsreinigung",
        destination: "/leistungen/gewerbliche-reinigung",
        statusCode: 301,
      },
      {
        source: "/leistungen/fachleistungen",
        destination: "/leistungen/facility-services",
        statusCode: 301,
      },
      // Leistungen, die es neu nicht mehr gibt, auf die Leistungsuebersicht.
      { source: "/leistungen/blumenservice", destination: "/#leistungen", statusCode: 301 },
      { source: "/leistungen/laserreinigung", destination: "/#leistungen", statusCode: 301 },

      // Alte Agentur- und Labs-Welt, die es neu nicht mehr gibt, auf die Startseite.
      { source: "/operations", destination: "/", statusCode: 301 },
      { source: "/agentur", destination: "/", statusCode: 301 },
      { source: "/labs", destination: "/", statusCode: 301 },
      { source: "/agentur/leistungen", destination: "/", statusCode: 301 },
      { source: "/agentur/arbeitsweise", destination: "/", statusCode: 301 },

      // Weitere alte Seiten ohne neues Pendant.
      { source: "/referenzen", destination: "/", statusCode: 301 },
      { source: "/karriere", destination: "/", statusCode: 301 },
      // Kontakt existiert neu nur als Anker auf der Startseite.
      { source: "/kontakt", destination: "/#kontakt", statusCode: 301 },

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
      // Entfernter Service, der sonst via Catch-all in ein 404 laufen wuerde.
      {
        source: "/dienstleistungen/handwerkliche-zusatzservices",
        destination: "/#leistungen",
        statusCode: 301,
      },
      { source: "/dienstleistungen", destination: "/#leistungen", statusCode: 301 },
      { source: "/dienstleistungen/:path*", destination: "/leistungen/:path*", statusCode: 301 },
    ];
  },
};

export default nextConfig;
