import React, { Component } from 'react';
import './Scoreboard.css';

class InfoPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sport: "football",
            yardline: 20,
            homePossession: true,
            sideOfFieldArrow: "<<",
        }
        this.play = this.play.bind(this);
        this.penalty = this.penalty.bind(this);
        this.turnover = this.turnover.bind(this);
        this.score = this.score.bind(this);
    }

    play () {

    }

    penalty () {

    }

    turnover () {

    }

    score () {

    }

    render () {
        return (
            <div className="Info-Panel">

                <h2>American Football</h2>
                <div className="info-container">
                    <div className="quarter-container">
                        <h5>Quarter</h5>
                        <p>
                            {this.props.quarter}
                         </p>
                    </div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h5>Timeouts:</h5>
                            <p>
                                {this.props.homeTimeouts}
                             </p>
                        </div>
                        <div className="challenges-home">
                            <h5>Challenges</h5>
                            <p>
                                {this.props.homeChallenges}
                             </p>
                        </div>
                    </div>

                    <div className="yard-line">
                        <h1>{this.state.yardline}</h1>
                        <p>YardLine</p>
                        <h3>{this.state.sideOfFieldArrow}</h3>
                    </div>

                    <div className="timeout-container">
                        <div className="timeouts-home">
                            <h5>Timeouts</h5>
                            <p>
                                 {this.props.awayTimeouts}
                            </p>
                        </div>
                        <div className="challenges-home">
                            <h5>Challenges</h5>
                            <p>
                                {this.props.awayChallenges}
                            </p>
                        </div>
                    </div>

                    <div className="downs-container">
                        <h5>Downs</h5>
                        <div className="down"><p>{this.props.down}<span> and</span></p></div>
                        <div className="togo"><p>{this.props.togo}<span> to go</span></p></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default InfoPanel;