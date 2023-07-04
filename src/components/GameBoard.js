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
    const [username, setUsername] = useState("");

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

    const handleCharacterClick = (characterPosition, characterData) => {
        setScore(prevScore => prevScore + 1);
        setIsTargetingBoxVisible(true);
    
        // Use the character's position in pixels to set the position of the TargetingBox
        setTargetingBoxPosition(characterPosition);
    };  

    const startNewGame = () => {
        setScore(0);
        setIsTargetingBoxVisible(false);
        setTargetingBoxPosition({ x: 0, y: 0 });
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    return (
        <div id="game-board" data-testid="game-board" style={{ position: 'relative' }}>
            <Background />
            <Pokemon />
            <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
            <ScoreBoard score={score} startNewGame={startNewGame} />
            {characters.map((character, index) => (
                <Character key={index} onClick={handleCharacterClick} character={character} />
            ))}
            {isTargetingBoxVisible && <TargetingBox position={targetingBoxPosition} characters={characters} />}
        </div>
    );
};

export default GameBoard;