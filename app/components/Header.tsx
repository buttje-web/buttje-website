'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import PhoneIcon from './PhoneIcon';
import { PHONE_MOBILE, PHONE_MOBILE_DISPLAY, telHref } from '../lib/contact';
import { trackPhoneCall } from '../utils/gtag';

const navLinks = [
  { href: '/#leistungen', label: 'Leistungen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" aria-label="buttje, Startseite" onClick={() => setIsOpen(false)}>
            <Logo className="h-14" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Dauerhaft sichtbarer Anruf-Button mit sichtbarer Nummer */}
          <div className="flex items-center gap-3">
            <a
              href={telHref(PHONE_MOBILE)}
              onClick={() => trackPhoneCall(PHONE_MOBILE, 'header_number')}
              className="hidden lg:inline-block text-sm font-semibold text-gray-900 hover:text-[var(--primary)] transition-colors"
            >
              {PHONE_MOBILE_DISPLAY}
            </a>
            <a
              href={telHref(PHONE_MOBILE)}
              onClick={() => trackPhoneCall(PHONE_MOBILE, 'header')}
              className="btn-primary !py-2.5 !px-4 sm:!px-6 text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Jetzt anrufen</span>
              <span className="sm:hidden">Anrufen</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 -mr-2 text-gray-900"
              aria-label="Menü öffnen"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1 border-t border-gray-100 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-base font-medium text-gray-800 hover:text-[var(--primary)]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
