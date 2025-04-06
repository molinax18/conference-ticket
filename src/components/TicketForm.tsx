import { Dispatch, SetStateAction } from "react";
import { useForm } from "../hooks/useForm";
import { ITicketForm } from "../models/ticketForm.interface";
import { validateTicketForm } from "../utils/forms/validateTicketForm";
import Button from "./ui/Button";
import Input from "./ui/Input";
import InputFile from "./ui/InputFile";
import { TicketData } from "../models/ticketData.interface";

const initialForm: ITicketForm = {
  avatar: null,
  name: "",
  email: "",
  github: "",
};

type Props = {
  setTicketData: Dispatch<SetStateAction<TicketData | null>>;
};

const TicketForm = ({ setTicketData }: Props) => {
  const { form, errors, handleInputChange, handleInputBlur, resetForm } =
    useForm<ITicketForm>(initialForm, validateTicketForm);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleInputBlur();

    if (Object.keys(errors).length === 0) {
      setTicketData({...form, avatar: form.avatar![0]});
      resetForm();
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full max-w-xl">
      <InputFile
        label="Upload Avatar"
        name="avatar"
        errorMessage={errors.avatar || null}
        onChange={handleInputChange}
      />

      <Input
        label="Full Name"
        name="name"
        value={form.name}
        placeholder="John Doe"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        errorMessage={errors.name || null}  
      />

      <Input
        label="Email Address"
        type="email"
        name="email"
        value={form.email}
        placeholder="johndoe@gmail.com"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        errorMessage={errors.email || null}
      />

      <Input
        label="GitHub Username"
        name="github"
        value={form.github}
        placeholder="@johndoe-123"
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        errorMessage={errors.github || null}
      />

      <Button value="Generate My Ticket" type="submit" />
    </form>
  );
};

export default TicketForm;
