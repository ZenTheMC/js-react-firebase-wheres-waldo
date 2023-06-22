import React, { useState, useEffect } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";
import { db } from "../firebase";

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersCollection = await db.collection('characters').get();
            setCharacters(charactersCollection.docs.map(doc => doc.data()));
        };
        fetchCharacters();
    }, []);

    const handleCharacterClick = () => {
        // Increment the score when a character is clicked
        setScore(prevScore => prevScore + 1);
    };

    const startNewGame = () => {
        setScore(0);
    };

    return (
        <div data-testid="game-board">
            <ScoreBoard score={score} incrementScore={handleCharacterClick} startNewGame={startNewGame} />
            {characters.map((character, index) => (
                <Character key={index} onClick={handleCharacterClick} character={character} />
            ))}
        </div>
    );
};

export default GameBoard;