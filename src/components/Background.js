import React from 'react';
import styles from '../styles/Background.module.css';

import Route1 from '../images/Route-1.jpeg';
import Route2 from '../images/Route-2.jpeg';
import Route3 from '../images/Route-3.jpeg';
import Route4 from '../images/Route-4.jpeg';
import Route5 from '../images/Route-5.jpeg';
import Route6 from '../images/Route-6.jpeg';
import Route7 from '../images/Route-7.jpeg';
import Route8 from '../images/Route-8.jpeg';
import Route9 from '../images/Route-9.jpeg';
import Route10 from '../images/Route-10.jpeg';

const Background = () => {
  return (
    <div className={styles.backgroundContainer}>
      <img src={Route1} alt="Route 1" />
      <img src={Route2} alt="Route 2" />
      <img src={Route3} alt="Route 3" />
      <img src={Route4} alt="Route 4" />
      <img src={Route5} alt="Route 5" />
      <img src={Route6} alt="Route 6" />
      <img src={Route7} alt="Route 7" />
      <img src={Route8} alt="Route 8" />
      <img src={Route9} alt="Route 9" />
      <img src={Route10} alt="Route 10" />
    </div>
  );
};

export default Background;