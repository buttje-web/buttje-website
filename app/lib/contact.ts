// Central contact data. Telefon-Links sind sauber im E.164-Format,
// ohne unsichtbare Steuerzeichen oder Sonderzeichen.

export const PHONE_MOBILE = "+4367762080802"; // primär
export const PHONE_MOBILE_DISPLAY = "+43 677 62080802";

export const PHONE_OFFICE = "+4312366326442"; // sekundär (Büro)
export const PHONE_OFFICE_DISPLAY = "+43 1 236 632 64 42";

export const EMAIL = "info@buttje.at";

export const ADDRESS = {
  street: "Graben 28/1/12",
  postalCode: "1010",
  city: "Wien",
  country: "AT",
};

export const SITE_URL = "https://www.buttje.at";

// Tel-href Helfer, garantiert sauber: nur Ziffern und führendes Plus.
export const telHref = (e164: string) => `tel:${e164.replace(/[^+\d]/g, "")}`;
