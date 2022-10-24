import React, { useContext } from "react";
import { AppContext } from "../App";

// nonLetter includes enter and delete button
function Key({ keyVal, nonLetter }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);
  const selectLetter = () => {
    if (currentAttempt.letterPos > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };
  return (
    <div className="key" id={nonLetter && "biggerBox"} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
