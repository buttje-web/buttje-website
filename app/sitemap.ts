import type { MetadataRoute } from 'next';
import { SITE_URL } from './lib/contact';

export default function sitemap(): MetadataRoute.Sitemap {
  // Festes Datum gemaess Vorgabe (statt Build-Zeitpunkt).
  const lastModified = '2026-05-30';

  const routes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'monthly' },
    { path: '/ueber-uns', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/leistungen/gewerbliche-reinigung', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/leistungen/umzuege-und-endreinigungen', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/leistungen/facility-services', priority: 0.9, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
