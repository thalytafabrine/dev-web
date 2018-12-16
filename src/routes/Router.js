import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import SubjectPage from '../pages/SubjectPage';
import StudyListPage from '../pages/StudyListPage';

const Router = () =>
    <Switch>
        <Route exact path="/disciplina" component={HomePage} />
        <Route exact path="/disciplina/:idDisciplina" component={SubjectPage} />
        <Route exact path="/listaEstudo" component={SubjectPage} />
        <Route path="/disciplina/:idDisciplina/listaEstudo/:idLista" component={StudyListPage} />
        <Route path="/listaEstudo/:idListaEstudo" component={StudyListPage} />
        <Route exact path="/" component={LoginPage} />
    </Switch>

export default Router;