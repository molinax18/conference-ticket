import { InputInfo } from "../../models/input.interface";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputInfo: InputInfo;
  handleInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  inputInfo,
  handleInputValue,
  type = "text",
  label,
  placeholder,
  className,
}: Props) => {
  const { name, value } = inputInfo;

  if (label) {
    return (
      <fieldset className="flex flex-col gap-y-1 group">
        <label htmlFor={name} id={name}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={handleInputValue}
          placeholder={placeholder}
          className={className ? `${className} input` : "input"}
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
      onChange={handleInputValue}
      className={className ? `${className} input` : "input"}
    />
  );
};

export default Input;
