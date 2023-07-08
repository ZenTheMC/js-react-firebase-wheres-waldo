import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';

const EndGameMenu = ({ startNewGame, score }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '10px', zIndex: 1000 }}>
      <input type="text" placeholder="Your Name" value={username} onChange={handleUsernameChange} />
      <ScoreBoard score={score} startNewGame={startNewGame} username={username} />
    </div>
  );
};

export default EndGameMenu;