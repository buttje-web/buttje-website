'use client';

import React, { useEffect, useRef } from 'react';
import GoogleMap from "./components/GoogleMap";
import Image from 'next/image';
import Link from 'next/link';

type Service = {
  title: string;
  description: string;
  image: string;
  customContent?: (service: Service) => React.ReactElement;
  link: string;
};

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const playVideo = async () => {
    const video = videoRef.current;
    if (video) {
      try { await video.play(); } catch (err) { console.log("Video autoplay failed:", err); }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.load();
    playVideo();

    const handleLoaded = () => playVideo();
    const handleInteraction = () => {
      playVideo();
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };

    video.addEventListener('loadeddata', handleLoaded);
    document.addEventListener('touchstart', handleInteraction);
    document.addEventListener('click', handleInteraction);

    return () => {
      video.removeEventListener('loadeddata', handleLoaded);
      document.removeEventListener('touchstart', handleInteraction);
      document.removeEventListener('click', handleInteraction);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-start md:items-center justify-center pt-32 pb-32 md:py-0" aria-label="Willkommen">
        {/* Hero Background Video */}
        <div className="absolute inset-0 w-full h-[140vh] md:h-full -translate-y-24 md:translate-y-0">
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
        </div>

        <div className="container-custom relative z-10 py-8 md:py-20 text-white">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center justify-center gap-0 md:gap-0">
              <div className="flex items-center justify-center gap-0 scale-[0.65] sm:scale-75 md:scale-100">
                <svg width="240" height="240" viewBox="0 0 20 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--primary)]">
                  <rect x="1" y="1" width="12" height="12" rx="0" stroke="currentColor" strokeWidth="0.7"/>
                  <rect x="15" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/>
                  <rect x="5" y="15" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/>
                  <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="0.7"/>
                </svg>
                <span className="text-[4.5rem] font-bold text-gray-900 translate-y-16">buttje</span>
              </div>
              <div className="mt-0 md:mt-4 w-full max-w-2xl mx-auto">
                <div className="max-w-[280px] sm:max-w-lg md:max-w-2xl mx-auto">
                  <span className="text-lg sm:text-xl md:text-2xl text-gray-900 italic block mb-6">
                    &ldquo;So muk wi dat – weil wir&apos;s besser können.&rdquo;
                  </span>
                  <p className="text-lg sm:text-xl md:text-3xl font-light text-gray-900">
                    Professionelle Dienstleistungen mit höchsten Standards für Qualität, Hygiene und Diskretion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dienstleistungen Section */}
      <section className="py-32 bg-white" aria-label="Dienstleistungen">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900" id="dienstleistungen">
              Unsere Dienstleistungen
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Bei buttje bieten wir mehr als Standard-Reinigungsdienste – wir liefern Perfektion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto" role="list">
            {([
              {
                title: "Gewerbliche Reinigung",
                description: "Maßgeschneiderte Lösungen für Büros, Kanzleien, Praxen und gehobene Geschäftsräume.",
                image: "/assets/mob_compressed.jpg",
                link: "/dienstleistungen/gewerbliche-reinigung"
              },
              {
                title: "Umzüge & Endreinigungen",
                description: "Perfekte Sauberkeit für Mieter, Eigentümer und Immobilienverwaltungen.",
                image: "/assets/moving_compressed.jpg",
                link: "/dienstleistungen/umzugs-und-endreinigung"
              },
              {
                title: "Facility Services",
                description: "Hausmeisterdienste, Pflege von Außenanlagen und Sonderreinigungen.",
                image: "/assets/team_compressed.jpg",
                link: "/dienstleistungen/facility-services"
              }
            ] as Service[]).map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 w-full ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1} cursor-pointer`}
                role="listitem"
              >
                <article>
                  <div className="relative w-full h-[300px]">
                    {service.customContent ? (
                      typeof service.customContent === 'function'
                        ? service.customContent(service)
                        : service.customContent
                    ) : (
                      <>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                          <p className="text-gray-200">{service.description}</p>
                        </div>
                      </>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Image Divider Section */}
      <section
        className="relative h-[500px] w-full bg-center bg-no-repeat md:bg-fixed md:bg-cover"
        style={{ backgroundImage: 'url("/assets/contract_compressed.jpg")', backgroundPosition: 'center 30%', backgroundSize: 'cover' }}
      />

      {/* USP Section */}
      <section className="py-20 bg-white" aria-label="Vorteile">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900" id="vorteile">
            Unser Qualitätsanspruch – Weil es besser geht
          </h2>
          <p className="text-2xl text-center mb-16 text-[var(--primary)]">
            &ldquo;So muk wi dat – weil wir&apos;s besser können.&rdquo;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" role="list">
            {[
              { title: "Perfektion bis ins Detail", description: "Wir reinigen nicht nur, wir optimieren die Umgebung." },
              { title: "Geschultes Personal", description: "Unsere Fachkräfte arbeiten diskret, effizient und professionell." },
              { title: "Höchste Hygienestandards", description: "Speziell für anspruchsvolle Branchen wie Gesundheitswesen, Kanzleien und Luxusimmobilien." },
              { title: "Exklusive Optik", description: "Unser Team tritt auf wie in einem Fünf-Sterne-Hotel: sauber, einheitlich und professionell." },
              { title: "Flexible Verträge", description: "Keine Knebelverträge – wenn Sie unzufrieden sind, können Sie sofort kündigen." }
            ].map((usp, index) => (
              <article
                key={index}
                className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}`}
                role="listitem"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">{usp.title}</h3>
                <p className="text-gray-800">{usp.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pt-0 pb-20 bg-white" aria-label="Über uns">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white backdrop-blur-sm rounded-xl shadow-lg overflow-hidden slide-in-right animate-delay-1">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">buttje ist mehr als ein Name</h2>
                <div className="prose prose-lg text-gray-800">
                  <p className="mb-8">
                    In Hamburg haben wir gelernt, dass echte Perfektion nicht laut sein muss. Sie zeigt sich in der Sorgfalt, in der Beständigkeit, in dem Wissen, dass ein Job erst dann fertig ist, wenn er es verdient hat, als &quot;fertig&quot; bezeichnet zu werden.
                  </p>
                  <div className="flex justify-center">
                    <a href="/ueber-uns" className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors">
                      Mehr über uns erfahren
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Referenzen Section */}
      <section className="py-20 bg-white" aria-label="Referenzen">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900" id="referenzen">
            Diskretion – Vertrauen durch Verschwiegenheit
          </h2>
          <article className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-8 slide-in-left animate-delay-1">
            <p className="text-xl text-gray-800">
              Diskretion ist keine Option – sie ist unser Standard. buttje steht für absolute Vertraulichkeit und schützt die Privatsphäre seiner Kunden konsequent.
            </p>
            <div className="text-left w-full space-y-6">
              <div className="space-y-4">
                <p className="text-gray-800">✔️ Keine Kundenreferenzen, keine Fotos, keine Weitergabe von Informationen.</p>
                <p className="text-gray-800">✔️ Unsere Mitarbeiter sind geschult, diskret zu agieren – wie unsichtbar, aber effektiv.</p>
                <p className="text-gray-800">✔️ Speziell für Kanzleien, Arztpraxen und Unternehmen mit sensiblen Daten.</p>
              </div>
            </div>
            <p className="text-xl font-semibold text-[var(--primary)]">Mit buttje genießen Sie höchste Sauberkeit – ohne Spuren zu hinterlassen.</p>
          </article>
        </div>
      </section>

      {/* Neuigkeiten Section */}
      <section className="py-32 bg-gray-50" aria-label="Neuigkeiten">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900" id="neuigkeiten">Neuigkeiten</h2>
