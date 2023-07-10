import React, { useState, useEffect } from "react";
import Character from "./Character";
import Background from "./Background";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import TargetingBox from "./TargetingBox";
import styles from '../styles/GameBoard.module.css';

const GameBoard = ({ incrementScore }) => {
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

    const handleCharacterClick = (characterPosition) => {
        setIsTargetingBoxVisible(true);
        setTargetingBoxPosition(characterPosition);
    };  

    return (
        <div id="game-board" data-testid="game-board" className={styles.gameBoard}>
            <Background />
            <div className={styles.characterContainer}>
                {characters.map((character, index) => (
                    <Character key={index} onClick={handleCharacterClick} character={character} />
                ))}
                {isTargetingBoxVisible && <TargetingBox position={targetingBoxPosition} characters={characters} incrementScore={incrementScore} />}
            </div>
        </div>
    );
};

export default GameBoard;