import { cache } from 'react';

// Define supported locales and default locale
export const locales = ['en', 'fr'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'en';

/**
 * Get translation function for current locale
 */
export const getTranslations = cache(async (
  locale: Locale,
  namespace: string
): Promise<Record<string, any>> => {
  try {
    // Dynamic import of translation files
    const translations = await import(`@/locales/${locale}/${namespace}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${namespace} in ${locale}:`, error);
    // Fallback to english
    if (locale !== defaultLocale) {
      return getTranslations(defaultLocale, namespace);
    }
    // Or return empty object if english fails
    return {};
  }
});

/**
 * Create a translation function for specific namespace
 */
export function createTranslator(translations: Record<string, any>) {
  return function translate(key: string, params?: Record<string, string>): string {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value = keys.reduce<any>(
      (obj, k) => (obj && obj[k] !== undefined) ? obj[k] : null, 
      translations
    );
    
    // Return key if translation not found or not a string
    if (value === null || typeof value !== 'string') return key;
    
    // Replace parameters if provided
    if (params) {
      Object.entries(params).forEach(([param, replacement]) => {
        value = value.replace(`{{${param}}}`, replacement);
      });
    }
    
    return value;
  };
}

/**
 * Format date according to locale
 */
export function formatDate(date: Date, locale: Locale, options?: Intl.DateTimeFormatOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Intl.DateTimeFormat(
    locale === 'fr' ? 'fr-FR' : 'en-US',
    options || defaultOptions
  ).format(date);
} 