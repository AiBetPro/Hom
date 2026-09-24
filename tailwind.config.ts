import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0a0e1a',
          900: '#10162a',
          800: '#171f38',
          700: '#1e2745',
          600: '#2a3459',
        },
        gold: {
          50: '#fbeed9',
          100: '#f6ddb0',
          200: '#f0c87e',
          300: '#eab655',
          400: '#eaad48',
          500: '#e8a63d',
          600: '#c98a28',
        },
        cobalt: {
          400: '#7d95ff',
          500: '#5170ff',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        data: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
