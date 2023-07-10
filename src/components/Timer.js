import { useState, useEffect } from "react";
import styles from '../styles/Timer.module.css';

const Timer = ({ isGameOver, isGameStarted }) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (isGameStarted && !isGameOver) {
            interval = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isGameOver, isGameStarted]);

    return (
        <div>
            <div data-testid="timer-display" className={styles.timerDisplay}>
                Time: {seconds} seconds
            </div>
        </div>
    );
};

export default Timer;