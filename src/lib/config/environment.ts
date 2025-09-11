export const config = {
  firebase: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  },
  
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || 'DTIMA',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    environment: process.env.NODE_ENV || 'development',
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  },
  
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    offline: process.env.NEXT_PUBLIC_ENABLE_OFFLINE === 'true',
    pwa: process.env.NEXT_PUBLIC_ENABLE_PWA === 'true',
    notifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
  },
  
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '/api',
    timeout: parseInt(process.env.NEXT_PUBLIC_API_TIMEOUT || '10000'),
    retries: parseInt(process.env.NEXT_PUBLIC_API_RETRIES || '3'),
  },
  
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'en',
    supportedLocales: ['en', 'fr', 'sw', 'ar'],
    fallbackLocale: 'en',
  },
  
  seo: {
    siteName: 'DTIMA',
    titleTemplate: '%s | DTIMA',
    defaultDescription: 'Empowering African municipalities through digital transformation and capacity building to enhance governance and service delivery.',
    defaultImage: '/og-image.png',
    twitterHandle: '@dtima_africa',
  },
  
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || '',
    googleTagManagerId: process.env.NEXT_PUBLIC_GTM_ID || '',
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
  },
  
  monitoring: {
    sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
    logLevel: process.env.NEXT_PUBLIC_LOG_LEVEL || 'info',
  },
  
  performance: {
    imageOptimization: process.env.NEXT_PUBLIC_ENABLE_IMAGE_OPTIMIZATION !== 'false',
    lazyLoading: process.env.NEXT_PUBLIC_ENABLE_LAZY_LOADING !== 'false',
    serviceWorker: process.env.NEXT_PUBLIC_ENABLE_SERVICE_WORKER === 'true',
  },
  
  security: {
    cspNonce: process.env.NEXT_PUBLIC_CSP_NONCE || '',
    hstsMaxAge: parseInt(process.env.NEXT_PUBLIC_HSTS_MAX_AGE || '31536000'),
    enableHttpsRedirect: process.env.NEXT_PUBLIC_ENABLE_HTTPS_REDIRECT === 'true',
  },
}

export type Config = typeof config

// Environment validation
export function validateEnvironment(): void {
  const requiredEnvVars = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID',
  ]

  const missingVars = requiredEnvVars.filter(
    (envVar) => !process.env[envVar]
  )

  if (missingVars.length > 0) {
    console.warn(
      `Missing required environment variables: ${missingVars.join(', ')}`
    )
  }
}

// Feature flags
export const featureFlags = {
  isDevelopment: config.app.environment === 'development',
  isProduction: config.app.environment === 'production',
  isStaging: false, // staging environment not supported in current config
  
  // Feature toggles
  enableAnalytics: config.features.analytics,
  enableOffline: config.features.offline,
  enablePWA: config.features.pwa,
  enableNotifications: config.features.notifications,
  enableImageOptimization: config.performance.imageOptimization,
  enableLazyLoading: config.performance.lazyLoading,
  enableServiceWorker: config.performance.serviceWorker,
} as const

export type FeatureFlags = typeof featureFlags
