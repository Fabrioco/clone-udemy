/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Abril Fatface", "serif"],
        secondary: ["Taviraj", "serif"],
        tertiary: ["Alegreya Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
