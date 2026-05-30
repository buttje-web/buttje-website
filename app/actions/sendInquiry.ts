'use server';

import nodemailer from 'nodemailer';
import { EMAIL } from '../lib/contact';

export type InquiryState = {
  status: 'idle' | 'success' | 'error';
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function sendInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // Honeypot, von Menschen unsichtbar, von Bots oft ausgefuellt.
  if ((formData.get('website') as string)?.trim()) {
    return { status: 'success', message: 'Vielen Dank für Ihre Anfrage.' };
  }

  const name = (formData.get('name') as string)?.trim() ?? '';
  const firma = (formData.get('firma') as string)?.trim() ?? '';
  const objekt = (formData.get('objekt') as string)?.trim() ?? '';
  const leistung = (formData.get('leistung') as string)?.trim() ?? '';
  const telefon = (formData.get('telefon') as string)?.trim() ?? '';
  const nachricht = (formData.get('nachricht') as string)?.trim() ?? '';

  if (!name || !telefon) {
    return {
      status: 'error',
      message: 'Bitte geben Sie zumindest Ihren Namen und Ihre Telefonnummer an.',
    };
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  // Keine SMTP-Daten hinterlegt: Hinweis statt Versand.
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error('SMTP-Konfiguration fehlt. Bitte Umgebungsvariablen setzen.');
    return {
      status: 'error',
      message: 'Bitte rufen Sie uns an. Wir sind sofort für Sie da.',
    };
  }

  const port = Number(SMTP_PORT);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // Port 465 = SSL (secure), Port 587 = STARTTLS (secure: false + requireTLS)
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ['Name', name],
    ['Firma', firma || '-'],
    ['Art des Objekts', objekt || '-'],
    ['Gewünschte Leistung', leistung || 'Keine Angabe'],
    ['Telefon', telefon],
    ['Nachricht', nachricht || '-'],
  ];

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');
  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="margin: 0 0 16px;">Neue Angebotsanfrage über buttje.at</h2>
      <table style="border-collapse: collapse;">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding: 6px 16px 6px 0; font-weight: bold; vertical-align: top;">${escapeHtml(k)}</td>
                 <td style="padding: 6px 0;">${escapeHtml(v).replace(/\n/g, '<br>')}</td>
               </tr>`,
          )
          .join('')}
      </table>
    </div>`;

  try {
    await transporter.sendMail({
      from: `"buttje Website" <${SMTP_USER}>`,
      to: EMAIL,
      subject: `Neue Anfrage${firma ? `: ${firma}` : ` von ${name}`}`,
      text,
      html,
    });

    return {
      status: 'success',
      message: 'Vielen Dank für Ihre Anfrage. Wir melden uns umgehend bei Ihnen.',
    };
  } catch (error) {
    console.error('Fehler beim Senden der Anfrage:', error);
    return {
      status: 'error',
      message: 'Beim Senden ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an.',
    };
  }
}
