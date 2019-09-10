import React, { Component } from 'react';
import logo from './scoreboard-logo.svg';
import jets from './images/NYJ-Logo.svg';
import patriots from './images/NE-Logo.svg';
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
          ascore: 0,
          sport: "football",
          quarter: 1,
          homeName: "Jets",
          homeTown: "New York",
          homeAbbrv: "NYJ",
          homeTimeouts: 3,
          homeChallenges: 2,
          homeLogoPath: jets,
          awayName: "Patriots",
          awayTown: "New England",
          awayAbbrv: "NE",
          awayTimeouts: 3,
          awayChallenges: 2,
          awayLogoPath: patriots,
          yardline: 20,
          homePossession: true,
          sideOfFieldArrow: "<<",
          down: 1,
          togo: 10
      }
  }

  play () {

  }

  penalty () {

  }

  turnover () {

  }

  score () {

  }

  endOfQuarter () {
      if (this.props.quarterExpired === true) {
          this.setState({
              quarter: this.state.quarter + 1
          });
      }
  }

  incrementScore (homeOrAway, points) {
      if (homeOrAway === 'home'){
          this.setState({hscore: this.state.hscore + points});

      } else {
          this.setState({ascore: this.state.ascore + points});
      }
  }

  render() {
    return (
      <div className="Scoreboard">
        <header className="App-header">
            { /* <img src={logo} className="App-logo" alt="VersusBoard Logo" />*/ }
          <h1 className="App-title">VersusBoard</h1>
        </header>

        <div className="main-container">
            <Sidebar
                className="Sidebar-left"
                teamName={this.state.homeName}
                teamTown={this.state.homeTown}
                teamLogo={this.state.homeLogoPath}
            />

            <div className="center-board">
              <Clock onChange={this.endOfQuarter()} />

              <div className="score-box">

                <Score className="Score-home"
                       teamLocality="HOME"
                       score={this.state.hscore}
                       teamAbbrv={this.state.homeAbbrv}
                       onClick={() => this.incrementScore('home', 1)}
                />

                <div className="versus">VS</div>

                <Score className="Score-away"
                       teamLocality="AWAY"
                       score={this.state.ascore}
                       teamAbbrv={this.state.awayAbbrv}
                       onClick={() => this.incrementScore('away', 1)}
                />

              </div>

                <hr id="score-panel-split" />

              <InfoPanel
                sport={this.state.sport}
                homeTimeouts={this.state.homeTimeouts}
                homeChallenges={this.state.homeChallenges}
                awayTimeouts={this.state.awayTimeouts}
                awayChallenges={this.state.awayChallenges}
                quarter={this.state.quarter}
                down={this.state.down}
                togo={this.state.togo}
              />

            <div className="control-panel">
                <button id="play" onClick={() => this.state.play}>Play</button>
                <button id="turnover" onClick={() => this.state.turnover}>Turnover</button>
                <button id="penalty" onClick={() => this.state.penalty}>Penalty</button>
                <button id="score" onClick={() => this.state.score}>Score</button>
            </div>

            </div>

            <Sidebar
                className="Sidebar-right"
                teamName={this.state.awayName}
                teamTown={this.state.awayTown}
                teamLogo={this.state.awayLogoPath}
            />
        </div>

      </div>
    );
  }
}

export default Scoreboard;
