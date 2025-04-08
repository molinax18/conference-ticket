type Props = {
  name: string;
  github: string;
  avatar: string;
};

const Ticket = ({ name, github, avatar }: Props) => {
  return (
    <div>
      <img src={avatar} alt={name} />
      {name + github}
    </div>
  );
};

export default Ticket;
