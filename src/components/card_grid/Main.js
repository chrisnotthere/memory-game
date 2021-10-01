import React from "react";
import '../../styles/Main.css'
import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
//import Cards from "./Cards";

// eslint-disable-next-line no-unused-vars
import { bowser,dk,iggy,koopa,lakitu,lemmy,ludwig,luigi,mario,mii,morton,roy,shy,toad,waluigi,wario,wendy,yoshi } from '../../images/index';

// console.log(Cards);


const Main = (props) => {

  return (
    <>
    {/* <p>images: {props.imageCount}</p> */}

    <main>

      <Card.Img 
        src={morton} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
      />

      <Card.Img 
        src={shy} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
      />

      <Card.Img 
        src={mario} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
      />

      <Card.Img 
        src={luigi} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
      />
            

  

    </main>
    </>
  )
}

export default Main;
