import React from "react";
import CharacterSelection from "./CharacterSelection";
import styles from '../styles/TargetingBox.module.css';

const TargetingBox = ({ position, characters, incrementScore }) => {
    const boxWidth = 135;
    const boxHeight = 20;

    const targetingBoxStyle = {
        top: position.y - boxHeight / 2,
        left: position.x - boxWidth / 2,
        width: boxWidth,
        height: boxHeight,
    };

    return (
        <div data-testid="targeting-box" className={styles.targetingBox} style={targetingBoxStyle}>
            <CharacterSelection position={position} characters={characters} incrementScore={incrementScore} />
        </div>
    );
};

export default TargetingBox;