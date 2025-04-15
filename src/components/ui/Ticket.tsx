type Props = {
  name: string;
  github: string;
  avatar: string;
};

const Ticket = ({ name, github, avatar }: Props) => {
  return (
    <div className="flex flex-col bg-[url(pattern/pattern-ticket.svg)] w-full h-80 overflow-hidden bg-no-repeat bg-center bg-contain text-neutral-300">
      <section className="flex flex-col text-subtitle-size gap-y-6 h-full p-4 justify-center xs:p-7 xs:gap-y-20 sm:justify-between sm:p-10 md:px-16">
        <header className="flex items-center gap-x-4">
          <img
            src="logo/logo-mark.svg"
            alt="Coding Conf logo"
            className="size-9 md:size-12"
          />
          <div className="flex-col gap-y-4">
            <h3 className="text-neutral-0 text-2xl font-semibold text-title-size">
              Coding Conf
            </h3>
            <span className="text-smmd:text-subtitle">Jan 31, 2025 / Austin, TX</span>
          </div>
        </header>

        <div className="flex gap-x-4 items-center sm:text-2xl">
          <img src={avatar} alt={name} className="size-12 md:size-16 rounded-md" />
          <div className="flex-col">
            <h4 className="text-neutral-0">{name}</h4>
            <span>{github}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ticket;
