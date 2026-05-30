'use client';

import { useEffect, useState } from 'react';

// Wartbare Consent-Logik. Neue einwilligungspflichtige Kategorien koennen hier
// einfach ergaenzt werden (z.B. "marketing"), ohne die Komponenten umzubauen.
export type ConsentCategory = 'analytics';

export type Consent = Record<ConsentCategory, boolean>;

export const ALL_CATEGORIES: ConsentCategory[] = ['analytics'];

export const CONSENT_KEY = 'buttje_consent_v1';
export const CONSENT_CHANGE_EVENT = 'buttje:consentchange';
export const CONSENT_OPEN_EVENT = 'buttje:consentopen';

const allOf = (value: boolean): Consent =>
  ALL_CATEGORIES.reduce((acc, c) => ({ ...acc, [c]: value }), {} as Consent);

export const CONSENT_ACCEPT_ALL = (): Consent => allOf(true);
export const CONSENT_REJECT_ALL = (): Consent => allOf(false);

export function getStoredConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Consent>;
    return ALL_CATEGORIES.reduce(
      (acc, c) => ({ ...acc, [c]: !!parsed[c] }),
      {} as Consent,
    );
  } catch {
    return null;
  }
}

export function hasDecision(): boolean {
  return getStoredConsent() !== null;
}

export function setConsent(consent: Consent): void {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...consent, ts: Date.now() }));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: consent }));
}

// Banner / Einstellungen erneut oeffnen (z.B. aus dem Footer).
export function openConsentSettings(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}

// Hook: liefert den aktuellen Consent und aktualisiert sich bei Aenderungen.
export function useConsent(): Consent | null {
  const [consent, setConsentState] = useState<Consent | null>(null);

  useEffect(() => {
    setConsentState(getStoredConsent());
    const handler = () => setConsentState(getStoredConsent());
    window.addEventListener(CONSENT_CHANGE_EVENT, handler);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handler);
  }, []);

  return consent;
}
