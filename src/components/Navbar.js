import React from 'react';
import Timer from './Timer';
import { Link } from 'react-router-dom';

const Navbar = ({ score, isGameOver }) => {

  return (
    <nav style={{ position: 'fixed', top: 0, width: '99%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#333', color: 'white', }}>
      <h1>WHERE'S THAT POKEMON!?</h1>
      <h2><strong>PLEASE PLAY IN FULL SCREEN WEBPAGE</strong></h2>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Timer isGameOver={isGameOver} />
        <div>Score: {score}</div>
        <Link to="/leaderboards" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px', border: 'solid 1px', padding: '5px' }}>Leaderboards Page</Link>
      </div>
    </nav>
  );
};

export default Navbar;