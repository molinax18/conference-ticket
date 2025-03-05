type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props) => {
  return (
    <header className="grid justify-items-center text-center gap-y-4">
      <img src="/logo/logo-full.svg" alt="Coding Conf" />
      {children}
    </header>
  );
};

export default Header;
