import React from "react";

// nonLetter includes enter and delete button
function Key({ keyVal, nonLetter }) {
  return (
    <div className="key" id={nonLetter && "biggerBox"}>
      {keyVal}
    </div>
  );
}

export default Key;
