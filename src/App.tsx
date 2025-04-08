import { useState } from "react";
import { TicketData } from "./models/ticketData.interface";
import Background from "./components/Background";
import Header from "./components/Header";
import TicketForm from "./components/TicketForm";
import TicketInfo from "./components/TicketInfo";

const App = () => {
  const [ticketData, setTicketData] = useState<TicketData | null>(null);

  return (
    <>
      <Background />

      {ticketData ? (
        <TicketInfo data={ticketData} />
      ) : (
        <div className="w-full max-w-3xl mx-auto grid grid-rows-[min-content_1fr] min-h-dvh px-4 py-10 gap-y-12 text-neutral-300">
          <Header>
            <h1 className="title">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>

            <h2 className="text-subtitle-size">
              Secure your spot at next year's biggest coding conference.
            </h2>
          </Header>

          <main>
            <section className="place-content-center justify-items-center">
              <TicketForm setTicketData={setTicketData} />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default App;
