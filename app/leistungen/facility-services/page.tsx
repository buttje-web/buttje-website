import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { SITE_URL } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Facility Services & Hausbetreuung Wien | buttje',
  description:
    'Facility Services und Hausbetreuung in Wien. Objektbetreuung, Hausmeisterdienste und Sonderreinigung für Gewerbeimmobilien.',
  alternates: { canonical: '/leistungen/facility-services' },
  openGraph: {
    title: 'Facility Services & Hausbetreuung Wien | buttje',
    description:
      'Facility Services und Hausbetreuung in Wien. Objektbetreuung, Hausmeisterdienste und Sonderreinigung für Gewerbeimmobilien.',
    url: `${SITE_URL}/leistungen/facility-services`,
    type: 'website',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_URL}/#leistungen` },
    { '@type': 'ListItem', position: 3, name: 'Facility Services', item: `${SITE_URL}/leistungen/facility-services` },
  ],
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Facility Management',
  name: 'Facility Services',
  provider: { '@type': 'CleaningService', name: 'buttje', '@id': `${SITE_URL}/#business` },
  areaServed: { '@type': 'City', name: 'Wien' },
  url: `${SITE_URL}/leistungen/facility-services`,
};

const zielgruppen = [
  {
    title: 'Hausverwaltungen',
    text: 'Treppenhäuser, Außenanlagen, Müllmanagement: Wir betreuen Ihre Objekte laufend und verlässlich. Hausverwaltungen sparen sich die ständige Kontrolle, weil das Ergebnis stimmt.',
  },
  {
    title: 'Büros und Unternehmen',
    text: 'Hausmeisterdienste und Instandhaltung für Gewerbeobjekte. Kleine Reparaturen, regelmäßige Kontrollen, gepflegte Räume. Damit Sie sich um Ihr Geschäft kümmern können, nicht um das Gebäude.',
  },
  {
    title: 'Hotels',
    text: 'Öffentliche Bereiche und Außenanlagen sind die Visitenkarte eines Hotels. Wir halten sie in einem Zustand, der zum Anspruch Ihres Hauses passt.',
  },
];

const kacheln = [
  { title: 'Hausmeisterservice', description: 'Professionelle Betreuung von Immobilien & Außenanlagen' },
  { title: 'Grünflächenpflege', description: 'Gartenpflege & Landschaftsgestaltung' },
  { title: 'Winterdienst', description: 'Schnee- & Eisbeseitigung für sichere Wege' },
  { title: 'Wartung & Instandhaltung', description: 'Regelmäßige Kontrollen & Reparaturen' },
  { title: 'Müllmanagement', description: 'Organisation & Durchführung der Müllentsorgung' },
];

export default function FacilityServices() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      {/* Hero */}
      <div className="h-[60vh] min-h-[500px] relative">
        <Image
          src="/assets/team_compressed.jpg"
          alt="Team von buttje bei der Objektbetreuung in Wien"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="container-custom pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Facility Services</h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Hausmeisterdienste & Sonderreinigungen für Gewerbeimmobilien
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Ob Bürogebäude, Wohnhaus oder Gewerbeobjekt, buttje bietet umfassende Facility Services, damit Ihre
              Immobilie stets gepflegt und instand gehalten bleibt. Wir betreuen Objekte in den inneren Bezirken Wiens
              als fester Partner mit klaren Abläufen.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Objektbetreuung aus einer Hand</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Eine Immobilie braucht mehr als Reinigung. Sie braucht laufende Betreuung. buttje übernimmt die
                Objektbetreuung als fester Partner, von Hausmeisterdiensten über die Pflege von Außenanlagen bis zu
                Sonderreinigungen, die nicht in den Alltag passen.
              </p>
              <p>
                Statt mehrere Dienstleister zu koordinieren, haben Sie einen Ansprechpartner für alles. Das spart
                Aufwand und sorgt dafür, dass nichts liegen bleibt. Hausbetreuung und Facility Management in den inneren
                Bezirken Wiens, mit klaren Abläufen und einem festen Team, das Ihr Objekt kennt.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Für wen wir arbeiten</h2>
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
                className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}${index === kacheln.length - 1 && kacheln.length % 2 === 1 ? ' md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)]' : ''}`}
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
              <Link href="/leistungen/umzuege-und-endreinigungen" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                Umzüge & Endreinigungen
              </Link>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+4367762080802" className="btn-primary">Jetzt anfragen (Mobil)</a>
              <a href="tel:+4312366326442" className="btn-primary">Jetzt anfragen (Büro)</a>
              <Link href="/#kontakt" className="btn-secondary">Mehr erfahren</Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </>
  );
}
