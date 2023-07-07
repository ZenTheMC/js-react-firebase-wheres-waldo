import { useState, useEffect } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        let interval;
        if (!gameOver) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [gameOver]);

    const startGame = () => {
        setGameOver(false);
        setSeconds(0);
    };

    const endGame = () => {
        setGameOver(true);
    };

    return (
        <div>
            <div data-testid="timer-display">
                Time: {seconds} seconds
            </div>
            <button onClick={startGame}>
                Reset Timer-DELETE THIS
            </button>
            <button onClick={endGame}>
                Freeze Timer-DELETE THIS
            </button>
        </div>
    );
};

export default Timer;