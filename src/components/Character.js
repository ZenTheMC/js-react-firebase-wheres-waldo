import React from 'react';

const Character = ({ character, onClick }) => {
    const handleClick = (event) => {
        const boundingBox = event.target.getBoundingClientRect();
        const x = boundingBox.left + window.pageXOffset;
        const y = boundingBox.top + window.pageYOffset;
        onClick({ x, y }, character);
    };

    return (
        <div
            className='character'
            onClick={handleClick}
            style={{
                position: 'absolute',
                top: `${character.location.y}px`,
                left: `${character.location.x}px`,
                zIndex: 10 // Set a higher z-index
            }}
        >
            <img src={character.url} alt={character.name} />
        </div>
    );
};

export default Character;