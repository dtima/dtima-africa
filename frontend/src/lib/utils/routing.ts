import { useParams } from 'next/navigation';
import { Locale } from './i18n';

/**
 * Creates a localized route path by combining the current locale with the provided path
 * @param path The route path without locale prefix
 * @param locale Optional locale to use (if not provided, will use the current locale from route)
 * @returns Localized route path
 */
export function localizedRoute(path: string, locale?: Locale): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // Return path with locale prefix
  return locale 
    ? `/${locale}/${cleanPath}` 
    : `/${cleanPath}`;
}

/**
 * React hook to get localized routes easily in client components
 * @returns Function to generate localized routes
 */
export function useLocalizedRoute() {
  const params = useParams();
  const currentLocale = params?.locale as Locale || 'en';
  
  return (path: string, locale?: Locale) => {
    return localizedRoute(path, locale || currentLocale);
  };
} 