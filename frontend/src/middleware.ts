import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Define all supported locales
const LOCALES = ['en', 'fr'] as const;
type Locale = typeof LOCALES[number];
const DEFAULT_LOCALE: Locale = 'en';

// Define URLS that don't need localization
const PUBLIC_FILES = [
  '/favicon.ico',
  '/robots.txt',
  '/sitemap.xml',
  '/images/',
  '/videos/',
  '/fonts/',
  '/_next/',
  '/api/'
];

// Get the preferred locale from request headers
function getLocale(request: NextRequest): Locale {
  // Check if there's already a locale cookie
  const storedLocale = request.cookies.get('NEXT_LOCALE')?.value as Locale | undefined;
  if (storedLocale && LOCALES.includes(storedLocale)) {
    return storedLocale;
  }

  // Use Accept-Language header as a fallback
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const parsedLocales = acceptLanguage.split(',').map(l => l.split(';')[0].trim());
    for (const locale of parsedLocales) {
      if (locale.startsWith('fr')) return 'fr';
      if (locale.startsWith('en')) return 'en';
    }
  }

  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the request is for a public file or API route
  if (PUBLIC_FILES.some(file => pathname.startsWith(file))) {
    return NextResponse.next();
  }

  // Check if the pathname already includes a supported locale
  const pathnameHasLocale = LOCALES.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // If it already has a locale, just set the cookie and continue
    const locale = pathname.split('/')[1] as Locale;
    const response = NextResponse.next();
    
    // Update locale cookie if needed
    if (locale !== request.cookies.get('NEXT_LOCALE')?.value) {
      response.cookies.set('NEXT_LOCALE', locale, { 
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 year
        sameSite: 'lax'
      });
    }
    
    return response;
  }

  // Get the locale from headers or cookie for new routes
  const locale = getLocale(request);
  
  // Redirect to the localized URL
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  
  // Set locale cookie for future requests
  const response = NextResponse.redirect(request.nextUrl);
  response.cookies.set('NEXT_LOCALE', locale, { 
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: 'lax'
  });
  
  return response;
}

export const config = {
  // Match all paths except those starting with /api/, /static/, /_next/, etc.
  matcher: ['/((?!_next|api|static|.*\\.).*)']
}; 