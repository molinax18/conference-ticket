import { InputInfo } from "../models/input.interface";
import { useState } from "react";
import Input from "./ui/Input";
import Button from "./ui/Button";

const Form = () => {
  const [avatar, setAvatar] = useState<InputInfo>({
    name: "avatar",
    value: "",
  });

  const [fullName, setFullName] = useState<InputInfo>({
    name: "fullName",
    value: "",
  });

  const [email, setEmail] = useState<InputInfo>({
    name: "email",
    value: "",
  });

  const [gitHub, setGitHub] = useState<InputInfo>({
    name: "gitHub",
    value: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full max-w-xl">
      <Input info={avatar} setInfo={setAvatar} label="Upload Avatar" />

      <Input
        info={fullName}
        setInfo={setFullName}
        label="Full Name"
        placeholder="John Doe"
      />

      <Input
        info={email}
        setInfo={setEmail}
        label="Email Address"
        placeholder="example@email.com"
      />

      <Input
        info={gitHub}
        setInfo={setGitHub}
        label="GitHub Username"
        placeholder="@yourusername"
      />

      <Button type="submit" value="Generate My Ticket" />
    </form>
  );
};

export default Form;
