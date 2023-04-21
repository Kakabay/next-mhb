import "./globals.css";

export const metadata = {
  title: "Turkmen TV",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
