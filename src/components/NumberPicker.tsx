import React, { useState, ChangeEvent, FormEvent } from 'react'
import { MIN_NUMBER, MAX_NUMBER } from '../constants'

interface NumberPickerProps {
  onNumberPicked: (selectedNumber: number) => void
}

const NumberPicker: React.FC<NumberPickerProps> = ({ onNumberPicked }) => {
  const [selectedNumber, setSelectedNumber] = useState<number>(MIN_NUMBER)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (!isNaN(value) && value >= MIN_NUMBER && value <= MAX_NUMBER) {
      setSelectedNumber(value)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onNumberPicked(selectedNumber)
  }

  return (
    <div className="container">
      <h2>Pick a Secret Number</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="secret-number">
          Secret Number ({MIN_NUMBER} - {MAX_NUMBER}):
        </label>
        <input
          id="secret-number"
          type="number"
          min={MIN_NUMBER}
          max={MAX_NUMBER}
          value={selectedNumber}
          onChange={handleChange}
          required
        />
        <button type="submit">Start Challenge</button>
      </form>
    </div>
  )
}

export default NumberPicker