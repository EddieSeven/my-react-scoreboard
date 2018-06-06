import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React Scoreboard!</h1>
        </header>

        <Scoreboard />

        <p className="App-intro">
          This is a work in progress, starting from the React template.
        </p>
      </div>
    );
  }
}

export default App;
