'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  EMAIL_ENC,
  PHONE_MOBILE_ENC,
  PHONE_MOBILE_DISPLAY_ENC,
  PHONE_OFFICE_ENC,
  PHONE_OFFICE_DISPLAY_ENC,
} from '../lib/contact';
import { trackEmailClick, trackPhoneCall } from '../utils/gtag';

// Dekodiert Base64 erst im Browser. Server gibt einen leeren String zurueck,
// sodass die Kontaktdaten nicht im gerenderten HTML-Quelltext landen.
const dec = (b64: string) => {
  if (typeof window === 'undefined') return '';
  try {
    return window.atob(b64);
  } catch {
    return '';
  }
};

const toTelHref = (num: string) => `tel:${num.replace(/[^+\d]/g, '')}`;

interface PhoneLinkProps {
  variant?: 'mobile' | 'office';
  /** true: dekodierte Nummer als sichtbarer Text anzeigen */
  display?: boolean;
  location?: string;
  className?: string;
  children?: ReactNode;
}

export function PhoneLink({
  variant = 'mobile',
  display = false,
  location = 'phone_link',
  className = '',
  children,
}: PhoneLinkProps) {
  const [num, setNum] = useState('');
  const [shown, setShown] = useState('');

  useEffect(() => {
    setNum(dec(variant === 'office' ? PHONE_OFFICE_ENC : PHONE_MOBILE_ENC));
    setShown(dec(variant === 'office' ? PHONE_OFFICE_DISPLAY_ENC : PHONE_MOBILE_DISPLAY_ENC));
  }, [variant]);

  return (
    <a
      href={num ? toTelHref(num) : undefined}
      onClick={() => num && trackPhoneCall(num, location)}
      className={className}
    >
      {children}
      {display ? shown : null}
    </a>
  );
}

interface EmailLinkProps {
  /** true: dekodierte Adresse als sichtbarer Text anzeigen */
  display?: boolean;
  location?: string;
  className?: string;
  children?: ReactNode;
}

export function EmailLink({
  display = false,
  location = 'email_link',
  className = '',
  children,
}: EmailLinkProps) {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(dec(EMAIL_ENC));
  }, []);

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      onClick={() => email && trackEmailClick(email, location)}
      className={className}
    >
      {children}
      {display ? email : null}
    </a>
  );
}

interface ObfuscatedTextProps {
  kind: 'email' | 'mobile' | 'office';
  className?: string;
}

// Reiner Text ohne Link, ebenfalls erst clientseitig zusammengesetzt.
export function ObfuscatedText({ kind, className = '' }: ObfuscatedTextProps) {
  const [val, setVal] = useState('');

  useEffect(() => {
    const enc =
      kind === 'email'
        ? EMAIL_ENC
        : kind === 'office'
          ? PHONE_OFFICE_DISPLAY_ENC
          : PHONE_MOBILE_DISPLAY_ENC;
    setVal(dec(enc));
  }, [kind]);

  return <span className={className}>{val}</span>;
}
