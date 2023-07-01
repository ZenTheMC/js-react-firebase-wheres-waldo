import React, { useState } from "react";
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";

const Game = () => {
  const [score, setScore] = useState(0);
  const [username, setUsername] = useState('');

  const startNewGame = () => {
    setScore(0); // Reset score
  };

  const incrementScore = () => {
    setScore(score + 1);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div data-testid="game">
      <h1>Where's Waldo Game</h1>
      <div>
        <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Timer />
        <ScoreBoard score={score} startNewGame={startNewGame} username={username} />
      </div>
      <GameBoard incrementScore={incrementScore} />
    </div>
  );
};

export default Game;