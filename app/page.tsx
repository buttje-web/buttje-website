'use client';

import GoogleMap from "./components/GoogleMap";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = async () => {
    const video = videoRef.current;
    if (video) {
      try {
        await video.play();
      } catch (err) {
        console.log("Video autoplay failed:", err);
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force load the video
      video.load();
      
      // Try to play immediately
      playVideo();
      
      // Add loadeddata event listener to try playing again once video is loaded
      const handleLoaded = () => {
        playVideo();
      };
      
      video.addEventListener('loadeddata', handleLoaded);
      
      // Try to play video again after any user interaction
      const handleInteraction = () => {
        playVideo();
        // Remove listeners after first interaction
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };

      document.addEventListener('touchstart', handleInteraction);
      document.addEventListener('click', handleInteraction);

      return () => {
        video.removeEventListener('loadeddata', handleLoaded);
        document.removeEventListener('touchstart', handleInteraction);
        document.removeEventListener('click', handleInteraction);
      };
    }
  }, []);

  const images = [
    '/assets/contract_bg.png',
    '/assets/cleaning_bg.png',
    '/assets/moving_bg.png',
    '/assets/craftsman_bg.png'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-end justify-center pb-32" aria-label="Willkommen">
        {/* Side Navigation Arrows */}
        <button 
          onClick={() => setCurrentImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-black/20 rounded-full transition-colors"
          aria-label="Vorheriges Bild"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={() => setCurrentImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white hover:bg-black/20 rounded-full transition-colors"
          aria-label="Nächstes Bild"
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Slideshow */}
        <div className="absolute inset-0 w-full h-full">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
        
        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-8">
              FLEXIBEL, FREI, PROFESSIONELL
            </h1>
            <p className="text-base md:text-3xl text-white font-light max-w-3xl mb-8 md:mb-12 px-4 md:px-0">
              Entdecken Sie professionelle Reinigungsdienstleistungen mit höchsten Standards für Qualität, Hygiene und Diskretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center w-full px-4 md:px-0">
              <a href="#kontakt" className="btn-primary text-base md:text-lg">
                Jetzt Kontakt aufnehmen
              </a>
              <a href="#dienstleistungen" className="btn-secondary text-base md:text-lg">
                Unsere Leistungen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logo and Benefits Section - New */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Logo and buttje */}
            <div className="flex items-center justify-center gap-0 scale-[0.65] sm:scale-75 md:scale-100">
              <svg 
                width="240" 
                height="240" 
                viewBox="0 0 20 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--primary)]"
              >
                <rect x="1" y="1" width="12" height="12" rx="0" stroke="currentColor" strokeWidth="0.7"/>
                <rect x="15" y="5" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/>
                <rect x="5" y="15" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="0.7"/> 
                <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="0.7"/>
              </svg>
              <span className="text-[4.5rem] font-bold text-gray-900 translate-y-16">buttje</span>
            </div>

            {/* Checkmarks Column */}
            <div className="flex flex-col gap-6 max-w-xl">
              {[
                "Individuelle & persönliche Beratung",
                "Absolute Diskretion",
                "Fachkompetenz & Qualität",
                "Langjähriges Know-how",
                "100% Kundenzufriedenheit",
                "Keine Knebel-Verträge",
                "Höchste Hygienestandards",
                "Geschultes Personal"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-[var(--primary)]">
                    <svg 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      className="w-6 h-6"
                      strokeWidth="3"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Redesigned */}
      <section className="py-24 bg-gray-50" aria-label="Dienstleistungen">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900" id="dienstleistungen">
              UNSERE KOMPETENZEN
            </h2>
            <p className="text-xl text-[var(--primary)] font-medium">
              Maximale Qualität für Sie!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {[
              {
                title: "Gewerbliche Reinigung",
                description: "Maßgeschneiderte Lösungen für Büros, Kanzleien, Praxen und gehobene Geschäftsräume.",
                image: "/assets/cleaning_bg.png"
              },
              {
                title: "Umzugs- & Endreinigung",
                description: "Perfekte Sauberkeit für Mieter, Eigentümer und Immobilienverwaltungen.",
                image: "/assets/moving_bg.png"
              },
              {
                title: "Handwerkliche Zusatzservices",
                description: "Kleinreparaturen, Malerarbeiten, Bodenverlegung und Trockenbau.",
                image: "/assets/craftsman_bg.png"
              },
              {
                title: "Facility Services",
                description: "Hausmeisterdienste, Pflege von Außenanlagen und Sonderreinigungen.",
                image: "/assets/Bildschirmfoto 2025-02-04 um 09.55.06.png"
              },
              {
                title: "Verträge jederzeit kündbar",
                description: "Keine Knebel-Verträge - sobald Sie unzufrieden mit unserer Leistung sind, können Sie den Vertrag sofort beenden.",
                image: "/assets/contract_bg.png"
              }
            ].map((service, index) => (
              <article 
                key={index}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-1"
                role="listitem"
              >
                <div className="relative w-full h-[240px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="mt-4">
                    <a href="#kontakt" className="text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors">
                      Mehr erfahren →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-20 bg-gray-50" aria-label="Über uns">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  buttje ist mehr als ein Name
                </h2>
                <div className="prose prose-lg text-gray-800">
                  <p className="lead text-xl mb-6">
                    Es gibt zwei Arten, einen Job zu machen: Irgendwie – oder richtig. buttje steht für die zweite Variante.
                  </p>
                  <p className="mb-8">
                    In Hamburg haben wir gelernt, dass echte Perfektion nicht laut sein muss. Sie zeigt sich in den kleinen Dingen – in der Sorgfalt, in der Beständigkeit, in dem Wissen, dass ein Job erst dann fertig ist, wenn er es verdient hat, als &quot;fertig&quot; bezeichnet zu werden.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="/ueber-uns"
                      className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:text-[var(--primary-dark)] transition-colors"
                    >
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

      {/* USP Section */}
      <section className="py-20 bg-white" aria-label="Vorteile">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-900" id="vorteile">
            Unser Qualitätsanspruch – Weil es besser geht
          </h2>
          <p className="text-2xl text-center mb-16 text-[var(--primary)]">
            &ldquo;So muk wi dat – weil wir&apos;s besser können.&rdquo;
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8" role="list">
            {[
              {
                title: "Perfektion bis ins Detail",
                description: "Wir reinigen nicht nur, wir optimieren die Umgebung."
              },
              {
                title: "Geschultes Personal",
                description: "Unsere Fachkräfte arbeiten diskret, effizient und professionell."
              },
              {
                title: "Höchste Hygienestandards",
                description: "Speziell für anspruchsvolle Branchen wie Gesundheitswesen, Kanzleien und Luxusimmobilien."
              },
              {
                title: "Exklusive Optik",
                description: "Unser Team tritt auf wie in einem Fünf-Sterne-Hotel: sauber, einheitlich und professionell."
              }
            ].map((usp, index) => (
              <article
                key={index}
                className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                role="listitem"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
                  {usp.title}
                </h3>
                <p className="text-gray-800">
                  {usp.description}
                </p>
              </article>
            ))}
          </div>
          <p className="text-xl font-semibold text-center mt-20 text-[var(--primary)]">
            Wir akzeptieren keinen Durchschnitt – nur Exzellenz.
          </p>
        </div>
      </section>

      {/* Referenzen Section */}
      <section className="py-20 bg-white" aria-label="Referenzen">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900" id="referenzen">
            Diskretion – Vertrauen durch Verschwiegenheit
          </h2>
          <article className="flex flex-col items-center text-center p-8 rounded-xl border border-gray-100 shadow-sm max-w-3xl mx-auto space-y-8">
            <p className="text-xl text-gray-800">
              Diskretion ist keine Option – sie ist unser Standard. buttje steht für absolute Vertraulichkeit und schützt die Privatsphäre seiner Kunden konsequent.
            </p>
            <div className="text-left w-full space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="text-gray-800">
                    ✔️ Keine Kundenreferenzen, keine Fotos, keine Weitergabe von Informationen.
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    ✔️ Unsere Mitarbeiter sind geschult, diskret zu agieren – wie unsichtbar, aber effektiv.
                  </p>
                </div>
                <div>
                  <p className="text-gray-800">
                    ✔️ Speziell für Kanzleien, Arztpraxen und Unternehmen mit sensiblen Daten.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-xl font-semibold text-[var(--primary)]">
              Mit buttje genießen Sie höchste Sauberkeit – ohne Spuren zu hinterlassen.
            </p>
          </article>
        </div>
      </section>

      {/* Neuigkeiten Section */}
      <section className="py-32 bg-gray-50" aria-label="Neuigkeiten">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900" id="neuigkeiten">
              Neuigkeiten
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Aktuelle Entwicklungen und neue Dienstleistungen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src="/assets/Bildschirmfoto 2025-02-04 um 09.55.06.png"
                  alt="Spezialreinigungen"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Neu: Spezialreinigungen</h3>
                <p className="text-xl text-gray-700 mb-6">
                  Tatortreinigung, Desinfektionsreinigung, Brandschaden- und Wasserschadensanierung – Professionelle Lösungen für besondere Anforderungen.
                </p>
                <div className="flex items-center text-[var(--primary)]">
                  <span className="text-lg font-semibold">Bald verfügbar</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section with Map */}
      <section className="py-20 bg-[var(--primary)]" aria-label="Kontakt" id="kontakt">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-white text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">
                Nehmen Sie Kontakt auf
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-xl">
                  Wir sind für Sie da
                </p>
                <div className="flex flex-col gap-2">
                  <p className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Stephansplatz 8/20, 1010 Wien
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href="tel:+436811011310"
                  className="inline-block bg-white text-[var(--primary)] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="w-5 h-5"
                    strokeWidth="2"
                  >
                    <path 
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  Jetzt anrufen
                </a>
                <a
                  href="mailto:info@buttje.at"
                  className="inline-block bg-white text-[var(--primary)] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="w-5 h-5"
                    strokeWidth="2"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  E-Mail schreiben
                </a>
              </div>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
