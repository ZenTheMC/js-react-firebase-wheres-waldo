import React from "react";
import CharacterSelection from "./CharacterSelection";

const TargetingBox = ({ position, characters, incrementScore }) => {
    const boxWidth = 135;
    const boxHeight = 20;

    const targetingBoxStyle = {
        position: 'absolute',
        top: position.y - boxHeight / 2,
        left: position.x - boxWidth / 2,
        border: '2px solid red',
        backgroundColor: 'white',
        padding: '5px',
        width: boxWidth,
        height: boxHeight,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10
    };

    return (
        <div data-testid="targeting-box" style={targetingBoxStyle}>
            <CharacterSelection position={position} characters={characters} incrementScore={incrementScore} />
        </div>
    );
};

export default TargetingBox;