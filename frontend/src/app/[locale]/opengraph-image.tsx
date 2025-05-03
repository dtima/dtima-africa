import { ImageResponse } from 'next/og';
import { Locale, defaultLocale } from '@/lib/utils/i18n';

// Image dimensions
export const size = {
  width: 1200,
  height: 630,
};

// Content type
export const contentType = 'image/png';

// Image generation function
export default async function Image({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale || defaultLocale;
  
  // Define text content based on locale
  const title = 
    locale === 'fr' 
      ? 'Initiative de Transformation Numérique pour les Municipalités en Afrique' 
      : 'Digital Transformation Initiative for Municipalities in Africa';
  
  const subtitle = 
    locale === 'fr'
      ? 'Autonomiser les municipalités africaines'
      : 'Empowering African municipalities';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #2A4365, #3182CE)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {/* Decorative grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(10, 1fr)',
            gridTemplateRows: 'repeat(10, 1fr)',
            opacity: 0.1,
          }}
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              style={{
                border: '1px solid white',
                backgroundColor: i % 7 === 0 ? 'rgba(56, 161, 105, 0.2)' : 'transparent',
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            maxWidth: '80%',
            zIndex: 10,
          }}
        >
          {/* Logo placeholder */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#38A169',
                marginRight: '16px',
              }}
            />
            <span
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              DTIMA
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '24px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255,255,255,0.9)',
              marginBottom: '40px',
            }}
          >
            {subtitle}
          </div>

          {/* Decorative elements */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            {['#38A169', '#3182CE', '#E53E3E'].map((color, i) => (
              <div
                key={i}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: color,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 