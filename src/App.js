import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './components/card_grid/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/card_grid/Cards';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [imageCount, setImageCount] = useState(4);

  useEffect(() => {
    if(currentScore > bestScore){
      setBestScore(currentScore)
    }
    if(currentScore > 17){
      alert('Congrats! You beat the game!!')
      window.location.reload();      
    }
  }, [currentScore]);

  // //draw cards on mount
  // useEffect(() => {
  //   drawCards(imageCount);
  // }, [])

  // //draw cards on imageCount change
  // useEffect(() => {
  //   drawCards(imageCount);
  // }, [imageCount])

  return (
    <div className="App">
      <Header
        score={{ currentScore, bestScore}}
        imageCount={imageCount}
        setImageCount={setImageCount}
      />
      <Main
        setCurrentScore={setCurrentScore}
        currentScore={currentScore}
        imageCount={imageCount}
        Cards={Cards}
      />
    </div>
  );
}

export default App;
