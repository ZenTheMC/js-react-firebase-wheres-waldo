import React from 'react';
import styles from '../styles/Background.module.css';
import MapImage from '../images/map.jpeg';

const Background = () => {
  return (
    <div className={styles.background} style={{ backgroundImage: `url(${MapImage})` }}>
    </div>
  );
};

export default Background;