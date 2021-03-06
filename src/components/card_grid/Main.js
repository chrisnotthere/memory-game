import React, { useEffect, useState } from "react";
import '../../styles/Main.css'
import Card from './Card'
import Cards from "./Cards";
import { drawCards } from "../helpers/Draw";
import Modal from '../Modal'

const Main = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [prevScore, setPrevScore] = useState(0);

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
    let newSrc = src.substring(10)  //this could be done better
    let card = Cards.filter(deckCard => deckCard.image === newSrc);   //production
    // let card = Cards.filter(deckCard => deckCard.image === src);      //development

    if (!card[0].isClicked) {
      props.setCurrentScore(props.currentScore + 1);
      card[0].isClicked = true;
    } else {
      setClicked(card[0].name)
      setPrevScore(props.currentScore);
      setIsGameOver(true)
      setIsOpen(true)
      resetScore();
    }
  }

  let newCards = createNewCardArray();

  return (
    <>
      <Modal open={isOpen} onClose={() => { setIsOpen(false); setIsGameOver(false) }} >
        {isGameOver === true ?
          <>
            <p>Whoopsie! You already clicked <b>{clicked}!</b></p>
            <p>Your score: {prevScore}</p>
          </>
          :
          <>
            <h2>Welcome to Mario Memory!</h2>
            <p>Get points for choosing a card, but be careful!</p>
            <p>If you select the same card twice the game is over.</p>
          </>
        }
      </Modal>
      <button onClick={() => setIsOpen(true)} className='button' >Rules</button>
      <main>
        {newCards.map(card => (
          <Card
            key={card.id}
            src={card.image}
            handleCardClick={(e) => handleCardClick(e)}   //production
            // handleCardClick={handleCardClick}   //development
          />
        ))}
      </main>
    </>
  )
}

export default Main;
