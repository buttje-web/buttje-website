'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HandwerklicheZusatzservices() {
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
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    document.querySelectorAll('.slide-in-left, .slide-in-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="h-[60vh] min-h-[500px] relative">
        <Image
          src="/assets/roller_compressed.jpg"
          alt="Handwerkliche Zusatzservices"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="container-custom pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Handwerkliche Zusatzservices
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Mehr als Reinigung: Kleinreparaturen & Renovierungsarbeiten
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 bg-white" aria-label="Leistungen">
        <div className="container-custom">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Unsere Leistungen
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Neben der Reinigung bieten wir auch handwerkliche Zusatzservices, um Ihre Immobilie rundum instand zu halten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" role="list">
            {[
              {
                title: "Malerarbeiten & Wandanstriche",
                description: "Frischer Look für Büros, Geschäfte & Immobilien"
              },
              {
                title: "Bodenverlegung & Parkettpflege",
                description: "Verlegung von Laminat, Vinyl & Fliesen"
              },
              {
                title: "Trockenbau & kleinere Renovierungen",
                description: "Optimierung von Räumen & Wänden"
              },
              {
                title: "Kleinreparaturen",
                description: "Ausbesserungen an Türen, Schränken & Möbeln"
              },
              {
                title: "Dichtungs- & Silikonarbeiten",
                description: "Perfekte Abdichtung für Küche & Sanitärbereiche"
              }
            ].map((service, index) => (
              <article
                key={index}
                className={`p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} animate-delay-${index + 1}`}
                role="listitem"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
                  {service.title}
                </h3>
                <p className="text-gray-800">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+4312366326442"
                className="inline-block bg-white text-[var(--primary)] font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                Jetzt anfragen
              </a>
              <Link
                href="/#kontakt"
                className="btn-secondary"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 