import React from 'react'
import { MAX_ATTEMPTS } from '../constants'

type Feedback = 'higher' | 'lower' | 'correct'

interface GuessEntry {
  guess: number
  feedback: Feedback
}

interface GameStatusProps {
  guesses: GuessEntry[]
  secretNumber: number
}

const GameStatus: React.FC<GameStatusProps> = ({ guesses, secretNumber }) => {
  const attemptsUsed = guesses.length
  const remainingAttempts = MAX_ATTEMPTS - attemptsUsed
  const lastFeedback = guesses[attemptsUsed - 1]?.feedback
  const isWon = lastFeedback === 'correct'
  const isLost = !isWon && remainingAttempts <= 0

  return (
    <div className="container">
      {isWon ? (
        <>
          <h2>Congratulations!</h2>
          <p>You guessed the number in {attemptsUsed} attempt{attemptsUsed > 1 ? 's' : ''}.</p>
        </>
      ) : isLost ? (
        <>
          <h2>Game Over!</h2>
          <p>You've used all attempts. The correct number was {secretNumber}.</p>
        </>
      ) : (
        <h2>Remaining Attempts: {remainingAttempts}</h2>
      )}
    </div>
  )
}

export default GameStatus