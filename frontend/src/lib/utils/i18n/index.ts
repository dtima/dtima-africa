import { cache } from 'react';

// Define supported locales
export const locales = ['en', 'fr'] as const;
export type Locale = typeof locales[number];

// Default locale
export const defaultLocale: Locale = 'en';

// Current translation version - can be used to invalidate cached translations
export const TRANSLATION_VERSION = '1.0.0';

interface TranslationRecord {
  [key: string]: string | TranslationRecord;
}

/**
 * Translation cache to avoid loading the same translations multiple times
 * Keys are in the format: `${locale}:${namespace}:${version}`
 */
const translationCache: Map<string, TranslationRecord> = new Map();

/**
 * Gets a translation value from a nested object using a dot-notated key
 * 
 * @param obj The translation object
 * @param path The dot-notated path to the translation
 * @param fallback Optional fallback value
 * @returns The translation value or the fallback
 */
function getNestedValue(obj: any, path: string, fallback?: string): string {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    result = result?.[key];
    
    if (result === undefined) {
      return fallback || path;
    }
  }
  
  if (result === null || typeof result !== 'string') return fallback || path;
  return result;
}

/**
 * Creates a translator function for a given translation object
 * 
 * @param translations The translation object
 * @returns A function that translates keys to values
 */
export function createTranslator(translations: TranslationRecord | null) {
  return (key: string, fallback?: string): string => {
    if (!translations) return fallback || key;
    return getNestedValue(translations, key, fallback);
  };
}

/**
 * Normalized fetch function for translations
 * Uses the cache API to enable React server components optimization
 */
export const fetchTranslation = cache(
  async (locale: Locale, namespace: string): Promise<TranslationRecord> => {
    const cacheKey = `${locale}:${namespace}:${TRANSLATION_VERSION}`;
    
    // Check cache first
    if (translationCache.has(cacheKey)) {
      return translationCache.get(cacheKey)!;
    }
    
    try {
      // Attempt to load translations from the locale file
      const translations = await import(`../../../locales/${locale}/${namespace}.json`);
      translationCache.set(cacheKey, translations.default);
      return translations.default;
    } catch (error) {
      console.error(`Failed to load translations for ${locale}/${namespace}:`, error);
      
      // If the requested locale is not the default, try to fall back to the default locale
      if (locale !== defaultLocale) {
        try {
          console.warn(`Falling back to ${defaultLocale} translations for ${namespace}`);
          const fallbackTranslations = await import(`../../../locales/${defaultLocale}/${namespace}.json`);
          return fallbackTranslations.default;
        } catch (fallbackError) {
          console.error(`Failed to load fallback translations for ${defaultLocale}/${namespace}:`, fallbackError);
          return {};
        }
      }
      
      return {};
    }
  }
);

/**
 * Gets translations for a given locale and namespace
 * This is an async function that can be used in server components
 * 
 * @param locale The locale to get translations for
 * @param namespace The namespace of translations to load
 * @returns The translation object for the locale and namespace
 */
export async function getTranslations(locale: Locale, namespace: string) {
  return fetchTranslation(locale, namespace);
}

/**
 * Returns the best matching locale from the Accept-Language header
 * 
 * @param acceptLanguageHeader The Accept-Language header value
 * @returns The best matching locale or the default locale
 */
export function getBestMatchingLocale(acceptLanguageHeader: string | null): Locale {
  if (!acceptLanguageHeader) return defaultLocale;
  
  // Parse Accept-Language header
  const acceptedLocales = acceptLanguageHeader
    .split(',')
    .map(item => item.trim().split(';')[0].substring(0, 2));
  
  // Find the first matching locale
  for (const acceptedLocale of acceptedLocales) {
    if (locales.includes(acceptedLocale as Locale)) {
      return acceptedLocale as Locale;
    }
  }
  
  return defaultLocale;
} 