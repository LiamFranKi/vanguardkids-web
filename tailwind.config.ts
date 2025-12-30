import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#f59e0b',
          600: '#ef4444',
          700: '#dc2626',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        pastel: {
          purple: '#e8d5ff',
          blue: '#d6e8ff',
          green: '#d6ffe8',
          yellow: '#fff6d6',
          peach: '#ffe8d6',
          pink: '#ffe0f0',
          rose: '#ffe4e6',
          violet: '#ede9fe',
        },
        accent: {
          pink: '#ff9ec5',
          purple: '#d4a5ff',
          blue: '#9ec5ff',
          green: '#9effc5',
        },
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

