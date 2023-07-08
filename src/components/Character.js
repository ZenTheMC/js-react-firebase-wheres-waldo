import React from 'react';
import styles from '../styles/Character.module.css';

const Character = ({ character, onClick }) => {
    const handleClick = (event) => {
        const boundingBox = event.target.getBoundingClientRect();
        const x = boundingBox.left + window.pageXOffset;
        const y = boundingBox.top + window.pageYOffset;
        onClick({ x, y }, character);
    };

    const gameBoard = document.querySelector("#game-board");

    // Convert character's dimensions from percentages to pixels
    const characterWidthPixel = (character.width / 100) * gameBoard.offsetWidth;
    const characterHeightPixel = (character.height / 100) * gameBoard.offsetHeight;

    return (
        <div
            className={styles.character}
            onClick={handleClick}
            style={{
                top: `${character.location.y}px`,
                left: `${character.location.x}px`,
                width: `${characterWidthPixel}px`,
                height: `${characterHeightPixel}px`,
            }}
        >
            <img src={character.url} alt={character.name} style={{ width: '100%', height: '100%' }} />
        </div>
    );
};

export default Character;