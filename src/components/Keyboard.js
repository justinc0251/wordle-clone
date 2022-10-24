import React from "react";
import Key from "./Key";

function Keyboard() {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  return (
    <div className="keyboard">
      <div className="keyLine1">
        {keys1.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="keyLine2">
        {keys2.map((key) => {
          return <Key keyVal={key} />;
        })}
      </div>
      <div className="keyLine3">
        <Key keyVal={"ENTER"} nonLetter/>
        {keys3.map((key) => {
          return <Key keyVal={key} />;
        })}
        <Key keyVal={"⌫"} nonLetter/>
      </div>
    </div>
  );
}

export default Keyboard;
