import React from "react";

const ScoreBoard = (props) => {

  return (
    <div className='scoreBoard'>
      <li>Current Score: {props.score.currentScore}</li>
      <li>High Score: {props.score.bestScore}/18</li>
    </div>
  )
}

export default ScoreBoard;
