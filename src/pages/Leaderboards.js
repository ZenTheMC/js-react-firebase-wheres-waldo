import React from "react";
import FetchTopScores from "../components/FetchTopScores";

const Leaderboards = () => {
    return (
        <div data-testid="leaderboards">
            <h1>Leaderboards</h1>
            <FetchTopScores />
        </div>
    );
};

export default Leaderboards;