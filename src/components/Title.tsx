interface Props{
  title: string,
}

export const Title = ({title}:Props) => {
  return (
    <h1 className="text-5xl text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-fuchsia-500 p-4">
      {title}
    </h1>
  )
}