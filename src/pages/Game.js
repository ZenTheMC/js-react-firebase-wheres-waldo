import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";

const Game = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const startNewGame = () => {
    setScore(0);
    setIsGameOver(false);
  };

  const incrementScore = () => {
    setScore(score + 1);
    if (score + 1 === 5) {
      setIsGameOver(true);
    }
  };

  return (
    <div data-testid="game" style={{ minHeight: '100vh' }}>
      <Navbar startNewGame={startNewGame} score={score} isGameOver={isGameOver} />
      <GameBoard incrementScore={incrementScore} />
    </div>
  );
};

export default Game;