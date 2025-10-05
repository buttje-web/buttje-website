'use client';

import Link from 'next/link';
import { trackPhoneCall, trackEmailClick } from '../utils/gtag';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Kontakt</h3>
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-[var(--primary)]">Adresse:</span>{" "}
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Graben+28%2F1%2F12+1010+Wien" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  Graben 28/1/12<br />1010 Wien
                </a>
              </p>
              <p>
                <span className="text-[var(--primary)]">Telefon:</span>{" "}
                <a 
                  href="tel:+4367762395080" 
                  onClick={() => trackPhoneCall('+4367762395080', 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  +43 677 62395080
                </a>
                <span className="text-sm text-gray-600 ml-1">(Mobil)</span>
              </p>
              <p>
                <span className="text-[var(--primary)]">Büro:</span>{" "}
                <a 
                  href="tel:+4312366326442" 
                  onClick={() => trackPhoneCall('+4312366326442', 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  +43 123 66326442
                </a>
              </p>
              <p>
                <span className="text-[var(--primary)]">E-Mail:</span>{" "}
                <a 
                  href="mailto:info@buttje.at" 
                  onClick={() => trackEmailClick('info@buttje.at', 'footer')}
                  className="text-[var(--primary)] hover:text-[var(--primary-dark)]"
                >
                  info@buttje.at
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Informationen</h3>
            <div className="flex flex-col gap-2">
              <Link href="/ueber-uns" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Über uns
              </Link>
              <Link href="/#dienstleistungen" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Dienstleistungen
              </Link>
              <Link href="/#referenzen" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Referenzen
              </Link>
              <Link href="/#kontakt" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Kontakt
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-[var(--primary)]">Rechtliches</h3>
            <div className="flex flex-col gap-2">
              <Link href="/impressum" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Impressum
              </Link>
              <Link href="/datenschutz" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                Datenschutz
              </Link>
              <Link href="/agb" className="text-[var(--primary)] hover:text-[var(--primary-dark)]">
                AGB
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          © {new Date().getFullYear()} buttje Reinigung. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
} 