import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, incrementScore, startNewGame, username }) => {
    const handleNewGame = async () => {
        await addScore(username, score);
        startNewGame();
    };

    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="increment-score" onClick={incrementScore}>
                Increment Score
            </button>
            <button data-testid="start-new-game" onClick={handleNewGame}>
                Start New Game
            </button>
        </div>
    );
};

export default ScoreBoard;