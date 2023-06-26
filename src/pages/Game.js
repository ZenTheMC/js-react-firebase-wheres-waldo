import React from "react";
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";
import ScoreBoard from "../components/ScoreBoard";
import TargetingBox from "../components/TargetingBox";
import CharacterSelection from "../components/CharacterSelection";
import PhotoDisplay from "../components/PhotoDisplay";

const Game = () => {
  const mockCharactersData = [
    {
      name: "Character",
      url: "character-image-url",
    },
  ];

  return (
    <div data-testid="game">
      <h1>Where's Waldo Game</h1>
      <Timer />
      <GameBoard />
      <ScoreBoard />
      <TargetingBox position={{ x: 100, y: 100 }} />
      <CharacterSelection />
      <PhotoDisplay charactersData={mockCharactersData} />
    </div>
  );
};

export default Game;