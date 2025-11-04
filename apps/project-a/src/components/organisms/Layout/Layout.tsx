interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return <main>{children}</main>;
};

export default Layout;
