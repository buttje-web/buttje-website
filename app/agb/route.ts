// Die frühere AGB (Gebäudereinigungs-Dienstleistungsvertrag) wurde entfernt —
// buttje ist kein Reinigungsdienstleister mehr und die Maison-Seite verkauft
// (noch) nichts. Route liefert bewusst HTTP 410 Gone, damit Suchmaschinen die
// URL dauerhaft aus dem Index nehmen. Die gültigen Shop-AGB liegen separat auf
// shop.buttje.at/agb und sind davon unberührt.

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
