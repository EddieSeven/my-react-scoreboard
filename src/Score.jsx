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

    handleTouchdown () {
        this.setState({ points: this.state.points + 6 });
    }

    render () {
        return (
            <div className={this.props.className}>
              <div className="home-away">{this.props.teamLocality}</div>

              <div className="points" onClick={ this.props.onClick }>

                  {this.props.score}

              </div>

              <ParticipantLabel teamAbbrv={this.props.teamAbbrv} />
            </div>
        );
    }
}

export default Score;