import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";
import EndGameMenu from "../components/EndGameMenu";

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
      <Navbar score={score} isGameOver={isGameOver} />
      <GameBoard incrementScore={incrementScore} />
      {isGameOver && <EndGameMenu startNewGame={startNewGame} score={score} />}
    </div>
  );
};

export default Game;