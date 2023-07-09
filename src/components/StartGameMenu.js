import React from 'react';
import Bulbasaur from '../images/bulbasaur.svg';
import Charmander from '../images/charmander.svg';
import Eevee from '../images/eevee.svg';
import Raichu from '../images/raichu.svg';
import Squirtle from '../images/squirtle.svg';

const StartGameMenu = ({ onStart }) => {
    return (
        <div className="start-game-menu" style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%', 
            height: '100%',
            zIndex: 1000, 
            display: 'flex', 
            flexDirection: 'column',
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'yellow', 
        }}>
            <div style={{
                backgroundColor: 'navy',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
            }}>
                <h1>Welcome to WHO'S THAT POKEMON!?</h1>
                <h2>PLEASE PLAY IN FULL SCREEN WEBPAGE RESOLUTION</h2>
                <p>Instructions: </p>
                <ul style={{
                    listStyle: 'none',
                    padding: '10px',
                }}>
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
                <button onClick={onStart} style={{ marginTop: '30px', padding: '5px', color: 'yellow', backgroundColor: 'navy', }}>Start Game</button>
            </div>
        </div>
    );
};

export default StartGameMenu;