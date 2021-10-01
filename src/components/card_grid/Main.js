import React from "react";
import '../../styles/Main.css'
import Card from "react-bootstrap/Card";
import Cards from "./Cards";
import { drawCards } from "../helpers/Draw";


const Main = (props) => {
  
  const resetScore = () => {
    props.setCurrentScore(0);
    Cards.forEach(deckCard => deckCard.isClicked = false);
    console.log('resetting score and cards');
  }
  
  const createNewCardArray = () => {
    let cardsToDraw = drawCards(props.imageCount);  
    let newCards = Cards.filter(card => cardsToDraw.includes(card.id));
    return newCards;
  }
  
  const handleCardClick = (e) => {

    //find card that was clicked
    let src = decodeURI(e.target.src.substring(21));
    let card = Cards.filter(deckCard => deckCard.image === src);
    console.log(card[0].name, card[0].isClicked);
    
    //check if clicked already? yes, you lose. no, increase current score
    if(!card[0].isClicked) {
      props.setCurrentScore(props.currentScore + 1);
      card[0].isClicked = true; 
      console.log('this card has not been clicked before');
      //shuffle();    
    } else {
      console.log('you have already clicked this card, you lose');
      alert(`whoops! You already clicked ${card[0].name}!`);
      resetScore();
      //shuffle();
    }  
  }

  let newCards = createNewCardArray();
  //console.log({newCards});

  return (
    <main>

      {newCards.map(card => (
        //console.log(card.name, card.id),
        <Card.Img 
          key={card.id}
          src={card.image} 
          style={{ width: '15rem', }}
          className='card'
          onClick={handleCardClick}
        />
      ))}

    </main>
  )
}

export default Main;
