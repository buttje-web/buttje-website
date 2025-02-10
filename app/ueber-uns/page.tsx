import Image from 'next/image';

export default function UeberUnsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-[var(--primary)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Über uns – buttje ist mehr als ein Name
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Es gibt zwei Arten, einen Job zu machen: Irgendwie – oder richtig.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-800">
            <p className="lead text-xl">
              buttje steht für die zweite Variante. Für Qualität, die nicht verhandelbar ist. Für einen Anspruch, der nicht von Budgets oder Deadlines abhängt, sondern von einer inneren Haltung: Wenn wir etwas tun, dann richtig.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Wurzeln in Hamburg, Zuhause in Wien</h2>
            <p>
              buttje ist kein neues Konzept. Es ist ein Name, der eine Geschichte trägt. In Hamburg haben wir gelernt, dass echte Perfektion nicht laut sein muss. Sie zeigt sich in den kleinen Dingen – in der Sorgfalt, in der Beständigkeit, in dem Wissen, dass ein Job erst dann fertig ist, wenn er es verdient hat, als &quot;fertig&quot; bezeichnet zu werden.
            </p>
            <p>
              Wir haben in einer Stadt gearbeitet, in der das Wetter hart ist, aber die Mentalität noch härter. Wo kein Platz für &quot;heiße Luft&quot; ist, sondern nur für Ergebnisse. Diese Einstellung haben wir mit nach Wien gebracht – und sie hat sich kein Stück verändert.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Unsere Philosophie – Kein Mittelmaß, keine Ausreden</h2>
            <p>
              Sauberkeit ist nicht nur das, was man sieht. Es ist das, was bleibt, wenn niemand hinschaut. Es ist der Unterschied zwischen &quot;gereinigt&quot; und wirklich sauber.
            </p>
            <p>
              buttje ist mehr als eine Dienstleistung. Es ist ein Versprechen an uns selbst und an unsere Kunden: Wir machen keine halben Sachen. Wir hinterlassen keinen Schmutz, keine Spuren, aber immer einen Eindruck.
            </p>

            <div className="relative w-full h-[400px]">
              <Image
                src="/assets/Bildschirmfoto 2025-02-04 um 09.55.06.png"
                alt="buttje Team"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">20 Jahre Erfahrung – und kein bisschen müde</h2>
            <p>
              Zwei Jahrzehnte in dieser Branche haben uns eines gezeigt: Gute Arbeit spricht für sich selbst. Man muss sie nicht verkaufen, nicht bewerben – man muss sie nur tun.
            </p>
            <p>
              Wir haben für Menschen gearbeitet, die keine Fehler dulden, und haben gelernt, dass die höchste Form der Anerkennung Stille ist. Wenn niemand etwas sagt, wenn einfach alles passt – dann weißt du, dass du es richtig gemacht hast.
            </p>
            <p className="text-xl font-semibold text-[var(--primary)] mt-8">
              Genau das ist unser Maßstab. Jeden Tag.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Lernen Sie uns kennen</h2>
            <p className="text-xl text-gray-600 mb-8">
              Erfahren Sie, wie wir auch Ihr Projekt mit höchster Qualität umsetzen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+436811011310"
                className="btn-primary flex items-center justify-center gap-2"
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
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="w-5 h-5"
                  strokeWidth="2"
                >
                  <path 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 