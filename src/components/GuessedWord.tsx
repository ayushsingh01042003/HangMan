import Letter from "./Letter"
import { Dispatch, SetStateAction } from "react"

interface GuessedWordProp {
  wordToGuess: string,
  currentGuess: string[],
  setCurrentGuess: Dispatch<SetStateAction<string[]>>
}

const GuessedWord = ({ wordToGuess, currentGuess, setCurrentGuess }: GuessedWordProp) => {
  return (
    <div className="flex justify-center mt-20 mb-10">
      {
        wordToGuess.split("").map((c, index) => 
        <Letter key={index} character={c.toUpperCase()} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess}/>)
      }
    </div>
  )
}

export default GuessedWord