'use client';

import Link from 'next/link';
import Logo from './Logo';
import {
  PHONE_MOBILE,
  PHONE_MOBILE_DISPLAY,
  PHONE_OFFICE,
  PHONE_OFFICE_DISPLAY,
  EMAIL,
  telHref,
} from '../lib/contact';
import { trackPhoneCall, trackEmailClick } from '../utils/gtag';
import { openConsentSettings } from '../lib/consent';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-12">
        <div className="mb-10">
          <Logo className="text-2xl text-gray-900" />
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
                <a
                  href={telHref(PHONE_MOBILE)}
                  onClick={() => trackPhoneCall(PHONE_MOBILE, 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  {PHONE_MOBILE_DISPLAY}
                </a>
                <span className="text-sm text-gray-500 ml-1">(Mobil)</span>
              </p>
              <p>
                <span className="text-[var(--primary)]">Büro:</span>{' '}
                <a
                  href={telHref(PHONE_OFFICE)}
                  onClick={() => trackPhoneCall(PHONE_OFFICE, 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  {PHONE_OFFICE_DISPLAY}
                </a>
              </p>
              <p>
                <span className="text-[var(--primary)]">E-Mail:</span>{' '}
                <a
                  href={`mailto:${EMAIL}`}
                  onClick={() => trackEmailClick(EMAIL, 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  {EMAIL}
                </a>
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

        <div className="mt-10 pt-8 border-t text-center text-sm text-gray-500">
          © 2026 buttje e.U.
        </div>
      </div>
    </footer>
  );
}
