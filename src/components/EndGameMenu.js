import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import { Link } from 'react-router-dom';

const EndGameMenu = ({ startNewGame, score, gameTime }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'navy', padding: '20px', borderRadius: '10px', zIndex: 1000 }}>
      <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
      <ScoreBoard score={score} startNewGame={startNewGame} username={username} gameTime={gameTime} />
      <button onClick={startNewGame} style={{ background: 'navy', color: 'yellow', textDecoration: 'none', display: 'block', marginTop: '20px', border: 'solid 1px', padding: '5px' }}>Close Menu</button>
      <Link to="/leaderboards" style={{ color: 'yellow', textDecoration: 'none', display: 'block', marginTop: '20px', border: 'solid 1px', padding: '5px' }}>Go to Leaderboards</Link>
    </div>
  );
};

export default EndGameMenu;