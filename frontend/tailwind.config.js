/**
 * DTIMA Brand Colors Tailwind Configuration
 * 
 * This configuration extends Tailwind CSS with the brand colors derived
 * from the DTIMA logo. The colors are:
 * 
 * - Black (for "DTI" part of the logo)
 * - Red (for "MA" part of the logo)
 * - Green (for the majority of surrounding shapes)
 * - Blue (for the accent shape)
 * - White (for the background)
 */

module.exports = {
  content: [
    // Adjusted content paths to match typical Next.js structure
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dtima: {
          black: '#000000',      // Logo "DTI" color
          red: {
            DEFAULT: '#E53E3E',  // Logo "MA" color
            light: '#F56565',    // Lighter shade for hover states
            dark: '#C53030',     // Darker shade for active states
          },
          green: {
            DEFAULT: '#38A169',  // Primary green
            light: '#48BB78',    // Lighter shade for hover states
            dark: '#2F855A',     // Darker shade for active states
            100: '#F0FFF4',      // Lightest green for backgrounds
            200: '#C6F6D5',
            300: '#9AE6B4',
            400: '#68D391',
            500: '#48BB78',
            600: '#38A169',      // Same as DEFAULT
            700: '#2F855A',      // Same as dark
            800: '#276749',
            900: '#22543D',      // Darkest green
          },
          blue: {
            DEFAULT: '#3182CE',  // Accent blue
            light: '#4299E1',    // Lighter shade for hover states
            dark: '#2B6CB0',     // Darker shade for active states
            100: '#EBF8FF',      // Lightest blue for backgrounds
            200: '#BEE3F8',
            300: '#90CDF4',
            400: '#63B3ED',
            500: '#4299E1',
            600: '#3182CE',      // Same as DEFAULT
            700: '#2B6CB0',      // Same as dark
            800: '#2C5282',
            900: '#2A4365',      // Darkest blue
          },
          gray: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
          },
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-tr': 'linear-gradient(to top right, var(--tw-gradient-stops))',
      },
      gradientColorStops: {
        'from-dtima-green': 'var(--dtima-green)',
        'to-dtima-blue': 'var(--dtima-blue)',
      },
      boxShadow: {
        'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'raised': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'focus': '0 0 0 3px rgba(49, 130, 206, 0.5)',
      },
      fontFamily: {
        // Assuming Inter font is set up in globals.css or layout.tsx
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      borderRadius: {
        // Consistent border radiuses
        'none': '0',
        'sm': '0.125rem',      // 2px
        DEFAULT: '0.25rem',    // 4px
        'md': '0.375rem',      // 6px
        'lg': '0.5rem',        // 8px
        'xl': '0.75rem',       // 12px
        '2xl': '1rem',         // 16px
        '3xl': '1.5rem',       // 24px
        'full': '9999px',
        // Component-specific radiuses
        'button': '0.375rem',  // 6px
        'card': '0.5rem',      // 8px
        'input': '0.375rem',   // 6px
      },
      spacing: {
        // Base spacing system (already in Tailwind)
        // Adding component-specific spacing
        'button-y': '0.5rem',  // 8px
        'button-x': '1rem',    // 16px
        'section-y': '4rem',   // 64px
        'section-gap': '2rem', // 32px
        'container-x': '1rem', // 16px on small screens, overridden in larger screens
      },
      // Including typography plugin styles
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.dtima.blue.DEFAULT'),
              '&:hover': {
                color: theme('colors.dtima.blue.dark'),
              },
              // Add other base styles if needed
            },
            h1: {
              color: theme('colors.dtima.black'),
            },
            h2: {
              color: theme('colors.dtima.black'),
            },
            h3: {
              color: theme('colors.dtima.black'),
            },
            strong: {
              color: theme('colors.dtima.black'),
            },
            // Add other typography styles as needed
          }
        }
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Add custom scrollbar-hide plugin
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          },
        },
        '.scrollbar-default': {
          /* Firefox */
          'scrollbar-width': 'auto',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'block'
          },
        },
      }
      addUtilities(newUtilities);
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  // Safelist ensures these classes are generated, useful if dynamically constructed
  safelist: [
    'bg-dtima-red',
    'bg-dtima-blue',
    'bg-dtima-green',
    'text-dtima-red',
    'text-dtima-blue',
    'text-dtima-green',
    'text-dtima-black',
    'border-dtima-red',
    'border-dtima-blue',
    'border-dtima-green',
    'border-dtima-black',
    'hover:bg-dtima-red-light',
    'hover:bg-dtima-blue-light',
    'hover:bg-dtima-green-light',
    'hover:text-dtima-red',
    'animate-fade-in',
    'animate-slide-up',
    'animate-slide-down',
    'animate-slide-left',
    'animate-slide-right',
    'scrollbar-hide',
    'scrollbar-default',
    // Add other potentially dynamic classes if needed
  ],
}; 