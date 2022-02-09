import React from "react";
import ScoreBoard from "./ScoreBoard";
import Slider from "./Slider";
import '../../styles/Header.css'

const Header = (props) => {

  return (
    <header>
      
      <Slider 
        imageCount={props.imageCount}
        setImageCount={props.setImageCount}
      />

      <div className='title'>
        <p className='titleText'>Mario Memory</p>
      </div>

      <ScoreBoard 
        score={props.score}
      />
      {/* <p></p> */}

    </header>
  )
}

export default Header;
