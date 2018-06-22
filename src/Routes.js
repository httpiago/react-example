import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import pages
import Home from './Home/Home.jsx';
import About from './About/About.jsx';

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
  </Switch>
);
