import { useState, useEffect } from "react";

const Timer = ( { isGameOver } ) => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let interval;
        if (!isGameOver) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isGameOver]);

    return (
        <div>
            <div data-testid="timer-display">
                Time: {seconds} seconds
            </div>
        </div>
    );
};

export default Timer;