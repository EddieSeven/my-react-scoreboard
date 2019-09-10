import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Scoreboard from './Scoreboard';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

ReactDOM.render(<Scoreboard />, document.getElementById('root'));
registerServiceWorker();

WebFont.load({
    google: {
        families: ['Bungee Inline', 'VT323', 'Cousine', 'Kanit']
    }
})
