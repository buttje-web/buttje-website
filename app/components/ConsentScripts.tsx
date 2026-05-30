'use client';

import Script from 'next/script';
import { useConsent } from '../lib/consent';

// Laedt Google Analytics und Google Ads Conversion-Tracking erst NACH aktiver
// Zustimmung (analytics). Vorher wird nichts geladen.
export default function ConsentScripts() {
  const consent = useConsent();

  if (!consent?.analytics) return null;

  return (
    <>
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
    </>
  );
}
