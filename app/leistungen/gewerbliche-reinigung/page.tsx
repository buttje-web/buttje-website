import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '../../components/ScrollReveal';
import { SITE_URL } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Büroreinigung & Gewerbereinigung Wien | buttje',
  description:
    'Büroreinigung, Kanzleireinigung und Praxisreinigung in Wien. Feste Teams, diskret, zuverlässig. Unverbindliche Anfrage und Begehung vor Ort.',
  alternates: { canonical: '/leistungen/gewerbliche-reinigung' },
  openGraph: {
    title: 'Büroreinigung & Gewerbereinigung Wien | buttje',
    description:
      'Büroreinigung, Kanzleireinigung und Praxisreinigung in Wien. Feste Teams, diskret, zuverlässig. Unverbindliche Anfrage und Begehung vor Ort.',
    url: `${SITE_URL}/leistungen/gewerbliche-reinigung`,
    type: 'website',
  },
};

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Leistungen', item: `${SITE_URL}/#leistungen` },
    { '@type': 'ListItem', position: 3, name: 'Gewerbliche Reinigung', item: `${SITE_URL}/leistungen/gewerbliche-reinigung` },
  ],
};

const serviceLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Büroreinigung',
  name: 'Gewerbliche Reinigung',
  provider: { '@type': 'CleaningService', name: 'buttje', '@id': `${SITE_URL}/#business` },
  areaServed: { '@type': 'City', name: 'Wien' },
  url: `${SITE_URL}/leistungen/gewerbliche-reinigung`,
};

const zielgruppen = [
  {
    title: 'Kanzleien',
    text: 'Rechtsanwalts- und Notariatskanzleien arbeiten mit vertraulichen Unterlagen und sensiblen Mandantendaten. Unsere Reinigung findet diskret statt, durch geschultes Personal, das versteht, was Verschwiegenheit bedeutet. Akten bleiben unangetastet, Vertrauen bleibt gewahrt. Kanzleireinigung in Wien, wie sie sein soll.',
  },
  {
    title: 'Praxen und Ordinationen',
    text: 'Arztpraxen, Ordinationen und Gesundheitseinrichtungen brauchen mehr als oberflächliche Sauberkeit. Wir reinigen nach erhöhten Hygienestandards, mit Blick auf Wartebereiche, Behandlungsräume und Sanitär. Ordinationsreinigung und Praxisreinigung, die der Verantwortung gerecht wird.',
  },
  {
    title: 'Büros',
    text: 'Vom Einzelbüro bis zur ganzen Etage: buttje hält Ihre Geschäftsräume in Schuss. Regelmäßige Büroreinigung, abgestimmt auf Größe und Nutzung, damit Ihre Mitarbeiter und Ihre Kunden jeden Tag denselben professionellen Eindruck bekommen.',
  },
  {
    title: 'Hotels',
    text: 'Für Hotels und Beherbergungsbetriebe reinigen wir die Bereiche, die zählen: Lobby, öffentliche Flächen und Sanitäranlagen. Sauberkeit ist im Gastgewerbe kein Detail, sondern der erste Eindruck. Den nehmen wir ernst.',
  },
  {
    title: 'Hausverwaltungen',
    text: 'Hausverwaltungen und Immobilienverwaltungen vertrauen uns Treppenhäuser, Allgemeinflächen und die laufende Objektbetreuung an. Stiegenhausreinigung und Hausbetreuung in den inneren Bezirken Wiens, verlässlich und ohne ständige Kontrolle.',
  },
];

const kacheln = [
  { title: 'Büroreinigung', description: 'Professionelle Reinigung von Büros & Geschäftsräumen' },
  { title: 'Praxisreinigung', description: 'Hygienische Reinigung für Arztpraxen & Gesundheitseinrichtungen' },
  { title: 'Fensterreinigung', description: 'Streifenfreie Reinigung von Fenstern & Glasflächen' },
  { title: 'Teppichreinigung', description: 'Gründliche Reinigung von Teppichen & Polstern' },
  { title: 'Grundreinigung', description: 'Intensive Reinigung für stark beanspruchte Bereiche' },
];

export default function GewerblicheReinigung() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      {/* Hero */}
      <div className="h-[60vh] min-h-[500px] relative">
        <Image
          src="/assets/mob_compressed.jpg"
          alt="Reinigungskraft bei der Büroreinigung in Wien"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="container-custom pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gewerbliche Reinigung</h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Perfekte Sauberkeit für Unternehmen, Kanzleien & gehobene Geschäftsräume
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed">
              Ein sauberes Arbeitsumfeld sorgt für einen professionellen Eindruck und steigert das Wohlbefinden
              Ihrer Mitarbeiter. buttje reinigt Büros, Kanzleien, Ordinationen und gehobene Geschäftsräume in den
              inneren Bezirken Wiens, zuverlässig, diskret und mit festen Teams.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900">Unterhaltsreinigung mit System</h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Die regelmäßige Unterhaltsreinigung ist das Rückgrat eines gepflegten Geschäftsraums. buttje plant
                feste Reinigungsintervalle, abgestimmt auf Ihren Betrieb, und hält sie ein. Ob täglich, mehrmals die
                Woche oder wöchentlich: Sie entscheiden, wir liefern.
              </p>
              <p>
                Wir reinigen dann, wenn es Ihren Ablauf nicht stört. Vor Geschäftsbeginn, nach Feierabend oder in den
                Randzeiten, je nachdem, was für Sie passt. So bleibt die Büroreinigung unsichtbar und das Ergebnis
                sichtbar. Saubere Arbeitsflächen, gepflegte Sanitärbereiche, klare Glasflächen und ein Raum, der jeden
                Morgen denselben Standard hat.
              </p>
              <p>
                Für Unternehmen in den inneren Bezirken Wiens, von der Innenstadt bis Alsergrund, bedeutet das einen
                festen Reinigungsrhythmus ohne ständige Absprachen. Sie haben einen Ansprechpartner, ein eingespieltes
                Team und keine wechselnden Gesichter, die jedes Mal neu eingewiesen werden müssen.
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

          {/* Kachelliste */}
          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto" role="list">
            {kacheln.map((service, index) => (
              <article
                key={service.title}
                className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}${index === kacheln.length - 1 && kacheln.length % 2 === 1 ? ' md:col-span-2 md:mx-auto md:w-[calc(50%-1rem)] md:text-center' : ''}`}
                role="listitem"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{service.title}</h3>
                <p className="text-gray-800">{service.description}</p>
              </article>
            ))}
          </div>

          {/* Weitere Leistungen */}
          <div className="max-w-3xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Weitere Leistungen</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/leistungen/umzuege-und-endreinigungen" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                Umzüge & Endreinigungen
              </Link>
              <Link href="/leistungen/facility-services" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)]">
                Facility Services
              </Link>
            </div>
          </div>

          {/* CTA */}
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
