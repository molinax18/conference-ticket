import { useState } from "react";

export const useForm = <T>(
  initialForm: T,
  validateForm: (form: T) => Partial<T>
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<T>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = () => setErrors(validateForm(form));

  const onSubmit = () => null;

  return { form, errors, handleInputChange, handleInputBlur, onSubmit };
};
