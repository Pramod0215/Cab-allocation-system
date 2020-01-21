import React, { Component } from 'react';

import './App.css';
import User from './component/User';
import Driver from './component/Driver';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Setting from './component/setting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome Home page....!!</h1>
    
     
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/driver">Driver</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/setting">Setting</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/driver">
          <Driver/>
          </Route>
          <Route path="/users">
          <User/>
          </Route>
          <Route path="/setting">
          <Setting/>
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
    );
  }
}

export default App;
