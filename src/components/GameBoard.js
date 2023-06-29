import React, { useState, useEffect } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";
import Background from "./Background";
import Pokemon from "./Pokemon";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

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
                const imageRef = ref(storage, data.url);
                const downloadUrl = await getDownloadURL(imageRef);
                return {
                    ...data,
                    url: downloadUrl,
                    location: { x: data.location.x, y: data.location.y }
                };
            }));

            setCharacters(charactersData);
        };
        fetchCharacters();
    }, []);

    const handleCharacterClick = () => {
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