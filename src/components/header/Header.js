import React from "react";
import ScoreBoard from "./ScoreBoard";
import Settings from "./Settings";
import '../../styles/Header.css'

const Header = (props) => {


  return (
    <header>
      
      <Settings />

      <div className='title'>
        <p className='titleText'>Memory Card Game</p>
        <p className='titleDescription'>click on all the images, but dont click the same image twice!</p>
      </div>

      <ScoreBoard 
        score={props.score}
      />

    </header>
  )
}

export default Header;
