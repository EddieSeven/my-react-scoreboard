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

                <h3>American Football</h3>
                <div className="info-container">
                    <div className="quarter-container">
                        <h4>Quarter</h4>
                        <p>1</p>
                    </div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h4>Time Outs:</h4>
                            <p>3</p>
                        </div>
                        <div className="challenges-home">
                            <h4>Challenges:</h4>
                            <p>2</p>
                        </div>
                    </div>

                    <div className="yard-line"><h4>50</h4><p>Yard Line</p></div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h4>Time Outs:</h4>
                            <p>3</p>
                        </div>
                        <div className="challenges-home">
                            <h4>Challenges:</h4>
                            <p>2</p>
                        </div>
                    </div>

                    <div className="downs-container">
                        <h4>Downs</h4>
                        <div className="down"><p>3<span>rd Down</span></p></div>
                        <div className="togo"><p>7<span> yards to go</span></p></div>
                    </div>
                </div>
                <div className="possession-picker">Graphic</div>
            </div>
        );
    }
}

export default InfoPanel;