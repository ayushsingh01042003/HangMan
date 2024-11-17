import Letter from "./Letter"

interface GuessedWordProp {
  wordToGuess: string,
  currentGuess: string[]
}

const GuessedWord = ({ wordToGuess, currentGuess }: GuessedWordProp) => {
  return (
    <div className="flex justify-center mt-20 mb-10">
      {
        wordToGuess.split("").map((c, index) => 
        <Letter key={index} character={c.toUpperCase()} currentGuess={currentGuess}/>)
      }
    </div>
  )
}

export default GuessedWord