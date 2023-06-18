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
        <select onChange={handleSelect}>
            <option value="">Select a character</option>
            <option value="waldo">Waldo</option>
            <option value="wizard">Wizard</option>
            <option value="wilma">Wilma</option>
        </select>
    );
}

export default CharacterSelection;