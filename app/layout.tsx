import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import localFont from 'next/font/local'
import FloatingContact from "./components/FloatingContact";
import CookieConsent from "./components/CookieConsent";
import Script from 'next/script';

const frutiger = localFont({
  src: '../public/fonts/FrutigerLTStd-Light.otf',
  display: 'swap',
  variable: '--font-frutiger'
})

export const metadata: Metadata = {
  title: "buttje | Professionelle Reinigung & Möbelservice",
  description: "Hochwertige Reinigungsdienstleistungen und Möbelservice mit höchsten Standards für Qualität, Hygiene und Diskretion. Ein Lappen pro Tisch - für maximale Sauberkeit.",
  keywords: "Reinigungsservice, Möbelservice, Hygiene, Diskretion, Qualitätsreinigung, Möbelpflege, Wien, Professionelle Reinigung, Stephansplatz",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo-new.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'buttje | Professionelle Reinigung & Möbelservice',
    description: 'Hochwertige Reinigungsdienstleistungen und Möbelservice mit höchsten Standards für Qualität, Hygiene und Diskretion.',
    url: 'https://buttje.at',
    siteName: 'buttje',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'buttje Reinigungsservice',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo-new.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "buttje",
              "image": "/og-image.jpg",
              "description": "Professionelle Reinigungsdienstleistungen mit höchsten Standards für Qualität, Hygiene und Diskretion.",
              "@id": "https://buttje.at",
              "url": "https://buttje.at",
              "telephone": ["+4367762395080", "+4312366326442"],
              "email": "info@buttje.at",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Graben 28/1/12",
                "addressLocality": "Wien",
                "postalCode": "1010",
                "addressCountry": "AT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 48.2083,
                "longitude": 16.3731
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "priceRange": "€€",
              "areaServed": "Wien"
            })
          }}
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17533089249"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17533089249');
          `}
        </Script>
      </head>
      <body className={`${frutiger.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
      </body>
    </html>
  );
}
