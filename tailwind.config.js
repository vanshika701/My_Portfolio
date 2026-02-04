/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Courier New"', 'Courier', 'monospace'],
        mono: ['"Courier New"', 'Courier', 'monospace'],
      },
      colors: {
        barbie: {
          pink: '#ff007f',
          soft: '#ffebf5',
        },
        cyber: {
          black: '#0f0f0f',
          gray: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
};
