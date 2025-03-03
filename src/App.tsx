import Background from "./components/Background";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Background />
      <div className="container grid grid-rows-[min-content_1fr] mx-auto min-h-dvh px-4 py-10 text-neutral-300">
        <Header>
          <h1 className="title">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-paragraph-size">Secure your spot at next year's biggest coding conference.</p>
        </Header>
      </div>
    </>
  );
};

export default App;
