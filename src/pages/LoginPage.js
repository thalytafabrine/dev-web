import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import SubjectsList from '../components/Subject/SubjectsList';
import SubjectPage from './SubjectPage';
import StudyListPage from './StudyListPage';

class LoginPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SubjectsList/>
        <SubjectPage />
        <StudyListPage />
      </div>
    );
  }
}

export default LoginPage;
