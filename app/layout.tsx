import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileCallBar from "./components/MobileCallBar";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import CookieConsent from "./components/CookieConsent";
import ConsentScripts from "./components/ConsentScripts";
import {
  SITE_URL,
  PHONE_MOBILE,
  PHONE_OFFICE,
  ADDRESS,
  DISTRICTS,
} from "./lib/contact";

// Einzige Hausschrift: Inter, selbst gehostet ueber next/font (kein externer
// Request, kein Layout-Shift). Gilt fuer Fliesstext und Ueberschriften.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Kein Template: jede Seite setzt ihren vollstaendigen Title selbst.
  // Die Startseite nutzt diesen Default.
  title: "Gebäudereinigung Wien für Unternehmen | buttje",
  description:
    "Professionelle Gebäudereinigung für Unternehmen in den inneren Bezirken Wiens. Feste Teams, diskret, versichert. Jetzt unverbindlich anfragen.",
  keywords: [
    "Gebäudereinigung Wien",
    "Büroreinigung Wien",
    "Kanzleireinigung",
    "Praxisreinigung",
    "Ordinationsreinigung",
    "Unterhaltsreinigung",
    "Facility Services Wien",
    "Endreinigung Wien",
  ],
  authors: [{ name: "buttje e.U." }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Gebäudereinigung Wien für Unternehmen | buttje",
    description:
      "Professionelle Gebäudereinigung für Unternehmen in den inneren Bezirken Wiens. Feste Teams, diskret, versichert. Jetzt unverbindlich anfragen.",
    url: SITE_URL,
    siteName: "buttje",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gebäudereinigung Wien für Unternehmen | buttje",
    description:
      "Professionelle Gebäudereinigung für Unternehmen in den inneren Bezirken Wiens. Feste Teams, diskret, versichert. Jetzt unverbindlich anfragen.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": `${SITE_URL}/#business`,
  name: "buttje",
  legalName: "buttje e.U.",
  description:
    "Premium Gebäudereinigung in Wien für Unternehmen: Büro- und Kanzleireinigung, Ordinations- und Praxisreinigung, Gebäude- und Unterhaltsreinigung, Facility Services sowie Umzugs- und Endreinigung.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  telephone: PHONE_OFFICE,
  priceRange: "€€€",
  currenciesAccepted: "EUR",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.20873,
    longitude: 16.37002,
  },
  areaServed: DISTRICTS.map((plz) => ({
    "@type": "PostalCodeSpecification",
    postalCode: plz,
    addressCountry: "AT",
  })),
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE_MOBILE,
      contactType: "sales",
      areaServed: "AT",
      availableLanguage: ["de"],
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE_OFFICE,
      contactType: "customer service",
      areaServed: "AT",
      availableLanguage: ["de"],
    },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Reinigungsleistungen",
    itemListElement: [
      "Büro- und Kanzleireinigung",
      "Ordinations- und Praxisreinigung",
      "Gebäude- und Unterhaltsreinigung",
      "Facility Services",
      "Umzugs- und Endreinigung",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-AT" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <MobileCallBar />
        <FloatingWhatsApp />
        <CookieConsent />
        {/* Analytics/Ads werden erst nach Zustimmung geladen */}
        <ConsentScripts />
      </body>
    </html>
  );
}
