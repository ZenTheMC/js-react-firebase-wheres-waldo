import React, { useState } from "react";
import Notification from "./Notification";

const CharacterSelection = ({ position, characters }) => {
  const [notification, setNotification] = useState(null);
  const [availableCharacters, setAvailableCharacters] = useState(characters);

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
    const characterXPixel = character.location.x;
    const characterYPixel = character.location.y;

    // Convert character dimensions from percentages to pixels
    const characterWidthPixel = (character.width / 100) * gameBoard.offsetWidth;
    const characterHeightPixel = (character.height / 100) * gameBoard.offsetHeight;

    console.log("Character Position (pixels):", characterXPixel, characterYPixel);
    console.log("Character Dimensions (pixels):", characterWidthPixel, characterHeightPixel);

    if (character && position.x >= characterXPixel && position.x <= characterXPixel + characterWidthPixel && position.y >= characterYPixel && position.y <= characterYPixel + characterHeightPixel) {
      setNotification("Correct!");
      
      // Remove the correctly guessed character from the available options
      setAvailableCharacters(availableCharacters.filter(ch => ch.name !== character.name));

      setTimeout(() => setNotification(null), 2000); // Hide notification after 2 seconds
    } else {
      setNotification("Incorrect!");
      setTimeout(() => setNotification(null), 2000); // Hide notification after 2 seconds
    }
  };

  return (
    <>
      {notification && <Notification message={notification} />}
      <select data-testid="character-selection" onChange={handleSelect}>
        <option value="">Select a character</option>
        {availableCharacters.map((character) => (
          <option key={character.name} value={character.name}>
            {character.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default CharacterSelection;