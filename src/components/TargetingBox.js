import React from "react";
import CharacterSelection from "./CharacterSelection";

const TargetingBox = ({ position, characters }) => {
    const boxWidth = 100; // You can adjust this
    const boxHeight = 50; // You can adjust this

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
        alignItems: 'center'
    };

    return (
        <div data-testid="targeting-box" style={targetingBoxStyle}>
            <CharacterSelection position={position} characters={characters} />
        </div>
    );
};

export default TargetingBox;