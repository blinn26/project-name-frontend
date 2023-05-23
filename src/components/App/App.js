import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import SavedNews from './components/SavedNews/SavedNews';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/saved-news' component={SavedNews} />
      </Switch>
    </Router>
  );
}

export default App;
