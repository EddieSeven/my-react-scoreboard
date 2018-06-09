import React, { Component } from 'react';
import './Scoreboard.css';

class InfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: "football"
        }
    }

    render () {
        return (
            <div className="Info-Panel">Information Panel</div>
        );
    }
}

export default InfoPanel;