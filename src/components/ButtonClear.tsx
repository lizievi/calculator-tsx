interface Props {
  value: string,
  handleClick: () => void,
}


export const ButtonClear = ({value, handleClick}: Props) => {
  return (
    <div onClick={handleClick} className="text-center border-3 border-fuchsia-200 bg-amber-600 p-2 rounded-md flex-1">{value}</div>
  )
}