import React from "react";
import '../../styles/Main.css'
import Card from "react-bootstrap/Card";
import Cards from "./Cards";
import { drawCards } from "../helpers/Draw";

// eslint-disable-next-line no-unused-vars
import { bowser,dk,iggy,koopa,lakitu,lemmy,ludwig,luigi,mario,mii,morton,roy,shy,toad,waluigi,wario,wendy,yoshi } from '../../images/index';



const Main = (props) => {
  
  let cardsToDraw = drawCards(props.imageCount);
  console.log(`cards to draw: ${cardsToDraw}`);

  //console.log({Cards});
  let newCards = Cards.filter(card => cardsToDraw.includes(card.id));
  console.log(newCards);


  //let cardsToShow = Cards.filter(card => card.id === );

  return (
    <main>

      {/* {props.Cards.map(card => (
        // {console.log(card.name)}
        <Card.Img 
        key={card.id}
        src={card.image} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
        />
      ))} */}

      {newCards.map(card => (
        // {console.log(card.name)}
        <Card.Img 
        key={card.id}
        src={card.image} 
        style={{ width: '15rem', }}
        className='card'
        onClick={props.handleCardClick}
        />
      ))}

    </main>
  )
}

export default Main;
