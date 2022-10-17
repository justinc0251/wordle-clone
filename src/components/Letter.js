import React, {useContext} from "react";
import {AppContext} from '../App'

function Letter({letterPosition, attemptNumber}) {
  // Context api for state management in order to keep track of letters on board
  const {board} = useContext(AppContext);
  const letter = board[attemptNumber][letterPosition];
  return <div className="letter">{letter}</div>;
}

export default Letter;
