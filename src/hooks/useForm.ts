import { useState } from "react";

export const useForm = <T>(
  initialForm: T,
  validateForm: (form: T) => Partial<Record<keyof T, string>>
) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    
    if (files && files[0]) {
      setForm((prev) => ({ ...prev, [name]: files}));
      return;
    }
    
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputBlur = () => setErrors(validateForm(form));

  const onSubmit = () => null;

  return { form, errors, handleInputChange, handleInputBlur, onSubmit };
};
