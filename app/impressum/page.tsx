import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | buttje',
  robots: { index: true, follow: false },
  alternates: { canonical: '/impressum' },
};

const s = {
  page: {
    minHeight: '100dvh',
    background: '#faf8f4',
    fontFamily: 'var(--font-inter), sans-serif',
    color: '#1a1714',
    padding: 'clamp(40px, 8vw, 72px) clamp(28px, 6vw, 72px)',
  } as React.CSSProperties,
  back: {
    display: 'inline-block',
    marginBottom: 52,
    color: '#1a1714',
    fontSize: 12,
    fontWeight: 300,
    letterSpacing: '0.08em',
    opacity: 0.45,
    textDecoration: 'none',
  } as React.CSSProperties,
  wrap: {
    maxWidth: 440,
  } as React.CSSProperties,
  h1: {
    fontSize: 18,
    fontWeight: 400,
    letterSpacing: '0.03em',
    marginBottom: 36,
    marginTop: 0,
  } as React.CSSProperties,
  block: {
    marginBottom: 28,
    lineHeight: 1.75,
    fontSize: 14,
    fontWeight: 300,
  } as React.CSSProperties,
  label: {
    fontWeight: 400,
    marginBottom: 6,
    display: 'block',
  } as React.CSSProperties,
  a: {
    color: '#1a1714',
    textDecoration: 'none',
  } as React.CSSProperties,
};

export default function ImpressumPage() {
  return (
    <main style={s.page}>
      <Link href="/" style={s.back}>← buttje</Link>

      <div style={s.wrap}>
        <h1 style={s.h1}>Impressum</h1>

        <div style={s.block}>
          <p style={{ margin: 0 }}>buttje e.U.</p>
          <p style={{ margin: 0 }}>Inhaber: Rami Ibraimi</p>
          <p style={{ margin: 0 }}>Graben 28/1/12</p>
          <p style={{ margin: 0 }}>1010 Wien</p>
          <p style={{ margin: 0 }}>Österreich</p>
        </div>

        <div style={s.block}>
          <p style={{ margin: 0 }}>Firmenbuch: FN 648848p</p>
          <p style={{ margin: 0 }}>Firmenbuchgericht: Handelsgericht Wien</p>
          <p style={{ margin: 0 }}>UID: ATU81765216</p>
        </div>

        <div style={s.block}>
          <span style={s.label}>Kontakt</span>
          <p style={{ margin: 0 }}>
            Telefon:{' '}
            <a href="tel:+4312366326442" style={s.a}>+43 1 236 632 64 42</a>
          </p>
          <p style={{ margin: 0 }}>
            Mobil:{' '}
            <a href="tel:+4367762080802" style={s.a}>+43 677 62080802</a>
          </p>
          <p style={{ margin: 0 }}>
            E-Mail:{' '}
            <a href="mailto:info@buttje.at" style={s.a}>info@buttje.at</a>
          </p>
        </div>
      </div>
    </main>
  );
}
