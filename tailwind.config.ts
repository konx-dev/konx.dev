import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-opensans)'],
      secondary: ['var(--font-playfair)'],
    },
    colors: {
      navy: '#0A192F',
      teal: '#5BE8C9',
      grey: '#8892B0',
      white: '#FFFFFF',
      lilac: '#CCD6F6',
      slate: '#444444',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
export default config;
