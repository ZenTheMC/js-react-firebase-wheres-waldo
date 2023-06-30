import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, startNewGame, username }) => {
    const handleNewGame = () => {
        startNewGame(); // Call this immediately
        addScore(username, score); // Don't wait for this to complete
    };    

    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="start-new-game" onClick={handleNewGame}>
                Start New Game
            </button>
        </div>
    );
};

export default ScoreBoard;