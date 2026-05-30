import Link from 'next/link';
import CallButton from './CallButton';

interface CtaBlockProps {
  location: string;
  heading?: string;
  text?: string;
}

// Wiederverwendbarer Call-to-Action-Block, optisch identisch zum Block am
// Seitenende ("Lernen Sie uns kennen"). Zwei Buttons: Jetzt anrufen, Angebot anfordern.
export default function CtaBlock({
  location,
  heading = 'Lernen Sie uns kennen',
  text = 'Am besten in einem kurzen Gespräch. Wir hören zu und finden die passende Lösung für Ihr Objekt.',
}: CtaBlockProps) {
  return (
    <section className="py-16 bg-gray-50 border-t">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{heading}</h2>
          <p className="text-lg text-gray-600 mb-8">{text}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CallButton location={location} />
            <Link href="/#angebot" className="btn-secondary">Angebot anfordern</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
