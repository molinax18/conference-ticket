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
      <div className="w-full max-w-3xl mx-auto grid grid-rows-[min-content_min-content] min-h-dvh px-4 py-10 gap-y-12 text-neutral-300">
        <Header>
          <h1 className="text-neutral-0 text-4xl font-bold text-center">
            Congrats,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-neutral-0 bg-clip-text text-transparent">
              {name}
            </span>
            ! Your ticket is ready.
          </h1>

          <p className="text-neutral-300 text-center text-subtitle-size">
            We've emailed your ticket to{" "}
            <span className="text-orange-500">{email}</span> and will send
            updates in the run up to the event.
          </p>
        </Header>

        <Ticket
          name={name}
          github={github}
          avatar={URL.createObjectURL(avatar)}
        />
      </div>
    </section>
  );
};

export default TicketInfo;
