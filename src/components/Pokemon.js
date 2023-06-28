import React from 'react';
import styles from '../styles/Pokemon.module.css';
import Pokemon1 from '../images/Pokemon-1.png';
import Pokemon2 from '../images/Pokemon-2.png';
import Pokemon3 from '../images/Pokemon-3.png';
import Pokemon4 from '../images/Pokemon-4.png';
import Pokemon5 from '../images/Pokemon-5.png';
import Pokemon6 from '../images/Pokemon-6.png';
import Pokemon7 from '../images/Pokemon-7.png';
import Pokemon8 from '../images/Pokemon-8.png';
import Pokemon9 from '../images/Pokemon-9.png';
import Pokemon10 from '../images/Pokemon-10.png';
import Pokemon11 from '../images/Pokemon-11.png';
import Pokemon12 from '../images/Pokemon-12.png';
import Pokemon13 from '../images/Pokemon-13.png';
import Pokemon14 from '../images/Pokemon-14.png';
import Pokemon15 from '../images/Pokemon-15.png';
import Pokemon16 from '../images/Pokemon-16.png';
import Pokemon17 from '../images/Pokemon-17.png';
import Pokemon18 from '../images/Pokemon-18.png';
import Pokemon19 from '../images/Pokemon-19.png';
import Pokemon20 from '../images/Pokemon-20.png';
import Pokemon21 from '../images/Pokemon-21.png';
import Pokemon22 from '../images/Pokemon-22.png';
import Pokemon23 from '../images/Pokemon-23.png';
import Pokemon24 from '../images/Pokemon-24.png';
import Pokemon25 from '../images/Pokemon-25.png';

const pokemonImages = [
    Pokemon1,
    Pokemon2,
    Pokemon3,
    Pokemon4,
    Pokemon5,
    Pokemon6,
    Pokemon7,
    Pokemon8,
    Pokemon9,
    Pokemon10,
    Pokemon11,
    Pokemon12,
    Pokemon13,
    Pokemon14,
    Pokemon15,
    Pokemon16,
    Pokemon17,
    Pokemon18,
    Pokemon19,
    Pokemon20,
    Pokemon21,
    Pokemon22,
    Pokemon23,
    Pokemon24,
    Pokemon25,
];

const Pokemon = () => {
    const numberOfPokemon = 1000;
    const backgroundHeight = 2450; // Adjust this based on the total height of your background in vh
  
    const getRandomPosition = () => {
        const minHeight = 40;
        return {
            top: Math.random() * (backgroundHeight - minHeight) + minHeight + '%',
            left: Math.random() * 100 + '%'
        };
    };

    const getRandomPokemonImage = () => {
        const index = Math.floor(Math.random() * pokemonImages.length);
        return pokemonImages[index];
    };

    return (
      <div className={styles.pokemonContainer}>
        {Array.from({ length: numberOfPokemon }).map((_, index) => (
          <img
            key={index}
            src={getRandomPokemonImage()}
            alt={`Pokemon ${index + 1}`}
            style={getRandomPosition()}
            className={styles.pokemon}
          />
        ))}
      </div>
    );
};
  
export default Pokemon;