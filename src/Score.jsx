import React, { Component } from 'react';
import './Scoreboard.css';
import ParticipantLabel from "./ParticipantLabel";

class Score extends Component {
    constructor(props) {
        super(props);
        this.state = {
            points: 0,
            teamLocality: "um",
            className: "Score-home"
        }
    }

    render () {
        return (
            <div className={this.props.className}>
              <div className="home-away">{this.props.teamLocality}</div>
              <div className="points">{this.state.points}</div>
              <ParticipantLabel />
            </div>
        );
    }
}

export default Score;