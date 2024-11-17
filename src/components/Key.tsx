import { Dispatch, SetStateAction } from "react"

interface keyProp {
  letter: string,
  currentGuess: string[],
  setCurrentGuess: Dispatch<SetStateAction<string[]>>
}


const Key = ({ letter, currentGuess, setCurrentGuess }: keyProp) => {
  
  const handleKeyPress = () => {
    if(currentGuess.includes(letter)) {
      return
    }
    setCurrentGuess([...currentGuess, letter])
  }
  
  return (
    <div onClick={handleKeyPress} 
    className={`border-2 border-black m-1 text-center py-3 font-extrabold text-lg ${currentGuess.includes(letter) ? 'bg-gray-300' : 'hover:bg-blue-300'}`}>
      { letter }
    </div>
  )
}

export default Key