'use client';

import { trackPhoneCall, trackEmailClick } from '../utils/gtag';

export default function FloatingContact() {
  return (
    <div style={{ position: 'fixed', bottom: '1rem', right: '1rem' }} className="flex flex-col gap-2 z-50">
      <a
        href="tel:+4312366326442"
        onClick={() => trackPhoneCall('+4312366326442', 'floating_contact')}
        className="bg-white text-[var(--primary)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="Jetzt anrufen"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="w-6 h-6"
          strokeWidth="2"
        >
          <path 
            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
      <a
        href="mailto:info@buttje.at"
        onClick={() => trackEmailClick('info@buttje.at', 'floating_contact')}
        className="bg-white text-[var(--primary)] p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
        aria-label="E-Mail schreiben"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="w-6 h-6"
          strokeWidth="2"
        >
          <path 
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
} 