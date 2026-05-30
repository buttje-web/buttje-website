'use client';

import PhoneIcon from './PhoneIcon';
import { PhoneLink } from './ObfuscatedContact';

// Fixer Anruf-Button auf Mobilgeräten, immer erreichbar.
// Auf Desktop ausgeblendet (dort sitzt der Button im Header).
export default function MobileCallBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-gradient-to-t from-white via-white to-transparent pointer-events-none">
      <PhoneLink
        variant="mobile"
        location="mobile_bar"
        className="btn-primary w-full pointer-events-auto shadow-lg"
      >
        <PhoneIcon className="w-5 h-5" />
        Jetzt anrufen
      </PhoneLink>
    </div>
  );
}
