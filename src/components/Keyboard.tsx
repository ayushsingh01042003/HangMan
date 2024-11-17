import { Dispatch, SetStateAction } from "react"
import Key from "./Key"

const LETTERS = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G',
  'H', 'I', 'J', 'K', 'L', 'M', 'N',
  'O', 'P', 'Q', 'R', 'S', 'T', 'U',
  'V', 'W', 'X', 'Y', 'Z'
]

interface KeyboardProp {
  currentGuess: string[],
  setCurrentGuess: Dispatch<SetStateAction<string[]>>
}

const Keyboard = ({ currentGuess, setCurrentGuess }: KeyboardProp) => {
  return (
    <div className="grid grid-cols-8">
      {LETTERS.map((letter, index) => {
        return <Key key={index} letter={letter} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
      })}
    </div>
  )
}

export default Keyboard