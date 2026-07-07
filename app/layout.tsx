import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  // Kanonischer Host (Apex leitet per 308 auf www weiter). Sorgt dafür, dass
  // relative canonical-/OG-URLs gegen buttje.at aufloesen statt gegen die
  // Vercel-Preview-Domain. Canonical wird pro Seite gesetzt (nicht hier),
  // damit Unterseiten nicht faelschlich auf "/" zeigen.
  metadataBase: new URL('https://www.buttje.at'),
  title: 'buttje',
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de-AT" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
