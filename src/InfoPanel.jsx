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
            <div className="Info-Panel">

                <h2>American Football</h2>
                <div className="info-container">
                    <div className="quarter-container">
                        <h5>Quarter</h5>
                        <p>1</p>
                    </div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h5>Timeouts:</h5>
                            <p>3</p>
                        </div>
                        <div className="challenges-home">
                            <h5>Challenges:</h5>
                            <p>2</p>
                        </div>
                    </div>

                    <div className="yard-line"><h1>50</h1><p>YardLine</p></div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h5>Timeouts:</h5>
                            <p>3</p>
                        </div>
                        <div className="challenges-home">
                            <h5>Challenges:</h5>
                            <p>2</p>
                        </div>
                    </div>

                    <div className="downs-container">
                        <h5>Downs</h5>
                        <div className="down"><p>3<span>rd &</span></p></div>
                        <div className="togo"><p>7<span> to go</span></p></div>
                    </div>
                </div>
                <div className="possession-picker">Graphic</div>
            </div>
        );
    }
}

export default InfoPanel;