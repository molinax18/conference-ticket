import { TicketData } from "../models/ticketData.interface";
import Header from "./Header";
import Ticket from "./ui/Ticket";

type Props = {
  data: TicketData;
};

const TicketInfo = ({ data }: Props) => {
  const { name, email, github, avatar } = data;

  return (
    <section>
      <Header>
        <h1>
          Congrats, <span>{name}</span>! Your ticket is ready.
        </h1>

        <p>
          We've emailed your ticket to <span>{email}</span> and will send
          updates in the run up to the event.
        </p>
      </Header>

      <Ticket
        name={name}
        github={github}
        avatar={URL.createObjectURL(avatar)}
      />
    </section>
  );
};

export default TicketInfo;
