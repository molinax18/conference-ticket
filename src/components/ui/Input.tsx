import { InputInfo } from "../../models/input.interface";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  info: InputInfo;
  setInfo: (info: InputInfo) => void;
  label?: string;
}

const Input = ({ info, setInfo, type = "text", label, placeholder }: Props) => {
  if (label) {
    return (
      <fieldset className="flex flex-col gap-y-1">
        <label htmlFor={info.name} id={info.name}>
          {label}
        </label>
        <input
          type={type}
          name={info.name}
          id={info.name}
          value={info.value}
          onChange={(e) => setInfo({ ...info, value: e.target.value })}
          placeholder={placeholder}
          className="input"
        />
      </fieldset>
    );
  }

  return (
    <input
      type={type}
      name={info.name}
      id={info.name}
      value={info.value}
      onChange={(e) => setInfo({ ...info, value: e.target.value })}
      className="input"
    />
  );
};

export default Input;
