import React, { useState, useEffect } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";
import Background from "./Background";
import Pokemon from "./Pokemon";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import TargetingBox from "./TargetingBox";

const GameBoard = () => {
    const [score, setScore] = useState(0);
    const [characters, setCharacters] = useState([]);
    const [isTargetingBoxVisible, setIsTargetingBoxVisible] = useState(false);
    const [targetingBoxPosition, setTargetingBoxPosition] = useState({ x: 0, y: 0 });

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

    const handleCharacterClick = (characterElement, characterData) => {
        console.log('characterElement:', characterElement); // Debugging line
        console.log('characterData:', characterData); // Debugging line
    
        if (characterElement && typeof characterElement.getBoundingClientRect === 'function') {
            setScore(prevScore => prevScore + 1);
            setIsTargetingBoxVisible(true);
    
            const boundingBox = characterElement.getBoundingClientRect();
            const x = boundingBox.left + window.pageXOffset;
            const y = boundingBox.top + window.pageYOffset;
    
            setTargetingBoxPosition({ x, y });
        } else {
            console.error('Invalid element passed to handleCharacterClick');
        }
    };       

    const startNewGame = () => {
        setScore(0);
        setIsTargetingBoxVisible(false);
        setTargetingBoxPosition({ x: 0, y: 0 }); // Reset the position as well
    };    

    return (
        <div data-testid="game-board">
            <Background />
            <Pokemon />
            <ScoreBoard score={score} startNewGame={startNewGame} />
            {characters.map((character, index) => (
                <Character key={index} onClick={handleCharacterClick} character={character} />
            ))}
            {isTargetingBoxVisible && <TargetingBox position={targetingBoxPosition} characters={characters} />}
        </div>
    );
};

export default GameBoard;