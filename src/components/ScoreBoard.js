import React, { useState } from "react";
import { addScore } from '../firebase';
import Notification from './Notification';
import styles from '../styles/ScoreBoard.module.css';

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
            <div className={styles.scoreDisplay}>
                Current Score: {score}
            </div>
            <button className={styles.submitScore} onClick={handleSubmitScore}>
                Submit Your Score!
            </button>
        </div>
    );
};

export default ScoreBoard;
