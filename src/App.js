import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Leaderboards from './pages/Leaderboards';
import styles from './styles/App.module.css';

const App = () => {

  const isTestEnvironment = process.env.NODE_ENV === "test";

  const content = (
    <div className={styles.App}>
        <Routes>
          <Route path="/" element={<Game />} exact />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </div>
  )

  return isTestEnvironment ? content : <Router>{content}</Router>;

};

export default App;