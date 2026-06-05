'use client';

import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/contact';
import { useConsentBannerVisible } from '../lib/consent';
import { trackWhatsAppClick } from '../utils/gtag';

// Schwebender WhatsApp-Button unten rechts, auf allen Seiten (mobil + Desktop).
// Auf Mobil ueber der fixen Anruf-Leiste positioniert (bottom-24). Solange der
// Cookie-Banner offen ist, wird er ausgeblendet, damit es keine Ueberlappung gibt.
export default function FloatingWhatsApp() {
  const bannerVisible = useConsentBannerVisible();
  if (bannerVisible) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat über WhatsApp öffnen"
      onClick={() => trackWhatsAppClick('whatsapp_floating')}
      className="fixed right-4 md:right-6 bottom-24 md:bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5b] hover:shadow-xl transition-all"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
