import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptNumber }) {
  // Context api used for state management in order to keep track of letters on board
  const { board, correctWord, currentAttempt, setDisabledLetters } = useContext(AppContext);
  const letter = board[attemptNumber][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState =
    // Show colors of letters after user has inputted at least one guess
    currentAttempt.attempt > attemptNumber &&
    (correct ? "correct" : almost ? "almost" : "wrong");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
