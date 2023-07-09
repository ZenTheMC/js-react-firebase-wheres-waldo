import { useState, useEffect } from "react";

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
            <div data-testid="timer-display" style={{ border: 'solid 1px', padding: '5px', }}>
                Time: {seconds} seconds
            </div>
        </div>
    );
};

export default Timer;
