import React, { useState } from "react";
import Notification from "./Notification";

const CharacterSelection = ({ position, characters, incrementScore }) => {
  const [notification, setNotification] = useState(null);
  const [availableCharacters, setAvailableCharacters] = useState(characters);

  const handleSelect = (event) => {
    const selectedCharacterName = event.target.value;
    const character = characters.find((character) => character.name === selectedCharacterName);

    const gameBoard = document.querySelector("#game-board");

    const characterXPixel = character.location.x;
    const characterYPixel = character.location.y;

    const characterWidthPixel = (character.width / 100) * gameBoard.offsetWidth;
    const characterHeightPixel = (character.height / 100) * gameBoard.offsetHeight;

    if (character && position.x >= characterXPixel && position.x <= characterXPixel + characterWidthPixel && position.y >= characterYPixel && position.y <= characterYPixel + characterHeightPixel) {
      setNotification("Correct!");
      
      incrementScore();

      setAvailableCharacters(availableCharacters.filter(ch => ch.name !== character.name));

      setTimeout(() => setNotification(null), 2000);
    } else {
      setNotification("Incorrect!");
      setTimeout(() => setNotification(null), 2000);
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