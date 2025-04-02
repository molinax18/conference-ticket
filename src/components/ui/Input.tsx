import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  errorMessage: string | null;
}

const Input = ({
  label,
  name,
  type = "text",
  value,
  placeholder,
  required = true,
  onChange,
  onBlur,
  errorMessage,
}: Props) => {
  const errorInput = "text-orange-700 border-orange-700 outline-orange-700";

  if (label) {
    return (
      <fieldset className="flex flex-col gap-y-1">
        <div className="flex items-center justify-between">
          <label
            htmlFor={name}
            id={name}
            className={`${errorMessage && errorInput} flex-1/2`}
          >
            {label}
          </label>

          {errorMessage && (
            <span className={`${errorInput} inline-flex items-center gap-x-2 text-sm sm:text-base`}>
              <AiOutlineInfoCircle /> {errorMessage}
            </span>
          )}
        </div>

        <input
          type={type}
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`${errorMessage ? errorInput : ""} input`}
        />
      </fieldset>
    );
  }

  return (
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      required={required}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      className={`${errorMessage ? errorInput : ""} input`}
    />
  );
};

export default Input;
