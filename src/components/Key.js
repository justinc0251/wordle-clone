import React, { useContext } from "react";
import { AppContext } from "../App";

// nonLetter includes enter and delete button
function Key({ keyVal, nonLetter, disabled }) {
  const { onDelete, onSelectLetter, onEnter } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === "ENTER") {
      onEnter();
    } else if (keyVal === "⌫") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={nonLetter ? "biggerBox" : disabled && "disabled"}
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
