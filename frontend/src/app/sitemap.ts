import { MetadataRoute } from 'next';

/**
 * List of static pages
 */
const pages = [
  '',
  '/about',
  '/about/mission-vision',
  '/about/impact-goals',
  '/about/key-initiatives',
  '/programs',
  '/activities/digital-platforms',
  '/activities/capacity-building',
  '/activities/innovation-challenges',
  '/activities/partnerships',
  '/partners',
  '/coverage',
  '/councils',
  '/resources',
  '/contact',
];

/**
 * Available locales
 */
const locales = ['en', 'fr'];

/**
 * Generate the sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dtima-africa.org';
  
  // Generate sitemap entries for each page in each locale
  const entries = locales.flatMap(locale =>
    pages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : page.split('/').length > 2 ? 0.7 : 0.8,
    }))
  );
  
  return entries;
} 