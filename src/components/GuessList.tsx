import React from 'react'

interface GuessEntry {
  guess: number
  feedback: 'higher' | 'lower' | 'correct'
}

interface GuessListProps {
  guesses: GuessEntry[]
}

const GuessList: React.FC<GuessListProps> = ({ guesses }) => {
  return (
    <div className="container">
      <h2>Previous Guesses</h2>
      {guesses.length === 0 ? (
        <p>No guesses yet.</p>
      ) : (
        <ul>
          {guesses.map((entry, index) => (
            <li key={index}>
              Attempt {index + 1}: {entry.guess} -{' '}
              {entry.feedback === 'higher'
                ? 'Too low'
                : entry.feedback === 'lower'
                ? 'Too high'
                : 'Correct!'}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GuessList