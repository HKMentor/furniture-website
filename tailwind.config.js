// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash-display': ['"Clash Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
