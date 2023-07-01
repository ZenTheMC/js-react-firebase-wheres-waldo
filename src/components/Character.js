import React from "react";

const Character = ({ character, onClick }) => {
    const { url, location } = character;

    const characterStyle = {
        position: 'absolute',
        top: `${location.y}%`,
        left: `${location.x}%`,
        cursor: 'pointer',
    };

    const handleClick = (event) => {
        onClick(event.currentTarget, character); // Pass both the DOM element and character data
    };       

    return (
        <img
            data-testid="character"
            src={url}
            alt="character"
            style={characterStyle}
            onClick={handleClick}
        />
    );
};

export default Character;