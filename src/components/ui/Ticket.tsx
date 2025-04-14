type Props = {
  name: string;
  github: string;
  avatar: string;
};

const Ticket = ({ name, github, avatar }: Props) => {
  return (
    <div className="flex items-center bg-[url(pattern/pattern-ticket.svg)] w-full overflow-hidden bg-no-repeat bg-center bg-contain text-neutral-300">
      <section className="flex flex-col gap-y-9 px-4">
        <header className="flex items-center gap-x-4">
          <img
            src="logo/logo-mark.svg"
            alt="Coding Conf logo"
            className="size-9"
          />
          <div className="flex-col gap-y-4">
            <h3 className="text-neutral-0 text-2xl font-semibold">
              Coding Conf
            </h3>
            <span className="text-sm">Jan 31, 2025 / Austin, TX</span>
          </div>
        </header>

        <div className="flex gap-x-4">
          <img src={avatar} alt={name} className="size-12 rounded-md" />
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
