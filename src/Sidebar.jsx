import React, { Component } from 'react';
import './Scoreboard.css';


class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className={this.props.className}>

                <div className="team-name-container">
                    <h4>{this.props.teamTown}</h4>
                    <h1>{this.props.teamName}</h1>
                </div>

                <div className="team-logo">
                    <img src={this.props.teamLogo} />
                </div>

            </div>
        );
    }
}

export default Sidebar;