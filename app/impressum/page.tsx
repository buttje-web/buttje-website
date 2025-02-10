export default function ImpressumPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-12 text-gray-900">Impressum</h1>
        
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800">
          <section className="mb-12">
            <h2>Angaben gemäß § 5 ECG</h2>
            <p>
              buttje Reinigungs- und Servicedienstleistungen<br />
              Stephansplatz 8/20<br />
              1010 Wien<br />
              Österreich
            </p>
            
            <p className="mt-4">
              <strong>Kontakt:</strong><br />
              Telefon: +43 681 10113106<br />
              E-Mail: info@buttje.at
            </p>

            <p className="mt-4">
              <strong>Unternehmensgegenstand:</strong><br />
              Reinigungs- und Servicedienstleistungen
            </p>

            <p className="mt-4">
              <strong>UID-Nummer:</strong><br />
              [Ihre UID-Nummer]
            </p>

            <p className="mt-4">
              <strong>Mitglied bei:</strong><br />
              Wirtschaftskammer Wien
            </p>

            <p className="mt-4">
              <strong>Berufsrecht:</strong><br />
              Gewerbeordnung: www.ris.bka.gv.at
            </p>
          </section>

          <section className="mb-12">
            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section className="mb-12">
            <h2>Haftung für Inhalte</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>

          <section>
            <h2>Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 