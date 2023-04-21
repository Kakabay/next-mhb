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

const Home = () => {
  return (
    <main>
      <h1>HOME</h1>
    </main>
  );
};

export default Home;
