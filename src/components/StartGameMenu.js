import React from 'react';
import Bulbasaur from '../images/bulbasaur.svg';
import Charmander from '../images/charmander.svg';
import Eevee from '../images/eevee.svg';
import Raichu from '../images/raichu.svg';
import Squirtle from '../images/squirtle.svg';
import styles from '../styles/StartGameMenu.module.css';

const StartGameMenu = ({ onStart }) => {
    return (
        <div className={styles.startGameMenu}>
            <div className={styles.startGameMenuInner}>
                <h1>Welcome to WHO'S THAT POKEMON!?</h1>
                <h2>PLEASE PLAY IN FULL SCREEN WEBPAGE RESOLUTION</h2>
                <p>Instructions: </p>
                <ul className={styles.instructionsList}>
                    <li>Find all 5 Pokemon within the routes</li>
                    <li>----------------------------------------------------------</li>
                    <li>Click on the Pokemon and guess it's name</li>
                    <li>-----------------------------------------------------------------</li>
                    <li>Once you have found all of them, submit your score, and see how you stack up in the Leaderboards</li>
                    <li>--------------------------------------------------------------------------------------------------------------------------------------------------------</li>
                </ul>
                <div className="characters-preview">
                    <img src={Bulbasaur} alt="Bulbasaur" />
                    <img src={Charmander} alt="Charmander" />
                    <img src={Eevee} alt="Eevee" />
                    <img src={Raichu} alt="Raichu" />
                    <img src={Squirtle} alt="Squirtle" />
                </div>
                <button onClick={onStart} className={styles.startButton}>Start Game</button>
            </div>
        </div>
    );
};

export default StartGameMenu;