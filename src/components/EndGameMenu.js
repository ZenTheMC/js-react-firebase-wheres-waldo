import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import { Link } from 'react-router-dom';
import styles from '../styles/EndGameMenu.module.css';

const EndGameMenu = ({ startNewGame, score, gameTime }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className={styles.menu}>
      <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
      <ScoreBoard score={score} startNewGame={startNewGame} username={username} gameTime={gameTime} />
      <button onClick={startNewGame} className={styles.menuButton}>Close Menu</button>
      <Link to="/leaderboards" className={styles.menuLink}>Go to Leaderboards</Link>
    </div>
  );
};

export default EndGameMenu;