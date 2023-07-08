import React, { useState } from 'react';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';

const Navbar = ({ startNewGame, score, isGameOver }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <nav style={{ position: 'fixed', top: 0, width: '99%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white', }}>
      <h1>WHERE'S THAT POKEMON!?</h1>
      <h2><strong>PLEASE PLAY IN FULL SCREEN WEBPAGE</strong></h2>
      <div>
        <input type="text" placeholder="Make into endgame message" value={username} onChange={handleUsernameChange} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Timer isGameOver={isGameOver} />
        <ScoreBoard score={score} startNewGame={startNewGame} username={username} />
      </div>
    </nav>
  );
};

export default Navbar;