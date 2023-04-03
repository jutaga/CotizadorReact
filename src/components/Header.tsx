
interface PropsHeader {
  titulo: string;
}


export const Header = ({ titulo }: PropsHeader) => {
  return (
    <header className="bg-dark text-white py-1">
        <h1 className="text-center">{titulo}</h1>
    </header>
  )
}
