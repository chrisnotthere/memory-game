import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './components/card_grid/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(2);
  const [imageCount, setImageCount] = useState(4);

  const resetScore = () => {
    setCurrentScore(0);
    setMaxScore(0);
  }

  useEffect(() => {
    if(currentScore > maxScore){
      setMaxScore(currentScore)
    }
  }, [currentScore]);

  return (
    <div className="App">
      <Header
        score={{ currentScore, maxScore}}
        imageCount={imageCount}
        setImageCount={setImageCount}
      />
      <Main
        setCurrentScore={setCurrentScore}
        imageCount={imageCount}
      />
    </div>
  );
}

export default App;
