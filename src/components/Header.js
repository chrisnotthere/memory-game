import React from "react";
import '../styles/Header.css'

const Header = () => {


  return (
    <header>
      <div className='settings'>
        <li>difficulty slider</li>
        <li>show name checkbox</li>
      </div>
      <div className='title'>
        Memory Card Game
      </div>
      <div className='scoreBoard'>
        <li>current score:2</li>
        <li>max score:5</li>
      </div>
    </header>
  )
}

export default Header;
