import React from "react";

const ScoreBoard = ({ score, incrementScore, startNewGame }) => {
    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="increment-score" onClick={incrementScore}>
                Increment Score
            </button>
            <button data-testid="start-new-game" onClick={startNewGame}>
                Start New Game
            </button>
        </div>
    );
};

export default ScoreBoard;