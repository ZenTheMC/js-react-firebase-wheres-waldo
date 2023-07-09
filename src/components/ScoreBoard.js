import React, { useState } from "react";
import { addScore } from '../firebase';
import Notification from './Notification';

const ScoreBoard = ({ score, username, gameTime }) => {
    const [notification, setNotification] = useState(null);

    const handleSubmitScore = async () => {
        if (username.trim() === '') {
            alert('Please enter a username before starting a new game.');
        } else {
            try {
                await addScore(username, score, gameTime);
                setNotification('Score submitted');
                setTimeout(() => setNotification(null), 2000);
            } catch (error) {
                setNotification('Error submitting score');
                setTimeout(() => setNotification(null), 2000);
            }
        }
    };

    return (
        <div>
            {notification && <Notification message={notification} />}
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