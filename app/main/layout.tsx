"use client";
import GlobalContext from "@/context/GlobalContext";
import { ITheme } from "@/typings/theme.type";
import { useState, useMemo } from "react";

interface IProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ITheme["theme"]>("light");
  const themeContext = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);
  setTimeout(() => setTheme("dark"), 3000);
  return (
    <html lang="tm" className={theme}>
      <body>
        <GlobalContext.Provider value={{ themeContext }}>
          {children}
        </GlobalContext.Provider>
      </body>
    </html>
  );
};

export default RootLayout;
