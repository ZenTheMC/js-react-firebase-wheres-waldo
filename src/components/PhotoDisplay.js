import React, { useEffect, useState } from "react";

const PhotoDisplay = ({ characters }) => {
    const [charactersData, setCharactersData] = useState([]);

    useEffect(() => {
        setCharactersData(characters);
    }, [characters]);

    return (
        <div data-testid="photo-display">
            {Array.isArray(charactersData) && charactersData.map((character, index) => (
                <img key={index} src={character.url} alt={character.name} />
            ))}
        </div>
    );
};

export default PhotoDisplay;