import React, { Component } from 'react';
import './Scoreboard.css';

class ParticipantLabel extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="Participant-Label">{this.props.teamAbbrv}</div>
        );
    }
}

export default ParticipantLabel;