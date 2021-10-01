import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './components/card_grid/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/card_grid/Cards';
import { shuffle } from './components/helpers/Shuffle';
import { drawCards } from './components/helpers/Draw';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imageCount, setImageCount] = useState(4);

  const resetScore = () => {
    setCurrentScore(0);
    Cards.forEach(deckCard => deckCard.isClicked = false);
    console.log('resetting score and cards');
  }

  useEffect(() => {
    if(currentScore > bestScore){
      setBestScore(currentScore)
    }
  }, [bestScore, currentScore]);


  //draw cards on mount
  useEffect(() => {
    drawCards();
  }, [])

  // //draw cards on imageCount change
  // useEffect(() => {
  //   drawCards(imageCount);
  // }, [imageCount])


  const handleCardClick = (e) => {

    //find card that was clicked
    let src = decodeURI(e.target.src.substring(21));
    let card = Cards.filter(deckCard => deckCard.image === src);
    console.log(card[0].name, card[0].isClicked);
    
    //check if clicked already? yes, you lose. no, increase current score
    if(!card[0].isClicked) {
      setCurrentScore(currentScore + 1);
      card[0].isClicked = true; 
      console.log('this card has not been clicked before');
      shuffle();    
    } else {
      console.log('you have already clicked this card, you lose');
      alert('card already clicked, you lose!');
      resetScore();
      shuffle();
    }

  }

  return (
    <div className="App">
      <Header
        score={{ currentScore, bestScore}}
        imageCount={imageCount}
        setImageCount={setImageCount}
      />
      <Main
        setCurrentScore={setCurrentScore}
        imageCount={imageCount}
        handleCardClick={(e) => handleCardClick(e)}
        Cards={Cards}
      />
    </div>
  );
}

export default App;
