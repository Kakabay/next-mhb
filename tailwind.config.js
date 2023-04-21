import { fontFamily } from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      aeroport: ["var(--font-aeroport)", ...fontFamily.sans],
      redhat: ["var(--font-redhat)", ...fontFamily.sans],
      mw: ["var(--font-mw)", ...fontFamily.sans],
      mw_sans: ["var(--font-mwsans)", ...fontFamily.sans],
    },
  },
};
export const plugins = [];
