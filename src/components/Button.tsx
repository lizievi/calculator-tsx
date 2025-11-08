interface Props {
  value: string;
  handleClick: (value: string) => void;
}

export const Button = ({ value, handleClick }: Props) => {
  const baseStyle =
    "text-2xl border-2 text-white h-[60px] flex-1 rounded-md transition duration:300 hover:cursor-pointer";

  const isOperator = ["+", "-", "*", "/", "%", "AC"].includes(value);

  const conditionalStyle =
    value === "="
      ? " border-amber-200 bg-amber-600 hover:bg-amber-700"
      : isOperator
      ? "bg-fuchsia-700 border-fuchsia-200 hover:bg-fuchsia-800"
      : " bg-fuchsia-900 border-fuchsia-200 hover:bg-fuchsia-950";
  return (
    <button
      onClick={() => handleClick(value)}
      className={`${baseStyle} ${conditionalStyle}`}
    >
      {value}
    </button>
  );
};
