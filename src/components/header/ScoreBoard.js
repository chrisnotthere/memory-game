import React from "react";

const ScoreBoard = (props) => {

  return (
    <div className='scoreBoard'>
      <li>current score: {props.score.currentScore}</li>
      <li>best score: {props.score.bestScore}</li>
    </div>
  )
}

export default ScoreBoard;
