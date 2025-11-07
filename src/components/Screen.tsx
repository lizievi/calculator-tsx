interface Props {
  input: string,
}

export const Screen = ({ input }: Props) => {
  return <div className="border-3 border-fuchsia-200 bg-fuchsia-900 p-2 rounded-md text-end text-2xl h-[60px]">{input}</div>;
};
