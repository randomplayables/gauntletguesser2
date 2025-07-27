import React, { useState, ChangeEvent, FormEvent } from 'react'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

interface GuessInputProps {
  onGuess: (guess: number) => void
  disabled?: boolean
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled = false }) => {
  const [guess, setGuess] = useState<number>(MIN_NUMBER)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (!isNaN(value) && value >= MIN_NUMBER && value <= MAX_NUMBER) {
      setGuess(value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onGuess(guess)
    setGuess(MIN_NUMBER)
  }

  return (
    <div className="container">
      <h2>Make a Guess</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guess-input">
          Your Guess ({MIN_NUMBER} - {MAX_NUMBER}):
        </label>
        <input
          id="guess-input"
          type="number"
          min={MIN_NUMBER}
          max={MAX_NUMBER}
          value={guess}
          onChange={handleChange}
          disabled={disabled}
          required
        />
        <button type="submit" disabled={disabled}>
          Guess
        </button>
      </form>
    </div>
  )
}

export default GuessInput