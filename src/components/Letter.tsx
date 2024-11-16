import { Dispatch, SetStateAction } from "react"

interface LetterProp {
  character: string
  currentGuess: string[],
  setCurrentGuess: Dispatch<SetStateAction<string[]>>
}

const Letter = ({ character, currentGuess, setCurrentGuess }: LetterProp) => {
  return (
    <div>
      <div className="text-lg font-bold text-center invisible">
        { character }
      </div>
      <div className="h-1 w-10 bg-black mx-5"/>          
    </div>
  )
}

export default Letter