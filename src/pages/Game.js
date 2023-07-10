import React, { useEffect, useState } from "react";
import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";
import EndGameMenu from "../components/EndGameMenu";
import StartGameMenu from "../components/StartGameMenu.js";
import styles from '../styles/Game.module.css';

const Game = () => {
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [isStartMenuVisible, setIsStartMenuVisible] = useState(true);
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  const startNewGame = () => {
    setScore(0);
    setIsGameOver(false);
  };

  const handleStartGame = () => {
    setIsStartMenuVisible(false);
    setStartTime(Date.now());
  };

  const incrementScore = () => {
    setScore(score + 1);
    if (score + 1 === 5) {
      setIsGameOver(true);
      setGameTime(Math.floor((Date.now() - startTime) / 1000));
    }
  };

  return (
    <div data-testid="game" className={styles.game}>
      <Navbar score={score} isGameOver={isGameOver} isGameStarted={!isStartMenuVisible} />
      {isStartMenuVisible && <StartGameMenu onStart={handleStartGame} />}
      <GameBoard incrementScore={incrementScore} />
      {isGameOver && <EndGameMenu startNewGame={startNewGame} score={score} startTime={startTime} gameTime={gameTime} />}
    </div>
  );
};

export default Game;