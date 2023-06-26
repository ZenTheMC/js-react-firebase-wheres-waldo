import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Leaderboards from './pages/Leaderboards';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={Game} />
          <Route path="/leaderboards" component={Leaderboards} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;