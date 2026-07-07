// Alte Leistungsseite (Gebäudereinigung) entfernt — buttje ist kein
// Reinigungsdienstleister mehr. Route liefert bewusst HTTP 410 Gone,
// damit Suchmaschinen die URL dauerhaft aus dem Index nehmen.

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
