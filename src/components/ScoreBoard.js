import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, username, gameTime }) => {
    const handleSubmitScore = () => {
        if (username.trim() === '') {
            alert('Please enter a username before starting a new game.');
        } else {
            addScore(username, score, gameTime);
        }
    };

    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="submit-score" onClick={handleSubmitScore}>
                Submit Your Score!
            </button>
        </div>
    );
};

export default ScoreBoard;