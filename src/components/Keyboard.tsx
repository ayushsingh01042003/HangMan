import Key from "./Key"

const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
]

const Keyboard = () => {
  return (
    <div className="grid grid-cols-8">
      {LETTERS.map((letter) => {
        return <Key letter={letter} />
      })}
    </div>
  )
}

export default Keyboard