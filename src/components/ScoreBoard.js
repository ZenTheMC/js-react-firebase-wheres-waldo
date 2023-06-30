import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, startNewGame, username }) => {
    const handleNewGame = async () => {
        await addScore(username, score);
        startNewGame();
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