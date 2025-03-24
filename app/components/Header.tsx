'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from './Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold">
            <div className="flex items-start gap-2">
              <Logo className="text-[var(--primary)] w-8 h-8" />
              <div className="flex flex-col items-start -mt-2">
                <span className="text-gray-900 translate-y-2">buttje</span>
                <span className="text-[8.5px] text-gray-500 -tracking-wider -mt-1 italic">
                  So muk wi dat
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            <Link href="/#dienstleistungen" className="text-gray-900 hover:text-[var(--primary)]">
              Dienstleistungen
            </Link>
            <Link href="/#referenzen" className="text-gray-900 hover:text-[var(--primary)]">
              Referenzen
            </Link>
           
            <Link href="/#kontakt" className="text-gray-900 hover:text-[var(--primary)]">
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            <span className="sr-only">Menu öffnen</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/#dienstleistungen"
                className="text-gray-900 hover:text-[var(--primary)]"
                onClick={() => setIsOpen(false)}
              >
                Dienstleistungen
              </Link>
              <Link
                href="/#referenzen"
                className="text-gray-900 hover:text-[var(--primary)]"
                onClick={() => setIsOpen(false)}
              >
                Referenzen
              </Link>
              <Link
                href="/#vorteile"
                className="text-gray-900 hover:text-[var(--primary)]"
                onClick={() => setIsOpen(false)}
              >
                Vorteile
              </Link>
              <Link
                href="/#kontakt"
                className="text-gray-900 hover:text-[var(--primary)]"
                onClick={() => setIsOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 