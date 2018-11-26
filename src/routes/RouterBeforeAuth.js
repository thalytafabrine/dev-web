import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

const RouterBeforeAuth = () =>
  <Switch>
    <Route exact path="/" component={LoginPage}/>
    <Route path="/**" component={LoginPage}/>
  </Switch>

export default RouterBeforeAuth;