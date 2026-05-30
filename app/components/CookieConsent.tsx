'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CONSENT_ACCEPT_ALL,
  CONSENT_REJECT_ALL,
  CONSENT_OPEN_EVENT,
  hasDecision,
  setConsent,
} from '../lib/consent';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!hasDecision()) setShow(true);
    const open = () => setShow(true);
    window.addEventListener(CONSENT_OPEN_EVENT, open);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, open);
  }, []);

  const acceptAll = () => {
    setConsent(CONSENT_ACCEPT_ALL());
    setShow(false);
  };

  const rejectAll = () => {
    setConsent(CONSENT_REJECT_ALL());
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <div className="container-custom py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-sm text-gray-700 max-w-3xl">
            Wir verwenden Cookies und ähnliche Technologien. Notwendige sind für den Betrieb der Website
            erforderlich. Optionale Dienste (z. B. Statistik, Marketing und Google Maps) werden nur mit Ihrer
            Zustimmung geladen. Mehr dazu in der{' '}
            <Link href="/datenschutz" className="text-[var(--primary)] underline hover:text-[var(--primary-dark)]">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={rejectAll}
              className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Nur notwendige
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 rounded-lg bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
