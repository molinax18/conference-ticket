import { InputInfo } from "../../models/input.interface";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputInfo: InputInfo;
  handleInputValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = ({ inputInfo, handleInputValue, label }: Props) => {
  const { name, value } = inputInfo;
  const textLabel = `before:content-['${label}']`;

  return (
    <label className={`input py-12 border-2 border-dashed ${textLabel}`}>
      <input
        type="file"
        name={name}
        id={name}
        value={value}
        onChange={handleInputValue}
        className="hidden"
      />
    </label>
  );
};

export default InputFile;
