import { useForm } from "../hooks/useForm";
import { ITicketForm } from "../models/ticketForm.interface";
import Button from "./ui/Button";
import Input from "./ui/Input";

const initialForm: ITicketForm = {
  name: "",
  email: "",
};

const validateTicketForm = (form: ITicketForm) => {
  const errors: Partial<ITicketForm> = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  if (!form.name.trim()) {
    errors.name = "El campo está vacío";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Sólo ingrese letras o espacios";
  }

  if (!form.email.trim()) {
    errors.email = "El campo está vacío";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "Ingrese un email válido";
  }

  return errors;
};

const TicketForm = () => {
  const { form, errors, handleInputChange, handleInputBlur, onSubmit } =
    useForm<ITicketForm>(initialForm, validateTicketForm);

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-6 w-full max-w-xl">
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

      <Button value="Generate My Ticket" type="submit" />
    </form>
  );
};

export default TicketForm;
