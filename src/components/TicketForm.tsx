import { useForm } from "../hooks/useForm";
import { ITicketForm } from "../models/ticketForm.interface";
import { validateInputByRegex } from "../util/inputValidations";
import Button from "./ui/Button";
import Input from "./ui/Input";
import InputFile from "./ui/InputFile";

const initialForm: ITicketForm = {
  avatar: "",
  name: "",
  email: "",
  github: "",
};

const validateTicketForm = (form: ITicketForm) => {
  const errors: Partial<ITicketForm> = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexGithub = /^@(?!-)[a-zA-Z0-9-]{1,38}(?<!-)$/;

  if (!validateInputByRegex(form.name, regexName)) {
    errors.name = "Enter a valid name";
  }

  if (!validateInputByRegex(form.email, regexEmail)) {
    errors.email = "Enter a valid email";
  }

  if (!validateInputByRegex(form.github, regexGithub)) {
    errors.github = "Enter a valid user";
  }

  return errors;
};

const TicketForm = () => {
  const { form, errors, handleInputChange, handleInputBlur, onSubmit } =
    useForm<ITicketForm>(initialForm, validateTicketForm);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full max-w-xl">
      <InputFile
        label="Upload Avatar"
        name="avatar"
        value={form.avatar}
        errorMessage={errors.avatar || null}
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
