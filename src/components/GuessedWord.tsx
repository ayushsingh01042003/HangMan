import Word from "./Word"

interface GuessedWordProp {
  wordToGuess: string
}

const GuessedWord = ({ wordToGuess }: GuessedWordProp) => {
  return (
    <div className="flex justify-center mt-20 mb-10">
      {
        wordToGuess.split("").map((c) => <Word character={c.toUpperCase()}/>)
      }
    </div>
  )
}

export default GuessedWord