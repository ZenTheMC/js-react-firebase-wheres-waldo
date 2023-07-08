import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, startNewGame, username, gameTime }) => {
    const handleNewGame = () => {
        if (username.trim() === '') {
            alert('Please enter a username before starting a new game.');
        } else {
            startNewGame();
            addScore(username, score, gameTime);
        }
    };

    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="start-new-game" onClick={handleNewGame}>
                Submit Your Score!
            </button>
        </div>
    );
};

export default ScoreBoard;