import React from 'react';
import Timer from './Timer';

const Navbar = ({ score, isGameOver }) => {

  return (
    <nav style={{ position: 'fixed', top: 0, width: '99%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white', }}>
      <h1>WHERE'S THAT POKEMON!?</h1>
      <h2><strong>PLEASE PLAY IN FULL SCREEN WEBPAGE</strong></h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Timer isGameOver={isGameOver} />
        <div>Score: {score}</div>
      </div>
    </nav>
  );
};

export default Navbar;