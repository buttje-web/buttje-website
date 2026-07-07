import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/contact';

export default function sitemap(): MetadataRoute.Sitemap {
  // Festes Datum gemaess Vorgabe (statt Build-Zeitpunkt).
  const lastModified = '2026-05-30';

  // Nur noch die aktive Startseite. Die alten Reinigungs-Leistungsseiten
  // und /ueber-uns wurden entfernt (liefern HTTP 410) und duerfen daher
  // nicht mehr in der Sitemap stehen.
  const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
