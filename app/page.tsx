import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        position: 'relative',
        height: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#faf8f4',
        fontFamily: 'var(--font-inter), sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          color: '#1a1714',
          fontSize: 'clamp(44px, 11vw, 150px)',
          fontWeight: 450,
          letterSpacing: '0.02em',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        buttje
      </div>
      <div
        style={{
          marginTop: 'clamp(14px, 2.4vw, 26px)',
          color: '#1a1714',
          fontSize: 'clamp(11px, 1.4vw, 15px)',
          fontWeight: 300,
          letterSpacing: '0.18em',
          textTransform: 'lowercase',
          opacity: 0.6,
          userSelect: 'none',
        }}
      >
        launching soon
      </div>
      <Link
        href="/impressum"
        style={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#1a1714',
          fontSize: 11,
          fontWeight: 300,
          letterSpacing: '0.10em',
          opacity: 0.4,
          textDecoration: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Impressum
      </Link>
    </main>
  );
}
