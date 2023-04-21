const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        aeroport: ["var(--font-aeroport)", ...fontFamily.sans],
        redhat: ["var(--font-redhat)", ...fontFamily.sans],
        mw: ["var(--font-mw)", ...fontFamily.sans],
        mw_sans: ["var(--font-mwsans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
