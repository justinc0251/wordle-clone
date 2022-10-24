import React, { useContext } from "react";
import { AppContext } from "../App";

// nonLetter includes enter and delete button
function Key({ keyVal, nonLetter }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      if (currentAttempt.letterPosition !== 5) return;
      // Move down one row
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else if (keyVal === "⌫") {
      // Can't delete first letter
      if (currentAttempt.letterPosition === 0) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition - 1,
      });
    } else {
      if (currentAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
      setBoard(newBoard);
      // Move to next column
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      });
    }
  };
  return (
    <div className="key" id={nonLetter && "biggerBox"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
