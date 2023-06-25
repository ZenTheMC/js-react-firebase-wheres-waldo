import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game';
import Leaderboards from './pages/Leaderboards';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Game} />
          <Route path="/leaderboards" component={Leaderboards} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;