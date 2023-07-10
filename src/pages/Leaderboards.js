import React from "react";
import FetchTopScores from "../components/FetchTopScores";
import { Link } from 'react-router-dom';
import styles from '../styles/Leaderboards.module.css';

const Leaderboards = () => {
    return (
        <div data-testid="leaderboards" className={styles.leaderboards}>
            <Link to="/" className={styles.link}>Go to game page</Link>
            <h1>Leaderboards</h1>
            <FetchTopScores />
        </div>
    );
};

export default Leaderboards;