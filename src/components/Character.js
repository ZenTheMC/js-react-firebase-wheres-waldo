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
        console.log('event.currentTarget:', event.currentTarget); // Debugging line
        onClick(event.currentTarget);
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