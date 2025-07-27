# Number Guess Gauntlet

## Description  
Number Guess Gauntlet is a competitive, multiplayer-style game where one player (the Challenger) picks a secret number and another player (the Opponent) tries to guess it within a limited number of attempts. Each guess returns feedback (“higher” or “lower”) until the Opponent finds the correct number or exhausts their attempts. Challenges can be shared via unique URLs, and results are recorded on completion.

## How to Play  
1. Challenger visits the game URL and selects a secret number within the defined range.  
2. A unique challenge link is generated. The Challenger shares this link with the Opponent.  
3. The Opponent opens the challenge link and submits guesses.  
4. After each guess, feedback indicates whether the secret number is higher or lower.  
5. The Opponent continues guessing until they find the number or use up all attempts.  
6. Once the game ends, the challenge is resolved and both players can view the outcome.

## Getting Started  
1. Clone the repository  
2. Install dependencies  
   ```
   npm install
   ```  
3. Start the development server  
   ```
   npm run dev
   ```  
4. Open `http://localhost:3000` in your browser to play the game.