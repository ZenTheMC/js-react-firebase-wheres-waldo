import React from 'react';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import Bulbasaur from '../images/bulbasaur.svg';
import Charmander from '../images/charmander.svg';
import Eevee from '../images/eevee.svg';
import Raichu from '../images/raichu.svg';
import Squirtle from '../images/squirtle.svg';

const Navbar = ({ score, isGameOver, isGameStarted }) => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '99%', zIndex: 1000, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: 'navy', color: 'yellow', }}>
      <h1>WHERE'S THAT POKEMON!?</h1>
      <h2><strong>PLEASE PLAY IN FULL SCREEN WEBPAGE</strong></h2>
      <div style={{ display: 'flex', alignItems: 'center', }}>
        {isGameStarted && <Timer isGameOver={isGameOver} isGameStarted={isGameStarted} />}
        <img src={Bulbasaur} alt="Bulbasaur" style={{ width: '50px', height: '50px', marginRight: '5px', marginLeft: '50px', }} />
        <img src={Charmander} alt="Charmander" style={{ width: '50px', height: '50px', marginRight: '5px', }} />
        <img src={Eevee} alt="Eevee" style={{ width: '50px', height: '50px', marginRight: '5px', }} />
        <img src={Raichu} alt="Raichu" style={{ width: '50px', height: '50px', marginRight: '5px', }} />
        <img src={Squirtle} alt="Squirtle" style={{ width: '50px', height: '50px', marginRight: '50px', }} />
        <div style={{ marginRight: '20px', border: 'solid 1px', padding: '5px', }}>Score: {score}</div>
        <Link to="/leaderboards" style={{ color: 'yellow', textDecoration: 'none', marginLeft: '20px', border: 'solid 1px', padding: '5px', }}>Leaderboards Page</Link>
      </div>
    </nav>
  );
};

export default Navbar;