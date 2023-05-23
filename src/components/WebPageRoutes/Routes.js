import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main/Main'; // Main is in the same directory as Routes.js
import About from './About/About'; // About is in the same directory as Routes.js

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/about' component={About} />
    </Switch>
  </Router>
);

export default App;
