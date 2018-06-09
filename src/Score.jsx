import React, { Component } from 'react';
import './Scoreboard.css';
import ParticipantLabel from "./ParticipantLabel";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            teamLocality: "HOME",
            className: "Score-home"
        }
    }

    addPoint() {
        this.setState({ points: this.state.points + 1 });
    }

    render () {
        return (
            <div className={this.props.className}>
              <div className="home-away">{this.props.teamLocality}</div>
              <div className="points" onClick={() => this.addPoint()}>{this.state.points}</div>
              <ParticipantLabel />
            </div>
        );
    }
}

export default Score;