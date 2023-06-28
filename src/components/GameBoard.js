import React, { useState, useEffect } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage"; // Note the change here
import Background from "./Background";
import Pokemon from "./Pokemon";

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const charactersCollection = collection(db, 'characters');
            const charactersSnapshot = await getDocs(charactersCollection);
            const storage = getStorage();

            const charactersData = await Promise.all(charactersSnapshot.docs.map(async doc => {
                const data = doc.data();
                const imageRef = ref(storage, data.url); // Use the gs:// URL to create a reference
                const downloadUrl = await getDownloadURL(imageRef); // Get the download URL
                return {
                    ...data,
                    url: downloadUrl, // Replace the gs:// URL with the download URL
                    location: { x: data.location.x, y: data.location.y }
                };
            }));

            setCharacters(charactersData);
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
            <Pokemon />
            <ScoreBoard score={score} incrementScore={handleCharacterClick} startNewGame={startNewGame} />
            {characters.map((character, index) => (
                <Character key={index} onClick={handleCharacterClick} character={character} />
            ))}
        </div>
    );
};

export default GameBoard;