import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './pages/Game';
import Leaderboards from './pages/Leaderboards';

const App = () => {

  const isTestEnvironment = process.env.NODE_ENV === "test";

  const content = (
    <div className="App">
        <Routes>
          <Route path="/" element={<Game />} exact />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </div>
  )

  return isTestEnvironment ? content : <Router>{content}</Router>;

};

export default App;