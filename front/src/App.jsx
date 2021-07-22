import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/Home';
import Ticket from './components/Ticket';
import Register from './components/Register';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <div className="navBar">
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/">Accueil</Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/ticket">Billeterie</Link>
                </li>
                <li>
                  <Link style={{ textDecoration: 'none' }} to="/register">Se connecter</Link>
                </li>
              </div>
            </ul>
          </nav>

          <Switch>
            <Route path="/ticket">
              <Ticket />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
