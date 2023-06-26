import React from "react";

const CharacterSelection = ({ position, characters }) => {
  const handleSelect = (event) => {
    const selectedCharacter = event.target.value;
    const character = characters.find((character) => character.name === selectedCharacter);
    if (character && position.x >= character.location.x && position.x <= character.location.x + character.width && position.y >= character.location.y && position.y <= character.location.y + character.height) {
      console.log("Correct!"); 
    } else {
      console.log("Incorrect!");
    }
  };

  return (
    <select data-testid="character-selection" onChange={handleSelect}>
      <option value="">Select a character</option>
      <option value="charmander">Charmander</option>
      <option value="bulbasaur">Bulbasaur</option>
      <option value="squirtle">Squirtle</option>
      <option value="raichu">Raichu</option>
      <option value="eevee">Eevee</option>
    </select>
  );
}

export default CharacterSelection;