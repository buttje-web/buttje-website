import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import CtaBlock from '../../components/CtaBlock';
import { PhoneLink } from '../../components/ObfuscatedContact';
import { SITE_URL } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Umzüge & Endreinigung Wien | buttje',
  description:
    'Gewerbliche Umzüge und Endreinigungen in Wien. Besenreine Übergabe für Büros, Kanzleien und Hausverwaltungen. Jetzt anfragen.',
  alternates: { canonical: '/leistungen/umzuege-und-endreinigungen' },
  openGraph: {
    title: 'Umzüge & Endreinigung Wien | buttje',
    description:
      'Gewerbliche Umzüge und Endreinigungen in Wien. Besenreine Übergabe für Büros, Kanzleien und Hausverwaltungen. Jetzt anfragen.',
    url: `${SITE_URL}/leistungen/umzuege-und-endreinigungen`,
    type: 'website',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_URL}/#leistungen` },
    { '@type': 'ListItem', position: 3, name: 'Umzüge & Endreinigungen', item: `${SITE_URL}/leistungen/umzuege-und-endreinigungen` },
  ],
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Endreinigung',
  name: 'Umzüge & Endreinigungen',
  provider: { '@type': 'CleaningService', name: 'buttje', '@id': `${SITE_URL}/#business` },
  areaServed: { '@type': 'City', name: 'Wien' },
  url: `${SITE_URL}/leistungen/umzuege-und-endreinigungen`,
};

const zielgruppen = [
  {
    title: 'Kanzleien und Büros',
    text: 'Ein Standortwechsel darf den Betrieb nicht lahmlegen. Wir organisieren den Umzug so, dass die Arbeit weiterläuft, und gehen mit Akten und Equipment so diskret um, wie es Kanzleien und Büros erwarten.',
  },
  {
    title: 'Hausverwaltungen',
    text: 'Bei Mieterwechsel zählt Tempo. Unsere Endreinigung macht Objekte schnell wieder vermietbar, ohne dass Sie nachbessern lassen müssen. Ein Anruf, ein Ergebnis.',
  },
  {
    title: 'Praxen und Ordinationen',
    text: 'Die Übergabe von Praxisräumen verlangt Sorgfalt und Hygiene. Wir bereiten Ordinationen für die Übergabe vor und beachten dabei die Anforderungen, die im Gesundheitsbereich gelten.',
  },
];

const kacheln = [
  { title: 'Gewerbliche Umzüge', description: 'Professionelle Umzüge für Unternehmen und Kanzleien' },
  { title: 'Endreinigungen', description: 'Gründliche Reinigung nach Umzügen' },
  { title: 'Objektübergaben', description: 'Professionelle Übergabe von Räumlichkeiten' },
  { title: 'Büroausstattung', description: 'Demontage und Montage von Büromöbeln' },
  { title: 'Verpackung & Transport', description: 'Sichere Verpackung und Transport von Büroausstattung' },
  { title: 'Qualitätskontrolle', description: 'Finale Kontrolle und Übergabe' },
];

export default function UmzuegeUndEndreinigungen() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      {/* Hero */}
      <div className="h-[60vh] min-h-[500px] relative">
        <Image
          src="/assets/moving_compressed.jpg"
          alt="buttje bei Umzug und Endreinigung eines Büros in Wien"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="container-custom pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Umzüge & Endreinigungen</h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Professionelle Umzüge und Endreinigungen für gewerbliche Objekte
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Professionelle Umzüge und Endreinigungen für gewerbliche Objekte in Wien, mit höchsten Standards für
              Qualität und Diskretion. Wenn ein Büro oder eine Kanzlei den Standort wechselt, übernimmt buttje den
              geordneten Ablauf, vom Verpacken bis zur besenreinen Übergabe.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Endreinigung mit Übergabe</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Wenn der Auszug ansteht, zählt jedes Detail. buttje übernimmt die Endreinigung nach dem Auszug, damit
                die Übergabe an Vermieter oder Hausverwaltung reibungslos läuft. Besenrein ist für uns die Untergrenze,
                nicht das Ziel.
              </p>
              <p>
                Wir reinigen Böden, Fenster, Sanitär und alle Flächen so, dass die Räume bei der Übergabe einen
                einwandfreien Eindruck machen. Auf Wunsch dokumentieren wir das Ergebnis, damit es bei der Abnahme keine
                Diskussion gibt. Endreinigung in Wien, die das Kapitel sauber abschließt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBlock
        location="leistung_umzuege_mitte"
        heading="Jetzt unverbindlich anfragen"
        text="Ein kurzer Anruf genügt. Wir vereinbaren eine kostenlose Begehung und erstellen Ihr Angebot."
      />

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Für wen wir arbeiten</h2>
            <div className="space-y-8">
              {zielgruppen.map((z) => (
                <div key={z.title}>
                  <h3 className="text-xl font-semibold mb-2 text-[var(--primary)]">{z.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{z.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto" role="list">
            {kacheln.map((service, index) => (
              <article
                key={service.title}
                className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}`}
                role="listitem"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{service.title}</h3>
                <p className="text-gray-800">{service.description}</p>
              </article>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Weitere Leistungen</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/leistungen/gewerbliche-reinigung" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                Gewerbliche Reinigung
              </Link>
              <Link href="/leistungen/facility-services" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                Facility Services
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PhoneLink variant="mobile" location="leistung_umzuege" className="btn-primary">Jetzt anfragen (Mobil)</PhoneLink>
              <PhoneLink variant="office" location="leistung_umzuege" className="btn-primary">Jetzt anfragen (Büro)</PhoneLink>
              <Link href="/#kontakt" className="btn-secondary">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}
