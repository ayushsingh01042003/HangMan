import { useState } from 'react'
import './index.css'
import Keyboard from './components/Keyboard'
import words from './assets/wordList.json'
import Hangman from './components/Hangman'
import GuessedWord from './components/GuessedWord'
import GameStatus from './components/GameStatus'

const App = () => {

  const[currentGuess, setCurrentGuess] = useState<string[]>([])
  const [wordToGuess] = useState(
    words[Math.floor(Math.random() * words.length)]
  )
  const incorrectLetters: string[] = currentGuess.filter((char) => !wordToGuess.includes(char.toLowerCase()))
  const isLoser: boolean = incorrectLetters.length >= 6
  const isWinner: boolean = wordToGuess
    .split('')
    .every(char => currentGuess.includes(char.toUpperCase()))

  return (
    <div className='max-w-xl mx-auto'>
      <GameStatus isWinner={isWinner} isLoser={isLoser} />
      <Hangman numberOfChances={incorrectLetters.length} />
      <GuessedWord wordToGuess={wordToGuess} currentGuess={currentGuess} />
      <Keyboard currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
    </div>
  )
}

export default App