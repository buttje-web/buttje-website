// Central contact data. Telefon-Links sind sauber im E.164-Format,
// ohne unsichtbare Steuerzeichen oder Sonderzeichen.

export const PHONE_MOBILE = "+4367762080802"; // primär
export const PHONE_MOBILE_DISPLAY = "+43 677 62080802";

export const PHONE_OFFICE = "+4312366326442"; // sekundär (Büro)
export const PHONE_OFFICE_DISPLAY = "+43 1 236 632 64 42";

export const EMAIL = "info@buttje.at";

// Base64-kodierte Kontaktdaten fuer die clientseitige Entschluesselung.
// Damit stehen E-Mail und Telefonnummern nicht als Klartext im gerenderten
// HTML, sondern werden erst im Browser (useEffect) zusammengesetzt. Schuetzt
// gegen Harvester-Bots, bleibt fuer echte Besucher sichtbar und klickbar.
// Klartext bleibt nur im Impressum (rechtliche Erreichbarkeit).
export const EMAIL_ENC = "aW5mb0BidXR0amUuYXQ=";
export const PHONE_MOBILE_ENC = "KzQzNjc3NjIwODA4MDI=";
export const PHONE_MOBILE_DISPLAY_ENC = "KzQzIDY3NyA2MjA4MDgwMg==";
export const PHONE_OFFICE_ENC = "KzQzMTIzNjYzMjY0NDI=";
export const PHONE_OFFICE_DISPLAY_ENC = "KzQzIDEgMjM2IDYzMiA2NCA0Mg==";

// WhatsApp Business. Link oeffnet den Chat ohne vorausgefuellte Nachricht.
export const WHATSAPP_NUMBER = "4367762080802";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const ADDRESS = {
  street: "Graben 28/1/12",
  postalCode: "1010",
  city: "Wien",
  country: "AT",
};

export const SITE_URL = "https://www.buttje.at";

// Innere Wiener Bezirke (geografischer Fokus), Schwerpunkt 1010.
export const DISTRICTS = ["1010", "1030", "1040", "1050", "1060", "1070", "1080", "1090"];

// Tel-href Helfer, garantiert sauber: nur Ziffern und führendes Plus.
export const telHref = (e164: string) => `tel:${e164.replace(/[^+\d]/g, "")}`;
