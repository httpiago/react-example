import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import Routes from './Routes.js'

// Import styles
import './styles.css';

ReactDOM.render((
  <HashRouter>
    <Routes />
  </HashRouter>
), document.getElementsByTagName('main')[0]);
