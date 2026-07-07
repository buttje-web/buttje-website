// Die frühere "Über uns"-Seite (Gebäudereinigung) wurde entfernt.
// Diese Route existiert bewusst nur noch, um HTTP 410 Gone zu liefern:
// Suchmaschinen nehmen die URL damit dauerhaft aus dem Index, statt sie
// (wie bei 404) als "vorübergehend weg" weiter vorzuhalten.

export const dynamic = "force-dynamic";

function gone() {
  return new Response("410 Gone", {
    status: 410,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const GET = gone;
export const HEAD = gone;
export const POST = gone;
