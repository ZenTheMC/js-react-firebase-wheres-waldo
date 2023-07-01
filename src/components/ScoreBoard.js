import React from "react";
import { addScore } from '../firebase';

const ScoreBoard = ({ score, startNewGame, username }) => {
    const handleNewGame = () => {
        console.log("handleNewGame function called"); // Add this line
        startNewGame();
        addScore(username, score);
    };    

    return (
        <div>
            <div data-testid="score-display">
                Current Score: {score}
            </div>
            <button data-testid="start-new-game" onClick={() => { console.log("Button clicked"); handleNewGame(); }}>
                Start New Game
            </button>
        </div>
    );
};

export default ScoreBoard;