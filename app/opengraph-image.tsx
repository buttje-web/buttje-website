import { ImageResponse } from 'next/og';

export const alt = 'buttje, Premium Gebäudereinigung Wien';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Statisches OpenGraph-Bild im blau-weissen Stil der Seite.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          color: '#171717',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '90px',
          borderTop: '18px solid #159ec5',
        }}
      >
        <div style={{ display: 'flex', fontSize: 150, fontWeight: 700, letterSpacing: '-5px', color: '#159ec5' }}>
          buttje
        </div>
        <div style={{ marginTop: 24, fontSize: 44, fontWeight: 700, color: '#171717', maxWidth: 950, lineHeight: 1.2 }}>
          Premium Gebäudereinigung für Wiens Unternehmen
        </div>
        <div style={{ marginTop: 40, fontSize: 26, letterSpacing: '4px', textTransform: 'uppercase', color: '#6b7280' }}>
          Diskret · Zuverlässig · Makellos
        </div>
      </div>
    ),
    { ...size },
  );
}
