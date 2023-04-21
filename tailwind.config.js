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
    gridTemplateRows: {
      full3: "repeat(3, 33.333333333333333333333%)",
    },
    gridTemplateColumns: {
      home_custom: "56% 44%",
    },
    height: {
      home: "calc(100vh - 51px)",
    },
    backgroundColor: {
      mred: "#E20000",
      mgold: "#FFAB48",
      mblue: "#121268",
      mlightblue: "#37ABE1",
    },
    color: {
      mred: "#E20000",
      mgold: "#FFAB48",
      mblue: "#121268",
      mlightblue: "#37ABE1",
    },
    borderColor: {
      mred: "#E20000",
      mgold: "#FFAB48",
      mblue: "#121268",
      mlightblue: "#37ABE1",
    },
  },
};
export const plugins = [];
