import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';

const EndGameMenu = ({ startNewGame, score, startTime }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const gameTime = Math.floor((Date.now() - startTime) / 1000);

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', zIndex: 1000 }}>
      <input type="text" placeholder="Your Name" value={username} onChange={handleUsernameChange} />
      <ScoreBoard score={score} startNewGame={startNewGame} username={username} gameTime={gameTime} />
    </div>
  );
};

export default EndGameMenu;