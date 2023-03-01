/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'first-dark-blue': '#0d1b2a',
        'secundary-dark-blue': '#1b263b',
        'third-dark-blue': '#415a77',
        light: '#e0e1dd',
      },
    },
  },
  plugins: [],
};
