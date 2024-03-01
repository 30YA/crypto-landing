import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }
        xl: { max: '1325px' },
        // => @media (max-width: 1279px) { ... }
        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }
        md: { max: '767px' },
        // => @media (max-width: 767px) { ... }
        sm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
        xs: { max: '480px' },
      },
      colors: {
        primary: '#54B990',
        black: {
          1000: '#1D1D1D',
          1100: '#19191A',
          1200: '#232323',
        },
        gray: {
          default: '#737373',
          1000: '#F5F5F5',
          1100: '#9E9E9E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        moveUpDownSpin: {
          '0%': {
            transform: 'translateY(0) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(60px) rotate(30deg)',
          },
          '100%': {
            transform: 'translateY(0) rotate(0deg)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        UpDownSpin: 'moveUpDownSpin 4s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
