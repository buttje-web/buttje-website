import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Die frühere Reinigungs-/Agentur-Welt existiert nicht mehr. Alle
    // bekannten alten Pfade werden dauerhaft (301) auf die Startseite
    // geleitet. Die alten Reinigungs-Leistungsseiten selbst liefern
    // HTTP 410 Gone (siehe app/leistungen/* und app/ueber-uns).
    return [
      // Alte Leistungs-/Dienstleistungs-Pfade (Reinigung) -> Startseite.
      { source: "/leistungen/premium-unterhaltsreinigung", destination: "/", statusCode: 301 },
      { source: "/leistungen/fachleistungen", destination: "/", statusCode: 301 },
      { source: "/leistungen/blumenservice", destination: "/", statusCode: 301 },
      { source: "/leistungen/laserreinigung", destination: "/", statusCode: 301 },
      { source: "/dienstleistungen", destination: "/", statusCode: 301 },
      { source: "/dienstleistungen/:path*", destination: "/", statusCode: 301 },

      // Alte Agentur-/Labs-Welt -> Startseite.
      { source: "/operations", destination: "/", statusCode: 301 },
      { source: "/agentur", destination: "/", statusCode: 301 },
      { source: "/agentur/leistungen", destination: "/", statusCode: 301 },
      { source: "/agentur/arbeitsweise", destination: "/", statusCode: 301 },
      { source: "/labs", destination: "/", statusCode: 301 },

      // Weitere alte Seiten ohne neues Pendant -> Startseite.
      { source: "/referenzen", destination: "/", statusCode: 301 },
      { source: "/karriere", destination: "/", statusCode: 301 },
      { source: "/kontakt", destination: "/", statusCode: 301 },
    ];
  },
};

export default nextConfig;
