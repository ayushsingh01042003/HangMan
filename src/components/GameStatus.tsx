interface GameStatusProps {
  isWinner: boolean,
  isLoser: boolean
}

const GameStatus = ({ isWinner, isLoser }: GameStatusProps) => {
  return (
    <div className="justify-self-center m-4 font-bold text-lg">
      {(isWinner && `YOU WON!`) || (isLoser && `YOU LOST!`) || `Guess the word!`} 
    </div>
  )
}

export default GameStatus