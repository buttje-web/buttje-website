'use client';

import { useState } from 'react';
import { useConsent } from '../lib/consent';

// Einbettung ueber feste Koordinaten (lat/lng) statt Place-ID, damit Google
// keinen abweichenden eigenen Adress-Eintrag in der Info-Card anzeigt.
// So bleibt die Beschriftung eindeutig "Graben 28/1/12, 1010 Wien".
const LAT = 48.2083075;
const LNG = 16.3709481;
const MAP_SRC = `https://maps.google.com/maps?q=${LAT},${LNG}&z=16&hl=de&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${LAT}%2C${LNG}`;

export default function GoogleMap() {
  const consent = useConsent();
  const [loadLocally, setLoadLocally] = useState(false);

  // Karte nur laden, wenn global zugestimmt oder hier aktiv per Klick erlaubt.
  const showMap = Boolean(consent?.analytics) || loadLocally;

  if (!showMap) {
    return (
      <div className="w-full h-[400px] rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex items-center justify-center p-6 text-center">
        <div className="max-w-sm">
          <p className="text-gray-700 font-medium mb-2">Google Maps</p>
          <p className="text-sm text-gray-600 mb-4">
            Die Karte wird erst nach Ihrer Zustimmung geladen, da dabei Daten an Google übertragen werden.
            Adresse: Graben 28/1/12, 1010 Wien.
          </p>
          <button
            onClick={() => setLoadLocally(true)}
            className="btn-primary !py-2.5 !px-6 text-sm"
          >
            Karte laden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg relative">
      <iframe
        src={MAP_SRC}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="buttje Standort, Graben 28/1/12, 1010 Wien"
      />
      <a
        href={MAP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label="In Google Maps öffnen, Graben 28/1/12, 1010 Wien"
      >
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
      </a>
    </div>
  );
}
