/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        ink: '#1a1814',
        ink2: '#3d3a34',
        muted: '#8a8680',
        border: '#e8e4dc',
        coral: {
          DEFAULT: '#D85A30',
          light: '#FAECE7',
          dark: '#993C1D',
          border: '#F5C4B3',
          text: '#712B13',
        },
        teal: {
          DEFAULT: '#0F6E56',
          light: '#E1F5EE',
          mid: '#1D9E75',
          border: '#9FE1CB',
          text: '#085041',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
