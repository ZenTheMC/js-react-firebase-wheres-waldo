import React from "react";
import FetchTopScores from "../components/FetchTopScores";
import { Link } from 'react-router-dom';

const Leaderboards = () => {
    return (
        <div data-testid="leaderboards">
            <Link to="/" style={{ backgroundColor: 'black', color: 'white', textDecoration: 'none', margintop: '20px', border: 'solid 1px', padding: '5px' }}>Go to game page</Link>
            <h1>Leaderboards</h1>
            <FetchTopScores />
        </div>
    );
};

export default Leaderboards;