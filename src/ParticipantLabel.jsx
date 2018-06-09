import React, { Component } from 'react';
import './Scoreboard.css';

class ParticipantLabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Team Name"
        }
    }

    render () {
        return (
            <div className="Participant-Label">{this.state.name}</div>
        );
    }
}

export default ParticipantLabel;