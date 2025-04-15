type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className="grid gap-y-8 justify-items-center text-center">
      <img src="/logo/logo-full.svg" alt="Coding Conf" />
      {children}
    </header>
  );
};

export default Header;
