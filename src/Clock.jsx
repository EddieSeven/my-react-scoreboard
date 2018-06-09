import React, { Component } from 'react';
import './Scoreboard.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: 900,
            pause: false
        }
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.countdown = this.countdown.bind(this);
    }

    convertSecsToTime(secs) {
        let minutes = Math.floor((secs % (60 * 60)) / 60);
        let seconds = Math.ceil((secs % (60 * 60)) % 60);

        let clock = {
            "m": minutes,
            "s": seconds
        }
        return clock;
    }

    componentDidMount() {
        let timeRemaining = this.convertSecsToTime(this.state.seconds);
        this.setState({ time: timeRemaining });
    }

    startTimer () {
        if (this.timer === 0) {
            this.timer = setInterval(this.countdown, this.state.seconds);
        }
    }

    pauseTimer () {
        if(this.state.pause === false) {
            this.setState({pause: true});
        } else {
            this.setState({pause: false});
        }
    }

    resetTimer (seconds) {
        // TODO:
        // Add input from user for reset point
        // Use input as argument to set the time (in seconds)
    }

    countdown() {
        if (this.state.pause === false) {
            let seconds = this.state.seconds - 1;
            this.setState({
                time: this.convertSecsToTime(seconds),
                seconds: seconds,
                pause: this.state.pause
            });

            if (seconds === 0) {
                clearInterval(this.timer);
            }
        }
    }

    prependZero(num){
        if ( num >= 0 && num < 10 ) {
            num = "0" + num;
        }
        return num;
    }

    render () {
        return (
            <div className="Clock">
                <button onClick={this.startTimer}>Start Timer</button>
                {this.state.time.m}:{this.prependZero(this.state.time.s)}
                <button onClick={this.pauseTimer}>Pause Timer</button>
            </div>
        );
    }
}

export default Clock;