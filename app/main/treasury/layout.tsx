interface IProps {
  children: React.ReactNode;
}

function RootLayout({ children }: IProps) {
  return <div>{children}</div>;
}

export default RootLayout;
