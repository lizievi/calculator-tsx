interface Props {
  value: string,
  handleClick: () => void,
}

export const Button = ({value, handleClick}: Props) => {
  return (
    <button onClick={handleClick} className={`text-2xl border-2 bg-fuchsia-950 text-white h-[60px] flex-1 rounded-md border-fuchsia-200 `}>{value}</button>
  )
}