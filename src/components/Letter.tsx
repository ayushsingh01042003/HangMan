interface LetterProp {
  character: string
  currentGuess: string[]
}

const Letter = ({ character, currentGuess }: LetterProp) => {
  return (
    <div>
      <div className={`text-lg font-bold text-center ${!currentGuess.includes(character) && 'invisible'}`}>
        { character }
      </div>
      <div className="h-1 w-10 bg-black mx-5"/>          
    </div>
  )
}

export default Letter