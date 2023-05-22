import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DataPage from '../pages/DataPage';

function Routes() {
  return (
    <Router>
      <Route path='/' exact component={HomePage} />
      <Route path='/data' component={DataPage} />
    </Router>
  );
}

export default Routes;
