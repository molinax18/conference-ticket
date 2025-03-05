import Background from "./components/Background";
import Form from "./components/Form";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Background />
      <div className="container grid grid-rows-[min-content_1fr] mx-auto min-h-dvh px-4 py-10 gap-y-12 text-neutral-300">
        <Header>
          <h1 className="title">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <h2 className="text-subtitle-size">
            Secure your spot at next year's biggest coding conference.
          </h2>
        </Header>
        <section className="justify-items-center">
          <Form />
        </section>
      </div>
    </>
  );
};

export default App;
