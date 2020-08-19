import React from 'react';
import Log from "./components/Log";
import Accueil from "./components/Accueil";
import NouvelleQuestion from './components/NouvelleQuestion';
import Leaderboard from './components/Leaderboard';
import {BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import './App.css';


function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Log</Link>
            </li>
            <li>
              <Link to="/accueil">Accueil</Link>
            </li>
            <li>
              <Link to="/nouvelle-question">Nouvelle Question</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/"><Log /></Route>
          <Route path="/accueil"><Accueil /></Route>
          <Route path="/nouvelle-question"><NouvelleQuestion /></Route>
          <Route path="/leaderboard"><Leaderboard /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
