import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SubjectPage from '../pages/SubjectPage';
import StudyListPage from '../pages/StudyListPage';

const RouterAfterAuth = () =>
  <Switch>
    <Route exact path="/" component={HomePage}/>
    <Route path="/disciplina/**" component={SubjectPage}/>
    <Route path="/listaEstudo/**" component={StudyListPage}/>
  </Switch>

export default RouterAfterAuth;