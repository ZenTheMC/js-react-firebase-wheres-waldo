import React, { useState, useEffect } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";
import { db } from "../firebase";
import { collection, getDocs } from 'firebase/firestore';
import Background from "./Background";
import styles from '../styles/GameBoard.module.css';

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [characters, setCharacters] = useState([]);
    const numberOfImages = 25;

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersCollection = collection(db, 'characters');
            const charactersSnapshot = await getDocs(charactersCollection);
            setCharacters(charactersSnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    ...data,
                    location: { x: data.location.x, y: data.location.y }
                };
            }));
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
            <Background />
            <ScoreBoard score={score} incrementScore={handleCharacterClick} startNewGame={startNewGame} />
            {characters.map((character, index) => (
                <Character key={index} onClick={handleCharacterClick} character={character} />
            ))}
            {Array.from({ length: numberOfImages }, (_, index) => (
                <img
                    key={index}
                    src={`../images/Pokemon-${index + 1}.png`}
                    alt={`Pokemon ${index + 1}`}
                    className={styles.pokemon}
                />
            ))}
        </div>
    );
};

export default GameBoard;