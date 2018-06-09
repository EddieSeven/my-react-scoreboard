import React, { Component } from 'react';
import './Scoreboard.css';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "Sidebar-left"
        }
    }

    render () {
        const { className } = this.props
        return (
            <div className={className}>Graphic</div>
        );
    }
}

export default Sidebar;