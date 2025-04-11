import { useState } from "react";
import { validateInputFile } from "../utils/inputValidations";

export const useForm = <T>(
  initialForm: T,
  validateForm: (form: T) => Partial<Record<keyof T, string>>
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleInputFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const updatedForm = { ...form, [name]: files };

    if (validateInputFile(files)) setForm(updatedForm);

    setErrors(validateForm(updatedForm));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = () => setErrors(validateForm(form));

  const resetForm = () => setForm(initialForm);

  return {
    form,
    errors,
    handleInputChange,
    resetForm,
    handleInputFileChange,
    handleInputBlur,
  };
};
