import React, { useEffect, useState } from "react";
import "./App.style.css";
import Card from "./components/Card/Card";
import Decider from "./components/Decider/Decider";
import { getRandomCard } from "./utils/card-generator";
import { getPossibleScores } from "./utils/card-score";

const App = () => {
  const [handCards, setHandCards] = useState([]);
  const [score, setScore] = useState(0);
  const [possibleNextScores, setPossibleNextScores] = useState([]);
  const [playerCanPlay, setPlayerCanPlay] = useState(true);
  const [status, setStatus] = useState(0); // -1 -> lose; 0 -> playing; 1 -> win

  useEffect(() => {
    if (playerCanPlay)
      if (score > 31) {
        setStatus(-1);
        setPlayerCanPlay(false);
      } else if (score === 31) {
        setStatus(1);
        setPlayerCanPlay(false);
      } else {
        setStatus(0);
      }
  }, [score]);

  const hand = handCards.map(({ value, suit }, index) =>
    <div key={index} className="card-wrapper">
      <Card  isOnHand={true} value={value} suit={suit} />
    </div>
  );

  const nextScores = possibleNextScores.map(nextScore => (
    <Decider key={nextScore} previousScore={score} score={nextScore} scoreChanger={() => onDecision(nextScore)} />
  ));

  const onGetNewCard = () => {
    setPlayerCanPlay(false);
    const newCard = getRandomCard(handCards);
    setHandCards([...handCards, newCard]);

    const possibleScores = getPossibleScores(handCards, newCard, score);
    if (possibleScores.length == 1) {
      setScore(possibleScores[0]);
      setPossibleNextScores([]);
      setPlayerCanPlay(true);
    } else {
      setPossibleNextScores(possibleScores);
      setPlayerCanPlay(false);
    }
  };

  const onStartANewGame = () => {
    setHandCards([]);
    setScore(0);
    setPossibleNextScores([]);
    setPlayerCanPlay(true);
  };

  const onDecision = (nextScore) => {
    setScore(nextScore);
    setPossibleNextScores([]);
    setPlayerCanPlay(true);
  };

  return (
    <div className="app">
      <h1 className="app-title">asrato's 31-Game</h1>
      <div className="spacer" />
      <div className="app-middle">
        <p className="score">{score}</p>
      </div>
      {possibleNextScores.length > 1 && <p className="decisions">Choose wisely!</p>}
      <div className="app-decisions">
        {nextScores}
      </div>
      {status === -1 && <p className="lose">You Lose!</p>}
      {status === 1 && <p className="win">You Win!</p>}
      <div className="spacer" />
      <div className="app-btn">
        {playerCanPlay && <button className="btn" onClick={onGetNewCard}>GET A NEW CARD</button>}
        {(status === 1 || status === -1) && <button className="btn" onClick={onStartANewGame}>START A NEW GAME</button>}
      </div>
      <div className="hand">
        {hand}
      </div>
    </div >
  );
}

export default App;