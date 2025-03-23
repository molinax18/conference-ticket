import { AiOutlineInfoCircle } from "react-icons/ai";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  value: string;
  errorMessage: string | null;
}

const InputFile = ({
  label,
  name,
  value,
  required = true,
  errorMessage,
}: Props) => {
  return (
    <fieldset className="grid gap-y-2">
      <label className="grid gap-y-2">
        <span>{label}</span>
        <div className="grid items-center input py-8 border-2 border-dashed cursor-pointer">
          <input
            type="file"
            name={name}
            id={name}
            value={value}
            required={required}
            className="hidden"
          />
          <div className="grid text-center gap-y-3">
            <img
              src="/icon-upload.svg"
              alt="Upload icon"
              className="mx-auto bg-gray-500/20 border-[1px] border-neutral-700 rounded-xl p-4"
            />
            <span className="text-neutral-500">
              Drag and drop or click to upload
            </span>
          </div>
        </div>
      </label>
      <span className="inline-flex items-center gap-x-2 text-sm sm:text-base">
        <AiOutlineInfoCircle />
        {errorMessage
          ? errorMessage
          : "Upload your photo (JPG or PNG, max size: 500KB)"}
      </span>
    </fieldset>
  );
};

export default InputFile;
