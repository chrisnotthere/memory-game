import React from "react";
import '../../styles/Main.css'
import Card from './Card'
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
    let src = decodeURI(e.target.src.substring(21));
    let card = Cards.filter(deckCard => deckCard.image === src);

    if (!card[0].isClicked) {
      props.setCurrentScore(props.currentScore + 1);
      card[0].isClicked = true;
    } else {
      alert(`whoops! You already clicked ${card[0].name}!`);
      resetScore();
    }
  }

  let newCards = createNewCardArray();

  return (
    <main>
      {newCards.map(card => (
        <Card
          key={card.id}
          src={card.image}
          handleCardClick={handleCardClick}
        />
      ))}
    </main>
  )
}

export default Main;
