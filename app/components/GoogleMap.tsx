'use client';

import { useState } from 'react';
import { useConsent } from '../lib/consent';

const MAP_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0243075563837!2d16.37094807638775!3d48.20830747912648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e7d7dd1ab%3A0x3a40a1f0d6b89c48!2sGraben+28%2F1%2F12%2C+1010+Wien!5e0!3m2!1sde!2sat!4v1710861445040!5m2!1sde!2sat';

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
        href="https://www.google.com/maps/place/Graben+28%2F1%2F12,+1010+Wien/@48.2083075,16.3709481,17z/"
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
