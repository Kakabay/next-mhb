"use client";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import GlobalContext from "@/context/GlobalContext";
import { ITheme } from "@/typings/theme.type";
import { useState, useMemo } from "react";

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const themeContext = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  return (
    <html lang="tm" className={theme}>
      <GlobalContext.Provider value={{ themeContext }}>
        <body>
          <h1 className="hidden">Turkmen TV</h1>
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </GlobalContext.Provider>
    </html>
  );
};

export default RootLayout;
