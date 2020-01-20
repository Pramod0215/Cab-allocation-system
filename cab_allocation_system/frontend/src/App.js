import React, { Component } from 'react';

import './App.css';
import User from './component/User';
import Driver from './component/Driver'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Home page</h1>
      <User/>
      <Driver/>
      </div>
    );
  }
}

export default App;
