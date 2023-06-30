import React from "react";

const CharacterSelection = ({ position, characters }) => {
  const handleSelect = (event) => {
    const selectedCharacterName = event.target.value;
    const character = characters.find((character) => character.name === selectedCharacterName);
    if (character && position.x >= character.location.x && position.x <= character.location.x + character.width && position.y >= character.location.y && position.y <= character.location.y + character.height) {
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
}

export default CharacterSelection;