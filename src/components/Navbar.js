import React from 'react';
import Timer from './Timer';
import { Link } from 'react-router-dom';
import Bulbasaur from '../images/bulbasaur.svg';
import Charmander from '../images/charmander.svg';
import Eevee from '../images/eevee.svg';
import Raichu from '../images/raichu.svg';
import Squirtle from '../images/squirtle.svg';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ score, isGameOver, isGameStarted }) => {
  return (
    <nav className={styles.navbar}>
      <h1>WHERE'S THAT POKEMON!?</h1>
      <h2><strong>PLEASE PLAY IN FULL SCREEN WEBPAGE</strong></h2>
      <div className={styles.navbarItems}>
        {isGameStarted && <Timer isGameOver={isGameOver} isGameStarted={isGameStarted} />}
        <img src={Bulbasaur} alt="Bulbasaur" className={styles.pokemonImage} />
        <img src={Charmander} alt="Charmander" className={styles.pokemonImage} />
        <img src={Eevee} alt="Eevee" className={styles.pokemonImage} />
        <img src={Raichu} alt="Raichu" className={styles.pokemonImage} />
        <img src={Squirtle} alt="Squirtle" className={styles.pokemonImage} />
        <div className={styles.score}>Score: {score}</div>
        <Link to="/leaderboards" className={styles.link}>Leaderboards Page</Link>
      </div>
    </nav>
  );
};

export default Navbar;