import React, { useState, useEffect} from 'react';
import './styles/App.css';
import Header from './components/header/Header';
import Main from './components/Main';

console.log('hello');

function App() {

  const [currentScore, setCurrentScore] = useState(0);
  const [maxScore, setMaxScore] = useState(2);


  return (
    <div className="App">
      <Header
        score={{ currentScore, maxScore}}
      />
      <Main
        setCurrentScore={setCurrentScore}
      />
    </div>
  );
}

export default App;
