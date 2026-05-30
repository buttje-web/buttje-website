'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';
import PhoneIcon from './PhoneIcon';
import { PHONE_MOBILE, telHref } from '../lib/contact';
import { trackPhoneCall } from '../utils/gtag';

const navLinks = [
  { href: '/#dienstleistungen', label: 'Dienstleistungen' },
  { href: '/#referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/#kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
            <div className="flex items-start gap-2">
              <Logo className="text-[var(--primary)] w-8 h-8" />
              <div className="flex flex-col items-start -mt-1">
                <span className="text-gray-900 translate-y-1 leading-none">buttje</span>
                <span className="text-[8.5px] text-gray-500 -tracking-wider mt-0.5 italic">
                  So muk wi dat
                </span>
              </div>
            </div>
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

          {/* Dauerhaft sichtbarer Anruf-Button */}
          <div className="flex items-center gap-2">
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
