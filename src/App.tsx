import { useState } from 'react'
import './index.css'
import Keyboard from './components/Keyboard'
import words from './assets/wordList.json'
import Hangman from './components/Hangman'
import GuessedWord from './components/GuessedWord'
import GameStatus from './components/GameStatus'

const App = () => {

  const[currentGuess, setCurrentGuess] = useState<string[]>([])
  const wordToGuess: string = words[Math.floor(Math.random() * words.length)]

  return (
    <div className='max-w-xl mx-auto'>
      <GameStatus />
      <Hangman />
      <GuessedWord wordToGuess={wordToGuess} currentGuess={currentGuess} setCurrentGuess={setCurrentGuess} />
      <Keyboard />
    </div>
  )
}

export default App