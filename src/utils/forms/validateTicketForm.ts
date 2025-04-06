import { ITicketForm } from "../../models/ticketForm.interface";
import { validateInputByRegex, validateInputFile } from "../inputValidations";


export const validateTicketForm = (form: ITicketForm) => {
  const errors: Partial<Record<keyof ITicketForm, string>> = {};
  const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexGithub = /^@(?!-)[a-zA-Z0-9-]{1,38}(?<!-)$/;

  if (!validateInputFile(form.avatar)) {
    errors.avatar = "Enter a valid file";
  }

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