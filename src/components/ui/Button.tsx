const Button = ({
  value,
  type,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const insetShadow = "shadow-[inset_0px_-5px_0px_0px_var(--color-orange-500)]";

  return (
    <button
      className={`py-3 px-4 rounded-md bg-orange-700 text-neutral-900 font-semibold hover:cursor-pointer hover:${insetShadow} focus:${insetShadow}`}
      type={type}
    >
      {value}
    </button>
  );
};

export default Button;
