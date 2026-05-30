'use client';

import { useActionState, useEffect, useRef } from 'react';
import { sendInquiry, type InquiryState } from '../actions/sendInquiry';
import { trackContactFormSubmit } from '../utils/gtag';

const initialState: InquiryState = { status: 'idle', message: '' };

const leistungen = [
  'Büro- und Kanzleireinigung',
  'Ordinations- und Praxisreinigung',
  'Gebäude- und Unterhaltsreinigung',
  'Facility Services',
  'Umzugs- und Endreinigung',
  'Sonstiges / Beratung',
];

const fieldClass =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[var(--primary)] focus:outline-none focus:ring-1 focus:ring-[var(--primary)] transition-colors';

export default function InquiryForm() {
  const [state, formAction, isPending] = useActionState(sendInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === 'success') {
      trackContactFormSubmit('angebot_anfordern');
      formRef.current?.reset();
    }
  }, [state.status]);

  if (state.status === 'success') {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)]">
          <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2 text-gray-900">Anfrage gesendet</h3>
        <p className="text-gray-600">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-4" noValidate>
      {/* Honeypot, visuell versteckt */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5 text-gray-800">
            Name <span className="text-[var(--primary)]">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Ihr Name" />
        </div>
        <div>
          <label htmlFor="firma" className="block text-sm font-medium mb-1.5 text-gray-800">Firma</label>
          <input id="firma" name="firma" type="text" autoComplete="organization" className={fieldClass} placeholder="Unternehmen" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="objekt" className="block text-sm font-medium mb-1.5 text-gray-800">Art des Objekts</label>
          <input id="objekt" name="objekt" type="text" className={fieldClass} placeholder="z. B. Büro, Kanzlei, Praxis" />
        </div>
        <div>
          <label htmlFor="telefon" className="block text-sm font-medium mb-1.5 text-gray-800">
            Telefon <span className="text-[var(--primary)]">*</span>
          </label>
          <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={fieldClass} placeholder="Für Ihren Rückruf" />
        </div>
      </div>

      <div>
        <label htmlFor="leistung" className="block text-sm font-medium mb-1.5 text-gray-800">Gewünschte Leistung</label>
        <select id="leistung" name="leistung" defaultValue="" className={fieldClass}>
          <option value="">Bitte wählen</option>
          {leistungen.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium mb-1.5 text-gray-800">Nachricht (optional)</label>
        <textarea id="nachricht" name="nachricht" rows={4} className={fieldClass} placeholder="Worum geht es konkret?" />
      </div>

      {state.status === 'error' && (
        <p className="text-sm text-red-600" role="alert">{state.message}</p>
      )}

      <button type="submit" disabled={isPending} className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed">
        {isPending ? 'Wird gesendet...' : 'Angebot anfordern'}
      </button>

      <p className="text-xs text-gray-500">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben gemäß unserer{' '}
        <a href="/datenschutz" className="underline hover:text-[var(--primary)]">Datenschutzerklärung</a> zu.
      </p>
    </form>
  );
}
