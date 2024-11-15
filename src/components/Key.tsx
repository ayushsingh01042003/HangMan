import { useState } from "react"

interface keyProp {
  letter: string
}

const Key = ({ letter }: keyProp) => {

  const[currentGuess, setCurrentGuess] = useState<string[]>([])

  return (
    <div onClick={() => setCurrentGuess([...currentGuess, letter])} className="border-2 border-black m-1 text-center py-3 font-extrabold text-lg hover:bg-blue-300">
      { letter }
    </div>
  )
}

export default Key