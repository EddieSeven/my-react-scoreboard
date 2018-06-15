import React, { Component } from 'react';
import logo from './scoreboard-logo.svg';
import './Scoreboard.css';
import Score from './Score.jsx';
import Clock from './Clock.jsx';
import Sidebar from './Sidebar.jsx';
import InfoPanel from './InfoPanel.jsx';

class Scoreboard extends Component {
  constructor(props) {
      super(props);
      this.state = {
          hscore: 0,
          ascore: 0
      }
  }

  render() {
    return (
      <div className="Scoreboard">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="VersusBoard Logo" />
          <h1 className="App-title">VersusBoard</h1>
        </header>

        <div className="main-container">
            <Sidebar className="Sidebar-left" />

            <div className="center-board">
              <Clock />

              <div className="score-box">
                <Score className="Score-home" teamLocality="HOME" />
                  <div className="versus">VS</div>
                <Score className="Score-away" teamLocality="AWAY" />
              </div>

              <InfoPanel />
            </div>

            <Sidebar className="Sidebar-right" />
        </div>

      </div>
    );
  }
}

export default Scoreboard;
