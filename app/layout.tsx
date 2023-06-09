import localFont from "next/font/local";
import { Red_Hat_Display } from "next/font/google";
import { Merriweather } from "next/font/google";
import { Merriweather_Sans } from "next/font/google";
import { Alexandria } from "next/font/google";

import "react-multi-carousel/lib/styles.css";
import "./globals.css";
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
const alexandria = Alexandria({
  subsets: ["latin", "latin-ext"],
  variable: "--font-alexandria",
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
      lang="tm"
      className={`${aeroport.variable} ${mw.variable} ${redhat.variable} ${mw_sans.variable} ${alexandria.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
