import React from "react";
import '../../styles/Main.css'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Cards from "./Cards";
// import Button from 'react-bootstrap/Button';

import { bowser,dk,iggy,koopa,lakitu,lemmy,ludwig,luigi,mario,mii,morton,roy,shy,toad,waluigi,wario,wendy,yoshi } from '../../images/index';

console.log(Cards);

const clickHandler = (e) => {
  console.log(e.target);
};

const Main = (props) => {

  return (
    <>
    {/* <p>images: {props.imageCount}</p> */}

    <main>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        onClick={(e) => clickHandler(e)}
        >
        <Card.Img variant="top" src={morton} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={shy} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={roy} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={lemmy} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        onClick={(e) => clickHandler(e)}
        >
        <Card.Img variant="top" src={yoshi} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={toad} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={ludwig} />
      </Card>

      <Card 
        style={{ width: '15rem', }}
        border='light'
        className='card'
        >
        <Card.Img variant="top" src={luigi} />
      </Card>

      
  

    </main>
    </>
  )
}

export default Main;
