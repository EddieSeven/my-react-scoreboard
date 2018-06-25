import React, { Component } from 'react';
import './Scoreboard.css';

class Timeouts extends Component(){
    constructor(props) {
        super(props);
        this.state = {
            timeouts: 3,
            challenges: 2
        }
    }


    render () {
        return(
            <div className="timeout-container">
                <div className="timeouts-home">
                    <h5>Timeouts:</h5>
                    <p>
                        {this.state.timeouts}
                    </p>
                </div>
                <div className="challenges-home">
                    <h5>Challenges</h5>
                    <p>
                        {this.state.challenges}
                    </p>
                </div>
            </div>
        );
    }
}
export default Timeouts;