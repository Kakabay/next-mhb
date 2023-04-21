import "./globals.css";

import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Merriweather_Sans } from "next/font/google";

// FONTS
const aeroport = localFont({
  src: "../fonts/Aeroport_Bold.otf",
  variable: "--font-aeroport",
});
const redhat = Red_Hat_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-redhat",
});
const mw = Merriweather({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
  weight: "700",
  variable: "--font-mw",
});
const mw_sans = Merriweather_Sans({
  subsets: ["cyrillic-ext", "latin", "latin-ext"],
  variable: "--font-mwsans",
});

export const metadata = {
  title: "Turkmen TV",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html
      lang="en"
      className={`${aeroport.variable} ${mw.variable} ${redhat.variable} ${mw_sans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
