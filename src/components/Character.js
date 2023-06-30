import React from "react";

const Character = ({ character, onClick }) => {
    const { url, location } = character;

    const characterStyle = {
        position: 'absolute',
        top: `${location.y}%`,
        left: `${location.x}%`,
        cursor: 'pointer',
    };

    return (
        <img
            data-testid="character"
            src={url}
            alt="character"
            style={characterStyle}
            onClick={() => onClick(location)}
        />
    );
};

export default Character;