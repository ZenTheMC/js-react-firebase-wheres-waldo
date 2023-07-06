import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";

const Game = () => {
  const [score, setScore] = useState(0);

  const startNewGame = () => {
    setScore(0);
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  return (
    <div data-testid="game" style={{ minHeight: '100vh' }}>
      <Navbar startNewGame={startNewGame} score={score} />
      <GameBoard incrementScore={incrementScore} />
    </div>
  );
};

export default Game;