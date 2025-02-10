'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
      <div className="container-custom py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            <p>
              Diese Website verwendet Cookies und ähnliche Technologien, um Ihnen die bestmögliche Nutzung zu ermöglichen.
              Einige sind notwendig, während andere optional sind.{' '}
              <Link href="/datenschutz" className="text-[var(--primary)] hover:text-[var(--primary-dark)] underline">
                Mehr erfahren
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={acceptCookies}
              className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--primary-dark)] transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Alle akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 