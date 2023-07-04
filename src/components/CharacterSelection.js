import React from "react";

const CharacterSelection = ({ position, characters }) => {
  const handleSelect = (event) => {
    const selectedCharacterName = event.target.value;
    const character = characters.find((character) => character.name === selectedCharacterName);

    const gameBoard = document.querySelector("#game-board");

    // Raw character location and dimensions in percentages
    console.log("Raw Character Location (percentages):", character.location.x, character.location.y);
    console.log("Raw Character Dimensions (percentages):", character.width, character.height);

    // Game board dimensions in pixels
    console.log("Game Board Dimensions (pixels):", gameBoard.offsetWidth, gameBoard.offsetHeight);

    // Convert character's location from percentages to pixels
    const characterXPixel = (character.location.x / 100) * gameBoard.offsetWidth;
    const characterYPixel = (character.location.y / 100) * gameBoard.offsetHeight;

    // Convert character dimensions from percentages to pixels
    const characterWidthPixel = (character.width / 100) * gameBoard.offsetWidth;
    const characterHeightPixel = (character.height / 100) * gameBoard.offsetHeight;

    console.log("Character Position (pixels):", characterXPixel, characterYPixel);
    console.log("Character Dimensions (pixels):", characterWidthPixel, characterHeightPixel);

    if (character && position.x >= characterXPixel && position.x <= characterXPixel + characterWidthPixel && position.y >= characterYPixel && position.y <= characterYPixel + characterHeightPixel) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  };

  return (
    <select data-testid="character-selection" onChange={handleSelect}>
      <option value="">Select a character</option>
      {characters.map((character) => (
        <option key={character.name} value={character.name}>
          {character.name}
        </option>
      ))}
    </select>
  );
};

export default CharacterSelection;