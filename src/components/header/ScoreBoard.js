import React from "react";

const ScoreBoard = (props) => {

  return (
    <div className='scoreBoard'>
      <li>current score: {props.score.currentScore}</li>
      <li>max score: {props.score.maxScore}</li>
    </div>
  )
}

export default ScoreBoard;
