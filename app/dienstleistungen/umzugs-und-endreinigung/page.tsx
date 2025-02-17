'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UmzugsUndEndreinigung() {
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
          src="/assets/moving_bg.png"
          alt="Umzugs- & Endreinigung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="container-custom pb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Umzugs- & Endreinigung
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Komplette Umzugsservices & professionelle Endreinigung – alles aus einer Hand
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
              Ein Umzug kann stressig sein – wir machen es Ihnen einfach! Buttje e.U. bietet Ihnen einen vollständigen
              Umzugsservice inklusive Transport & Reinigung.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" role="list">
            {[
              {
                title: "Umzugsreinigung",
                description: "Professionelle Reinigung beim Ein- oder Auszug"
              },
              {
                title: "Endreinigung",
                description: "Gründliche Reinigung nach Mietende"
              },
              {
                title: "Bauendreinigung",
                description: "Reinigung nach Renovierung oder Neubau"
              },
              {
                title: "Wohnungsreinigung",
                description: "Komplette Reinigung von Wohnungen & Häusern"
              },
              {
                title: "Abnahmegarantie",
                description: "Garantierte Abnahme durch den Vermieter"
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

          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Für wen ist unser Service geeignet?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16" role="list">
            {[
              {
                title: "Privatkunden",
                description: "Stressfreier Umzug in ein neues Zuhause"
              },
              {
                title: "Unternehmen",
                description: "Effiziente & schnelle Firmenumzüge"
              },
              {
                title: "Immobilienverwaltungen & Makler",
                description: "Perfekte Objektübergaben"
              },
              {
                title: "Vermieter & Mieter",
                description: "Reibungslose Kautionsrückerstattung"
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
                href="tel:+436811011310"
                className="btn-primary"
              >
                Jetzt Umzug & Reinigung kombinieren
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