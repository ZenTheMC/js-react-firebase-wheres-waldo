import React, { useState } from 'react';
import Timer from './Timer';
import ScoreBoard from './ScoreBoard';

const Navbar = ({ startNewGame, score }) => {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <h1>Where's that Pokemon?</h1>
      <h2>Please play in full screen webpage!</h2>
      <div>
        <input type="text" placeholder="Enter username" value={username} onChange={handleUsernameChange} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Timer />
        <ScoreBoard score={score} startNewGame={startNewGame} username={username} />
      </div>
    </nav>
  );
};

export default Navbar;