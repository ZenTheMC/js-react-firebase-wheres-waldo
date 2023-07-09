import React from 'react';
import styles from '../styles/Background.module.css';
import MapImage from '../images/map.png';

const Background = () => {
  return (
    <div className={styles.background}>
      <img src={MapImage} alt="Game Map" className={styles.backgroundImage} />
    </div>
  );
};

export default Background;