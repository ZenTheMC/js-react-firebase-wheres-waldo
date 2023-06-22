import React, { useState } from "react";
import Character from "./Character";
import ScoreBoard from "./ScoreBoard";

const GameBoard = () => {
    const [score, setScore] = useState(0)

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
            <Character onClick={handleCharacterClick} />
        </div>
    );
};

export default GameBoard;