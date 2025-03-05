import { useState } from "react";

interface Input {
  name: string;
  value: string;
}

const Form = () => {
  const [fullName, setFullName] = useState<Input>({
    name: "fullName",
    value: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name={fullName.name}
        value={fullName.value}
        onChange={(e) => setFullName({ ...fullName, value: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
