'use client';

import Link from 'next/link';
import Logo from './Logo';
import { PhoneLink, EmailLink } from './ObfuscatedContact';
import { openConsentSettings } from '../lib/consent';

const socials = [
  {
    name: 'YouTube',
    href: 'https://youtube.com/@buttje-wien',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@buttje.e.u',
    path: 'M16.5 0h-3.2v13.1a3 3 0 1 1-2.3-2.9V7a6.3 6.3 0 1 0 5.5 6.2V7.3a7.6 7.6 0 0 0 4.5 1.4V5.5a4.5 4.5 0 0 1-4.5-4.5V0z',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/buttje.wien',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.5.3 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.5.2-1 .3-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.5-.3-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.5-.2 1-.3 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.6c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.3.8-.4.4-.6.8-.8 1.3-.2.4-.3 1-.4 2.1C2.6 8.5 2.6 8.9 2.6 12s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.3.4.4.8.6 1.3.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.3-.8.4-.4.6-.8.8-1.3.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.9-.8-1.3-.4-.4-.8-.6-1.3-.8-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zm0 2.7a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 9.1a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2zm5.7-9.3a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rami-ibraimi-22a62b404',
    path: 'M20.4 20.4h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM6.9 20.4H3.3V9h3.6v11.4zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z',
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="mb-10">
          <Link href="/" aria-label="buttje, Startseite">
            <Logo />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Kontakt</h3>
            <div className="flex flex-col gap-2 text-gray-700">
              <p>
                <span className="text-[var(--primary)]">Adresse:</span>{' '}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Graben+28%2F1%2F12+1010+Wien"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  Graben 28/1/12, 1010 Wien
                </a>
              </p>
              <p>
                <span className="text-[var(--primary)]">Telefon:</span>{' '}
                <PhoneLink
                  variant="mobile"
                  display
                  location="footer"
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                />
                <span className="text-sm text-gray-500 ml-1">(Mobil)</span>
              </p>
              <p>
                <span className="text-[var(--primary)]">Büro:</span>{' '}
                <PhoneLink
                  variant="office"
                  display
                  location="footer"
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                />
              </p>
              <p>
                <span className="text-[var(--primary)]">E-Mail:</span>{' '}
                <EmailLink
                  display
                  location="footer"
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                />
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Informationen</h3>
            <div className="flex flex-col gap-2">
              <Link href="/ueber-uns" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">Über uns</Link>
              <Link href="/#leistungen" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">Leistungen</Link>
              <Link href="/#kontakt" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">Kontakt</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Rechtliches</h3>
            <div className="flex flex-col gap-2 items-start">
              <Link href="/impressum" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">Impressum</Link>
              <Link href="/datenschutz" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">Datenschutz</Link>
              <Link href="/agb" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">AGB</Link>
              <button
                onClick={openConsentSettings}
                className="text-[var(--primary)] hover:text-[var(--primary-dark)] text-left"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© 2026 buttje e.U.</p>
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="text-gray-400 hover:text-[var(--primary)] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
