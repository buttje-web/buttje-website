'use client';

import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_URL } from '../lib/contact';
import { trackWhatsAppClick } from '../utils/gtag';

interface WhatsAppButtonProps {
  className?: string;
  label?: string;
}

// Regulaerer WhatsApp-Button (z.B. im Kontaktbereich). Oeffnet den Chat ohne
// vorausgefuellte Nachricht in einem neuen Tab.
export default function WhatsAppButton({ className = '', label = 'WhatsApp' }: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick('whatsapp_button')}
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#1ebe5b] transition-colors duration-200 ${className}`}
    >
      <WhatsAppIcon className="w-5 h-5" />
      {label}
    </a>
  );
}
