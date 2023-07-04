import React from 'react';
import styles from '../styles/Character.module.css';

const Character = ({ character, onClick }) => {
    const handleClick = (event) => {
        const boundingBox = event.target.getBoundingClientRect();
        const x = boundingBox.left + window.pageXOffset;
        const y = boundingBox.top + window.pageYOffset;
        onClick({ x, y }, character);
    };

    return (
        <div
            className={styles.character}
            onClick={handleClick}
            style={{
                top: `${character.location.y}px`,
                left: `${character.location.x}px`,
            }}
        >
            <img src={character.url} alt={character.name} />
        </div>
    );
};

export default Character;