"use client";
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
          <Nav />
          <main>{children}</main>
        </body>
      </GlobalContext.Provider>
    </html>
  );
};

export default RootLayout;
