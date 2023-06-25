import React from "react";
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";

const Game = () => {
  return (
    <div>
      <h1>Where's Waldo Game</h1>
      <Timer />
      <GameBoard />
    </div>
  );
};

export default Game;