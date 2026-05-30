'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CallButton from './components/CallButton';
import WhatsAppButton from './components/WhatsAppButton';
import GoogleMap from './components/GoogleMap';
import PhoneIcon from './components/PhoneIcon';
import { PhoneLink, EmailLink, ObfuscatedText } from './components/ObfuscatedContact';

const services = [
  {
    title: 'Gewerbliche Reinigung',
    description: 'Maßgeschneiderte Lösungen für Büros, Kanzleien, Praxen und gehobene Geschäftsräume.',
    image: '/assets/mob_compressed.jpg',
    link: '/leistungen/gewerbliche-reinigung',
  },
  {
    title: 'Umzüge & Endreinigungen',
    description: 'Perfekte Sauberkeit für Mieter, Eigentümer und Immobilienverwaltungen.',
    image: '/assets/moving_compressed.jpg',
    link: '/leistungen/umzuege-und-endreinigungen',
  },
  {
    title: 'Facility Services',
    description: 'Hausmeisterdienste, Pflege von Außenanlagen und Sonderreinigungen.',
    image: '/assets/team_compressed.jpg',
    link: '/leistungen/facility-services',
  },
];

const trust = [
  { title: 'Diskret', text: 'Geschultes Personal, das vertraulich arbeitet. Keine Weitergabe von Informationen.' },
  { title: 'Zuverlässig', text: 'Feste Ansprechpartner und verbindliche Termine, auf die Sie sich verlassen können.' },
  { title: 'Konzessioniert', text: 'Konzessioniertes Reinigungsgewerbe in Wien, fachlich befugt und geprüft.' },
  { title: 'Versichert', text: 'Betrieblich versichert, inklusive dokumentiertem Schlüsselmanagement.' },
];

const faqs = [
  {
    question: 'Ist buttje ein eingetragener und versicherter Reinigungsbetrieb?',
    answer:
      'Ja. buttje e.U. ist ein im Firmenbuch eingetragener, reglementierter Gebäudereinigungsbetrieb mit Befähigungsnachweis, Mitglied der Wirtschaftskammer Wien und vollversichert.',
  },
  {
    question: 'Wie geht buttje mit sensiblen Bereichen wie Kanzleien oder Praxen um?',
    answer:
      'Mit geschultem, fest eingeteiltem Personal, dokumentierter Schlüsselübergabe und absoluter Verschwiegenheit. Diskretion ist bei buttje Grundlage, kein Zusatz.',
  },
  {
    question: 'Wie läuft eine Anfrage bei buttje ab?',
    answer:
      'In drei Schritten. Sie senden eine Anfrage, buttje vereinbart eine kostenlose Begehung vor Ort, danach erhalten Sie ein unverbindliches Angebot.',
  },
  {
    question: 'Was kostet eine Reinigung bei buttje?',
    answer:
      'Der Preis richtet sich nach Ihrem Objekt, nach Größe, Reinigungsintervall und Anforderungen. Wir nennen keine Pauschalpreise von der Stange, sondern vereinbaren eine Begehung vor Ort und erstellen danach ein individuelles, unverbindliches Angebot.',
  },
  {
    question: 'Wie schnell ist ein Termin möglich?',
    answer:
      'Für die erste Begehung melden wir uns kurzfristig, meist innerhalb weniger Tage. Den genauen Reinigungsbeginn stimmen wir auf Ihren Betrieb ab, viele Kunden starten kurz nach dem Angebot.',
  },
  {
    question: 'Arbeitet immer dasselbe Team bei mir?',
    answer:
      'Ja. buttje arbeitet mit festen Teams und einem festen Ansprechpartner, ohne wechselndes Personal, das jedes Mal neu eingewiesen werden muss. Das ist die Grundlage für Vertrauen und gleichbleibende Qualität.',
  },
  {
    question: 'In welchen Bezirken sind Sie tätig?',
    answer:
      'buttje arbeitet in den inneren Bezirken Wiens, vom 1. Bezirk über Landstraße, Wieden, Margareten, Mariahilf, Neubau und Josefstadt bis Alsergrund.',
  },
];

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Slide-in beim Scrollen.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' },
    );
    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Video zuverlässig starten (auch auf iOS).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const tryPlay = () => video.play().catch(() => {});
    tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    return () => video.removeEventListener('loadeddata', tryPlay);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center" aria-label="Einstieg">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="object-cover w-full h-full"
            src="/assets/5sec_uncompressed.mp4"
            poster="/assets/hero_background.jpg"
            controls={false}
          />
          {/* Helle Lasur für Lesbarkeit der dunklen Headline */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/60" />
        </div>

        <div className="container-custom relative z-10 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 leading-[1.05]">
              Professionelle Gebäudereinigung für Wiens Unternehmen
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
              Büro, Kanzlei, Ordination, Hotel oder Hausverwaltung. Diskret, zuverlässig und makellos.
              Premium-Reinigung mit festen Ansprechpartnern.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <CallButton location="hero" />
              <Link href="#angebot" className="btn-secondary">Angebot anfordern</Link>
            </div>
            <p className="mt-5 text-sm text-gray-700">
              Direkt erreichbar:{' '}
              <PhoneLink
                variant="mobile"
                display
                location="hero"
                className="font-semibold text-[var(--primary)] hover:underline"
              />
            </p>
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-24 bg-white" aria-label="Leistungen">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900" id="leistungen">
              Unsere Leistungen
            </h2>
            <p className="text-lg text-gray-600">
              buttje übernimmt die professionelle Gebäudereinigung für Unternehmen in den inneren Bezirken Wiens,
              vom 1. Bezirk bis Alsergrund, Mariahilf und Margareten. Ob Büroreinigung, Unterhaltsreinigung oder
              Sonderreinigung: Sie bekommen feste Teams, einen festen Ansprechpartner und gleichbleibende Qualität.
              Kein wechselndes Personal, keine Überraschungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto" role="list">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href={service.link}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}`}
                role="listitem"
              >
                <article className="relative w-full h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-200 text-sm">{service.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Foto-Trenner */}
      <section
        className="relative h-[420px] w-full bg-center bg-no-repeat md:bg-fixed bg-cover"
        style={{ backgroundImage: 'url("/assets/contract_compressed.jpg")', backgroundPosition: 'center 30%' }}
        aria-hidden="true"
      />

      {/* Warum buttje */}
      <section className="py-24 bg-white" aria-label="Warum buttje">
        <div className="container-custom">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900" id="vorteile">
              Verlässlichkeit, die man bemerkt
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Premium-Reinigung heißt für uns: gleichbleibende Qualität, feste Teams und ein Auftreten,
              das zu Ihrem Unternehmen passt.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trust.map((item, index) => (
              <div key={item.title} className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}`}>
                <h3 className="text-lg font-bold mb-2 text-[var(--primary)]">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diskretion */}
      <section className="py-24 bg-gray-50" aria-label="Diskretion">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900" id="diskretion">
            Diskretion, Vertrauen durch Verschwiegenheit
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10 space-y-8 slide-in-left animate-delay-1">
            <p className="text-xl text-gray-800 text-center">
              Diskretion ist keine Option, sie ist unser Standard. buttje steht für absolute Vertraulichkeit
              und schützt die Privatsphäre seiner Kunden konsequent.
            </p>
            <ul className="space-y-4">
              {[
                'Keine Weitergabe von Informationen. Verschwiegenheit ist selbstverständlich.',
                'Unsere Mitarbeiter sind geschult, diskret zu agieren, unauffällig aber effektiv.',
                'Speziell für Kanzleien, Ordinationen und Unternehmen mit sensiblen Daten.',
              ].map((point) => (
                <li key={point} className="flex gap-3">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-[var(--primary)] text-center">
              Höchste Sauberkeit, ohne Spuren zu hinterlassen.
            </p>
          </div>
        </div>
      </section>

      {/* Angebot anfordern */}
      <section id="angebot" className="py-24 bg-white" aria-label="Angebot anfordern">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Angebot anfordern</h2>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Schildern Sie uns kurz Ihr Objekt. Wir vereinbaren eine Begehung vor Ort und erstellen
              danach ein unverbindliches Angebot. Am schnellsten erreichen Sie uns telefonisch oder
              per WhatsApp.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <CallButton location="angebot_section" />
              <WhatsAppButton />
            </div>
            <p className="mt-6 text-sm text-gray-500">
              <ObfuscatedText kind="mobile" /> · <ObfuscatedText kind="email" />
            </p>
          </div>
        </div>
      </section>

      {/* Haeufige Fragen */}
      <section className="py-24 bg-gray-50 border-t border-gray-100" aria-label="Häufige Fragen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Häufige Fragen</h2>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-y border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-gray-900 list-none">
                  {faq.question}
                  <svg className="h-5 w-5 flex-shrink-0 text-[var(--primary)] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 bg-white" aria-label="Kontakt">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">So erreichen Sie uns</h2>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500">Adresse</dt>
                  <dd className="mt-1 text-lg text-gray-800">Graben 28/1/12, 1010 Wien</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500">Telefon</dt>
                  <dd className="mt-1">
                    <PhoneLink
                      variant="mobile"
                      display
                      location="kontakt_section"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-[var(--primary)]"
                    >
                      <PhoneIcon className="w-5 h-5 text-[var(--primary)]" />
                    </PhoneLink>
                    <div className="mt-1 text-sm text-gray-500">
                      Büro:{' '}
                      <PhoneLink
                        variant="office"
                        display
                        location="kontakt_section"
                        className="hover:text-[var(--primary)]"
                      />
                    </div>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wider text-gray-500">E-Mail</dt>
                  <dd className="mt-1 text-lg">
                    <EmailLink
                      display
                      location="kontakt_section"
                      className="text-gray-900 hover:text-[var(--primary)]"
                    />
                  </dd>
                </div>
              </dl>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <CallButton location="kontakt_section" />
                <WhatsAppButton />
              </div>
            </div>
            <GoogleMap />
          </div>
        </div>
      </section>
    </>
  );
}
