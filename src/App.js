import React from "react";
import { Switch, Route } from "react-router-dom";
import Leaderboards from "./pages/Leaderboards";
import FetchTopScores from "./components/FetchTopScores";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/leaderboards">
          <Leaderboards />
        </Route>
        <Route path="/fetch-top-scores">
          <FetchTopScores />
        </Route>
      </Switch>
    </div>
  );
};

export default App;