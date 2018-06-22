import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Import pages
import Home from './Home/';
import About from './About/';

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/about' component={About}/>
  </Switch>
);
