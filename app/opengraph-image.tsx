import { ImageResponse } from 'next/og';

export const alt = 'buttje';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#faf8f4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', color: '#1a1714', fontSize: 160, fontWeight: 300, letterSpacing: '0.02em', lineHeight: 1, fontFamily: 'sans-serif' }}>
          buttje
        </div>
        <div style={{ display: 'flex', marginTop: 32, color: '#1a1714', fontSize: 28, fontWeight: 300, letterSpacing: '0.18em', textTransform: 'lowercase', opacity: 0.5, fontFamily: 'sans-serif' }}>
          launching soon
        </div>
      </div>
    ),
    { ...size },
  );
}
