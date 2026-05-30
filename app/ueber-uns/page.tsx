import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CallButton from '../components/CallButton';

export const metadata: Metadata = {
  title: 'Über uns',
  description:
    'buttje steht für Premium Gebäudereinigung in Wien: norddeutsche Gründlichkeit, höchster Anspruch und gelebte Diskretion. Lernen Sie unsere Haltung kennen.',
  alternates: { canonical: '/ueber-uns' },
};

export default function UeberUnsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-24 bg-[var(--primary)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Über uns, buttje ist mehr als ein Name</h1>
            <p className="text-xl md:text-2xl font-light">
              Es gibt zwei Arten, einen Job zu machen: irgendwie oder richtig.
            </p>
          </div>
        </div>
      </section>

      {/* Inhalt */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <p className="text-xl text-gray-800 leading-relaxed">
              buttje steht für die zweite Variante. Für Qualität, die nicht verhandelbar ist. Für einen
              Anspruch, der nicht von Budgets oder Deadlines abhängt, sondern von einer inneren Haltung:
              Wenn wir etwas tun, dann richtig.
            </p>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Wurzeln im Norden, zuhause in Wien</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                buttje kommt aus dem Norden, und mit dem Namen kam eine Haltung: Perfektion muss nicht laut
                sein. Sie zeigt sich in Sorgfalt, in Beständigkeit und in dem Wissen, dass eine Arbeit erst
                dann fertig ist, wenn sie es verdient hat, so genannt zu werden. Diese Einstellung haben wir
                nach Wien gebracht, und sie hat sich kein Stück verändert.
              </p>
            </div>

            <div className="h-[55vh] min-h-[420px] relative rounded-xl overflow-hidden">
              <Image src="/assets/team_compressed.jpg" alt="Das Team von buttje" fill className="object-cover" priority />
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Unser Anspruch, kein Mittelmaß</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sauberkeit ist nicht nur das, was man sieht. Es ist das, was bleibt, wenn niemand hinschaut.
                Es ist der Unterschied zwischen &quot;gereinigt&quot; und wirklich sauber. Wir machen keine halben
                Sachen und hinterlassen keine Spuren, aber immer einen guten Eindruck.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Diskretion als Selbstverständnis</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Wir arbeiten dort, wo Vertrauen zählt: in Kanzleien, Ordinationen und Unternehmen mit
                sensiblen Daten. Geschultes, fest eingeteiltes Personal, klare Abläufe und absolute
                Verschwiegenheit sind für uns kein Zusatz, sondern Grundlage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 border-t">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Lernen Sie uns kennen</h2>
            <p className="text-lg text-gray-600 mb-8">
              Am besten in einem kurzen Gespräch. Wir hören zu und finden die passende Lösung für Ihr Objekt.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CallButton location="ueber_uns_page" />
              <Link href="/#angebot" className="btn-secondary">Angebot anfordern</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
