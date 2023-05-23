import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './WebPageRoutes.css';
import Main from './Main';
import SavedNews from './SavedNews';

function WebPageRoutes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Main />
      </Route>
      <Route path='/saved-news'>
        <SavedNews />
      </Route>
      //Add more routes as needed
    </Switch>
  );
}

export default WebPageRoutes;
