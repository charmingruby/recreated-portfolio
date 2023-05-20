/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        alt: 'var(--font-bai-jamjuree)',
      },
      blur: {
        full: '194px',
      },
      colors: {
        primary: {
          light: '#32A6C3',
          main: '#2D93AD',
          dark: '#2A8AA2',
        },
        light: {
          main: '#e1e1e6',
          dark: '#a8a8b3',
          darker: '#878797',
        },
        dark: {
          lighten: '#3A3A41',
          light: '#29292e',
          main: '#121214',
          dark: '#09090a',
        },
      },
    },
  },
  plugins: [],
}
