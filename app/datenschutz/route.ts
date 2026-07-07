// Die frühere Datenschutzerklärung stammt aus der alten Reinigungs-/
// Dienstleistungs-Seite. Die Maison-Seite ist ein reiner "launching soon"-
// Platzhalter ohne Datenverarbeitung; die Seite wurde entfernt und liefert
// bewusst HTTP 410 Gone. Beim späteren Launch mit echten Inhalten wird eine
// passende Datenschutzerklärung neu eingesetzt.

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
