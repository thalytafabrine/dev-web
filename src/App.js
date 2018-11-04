import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SubjectsList from './components/Subject/SubjectsList';
import StudyList from './components/StudyList/StudyList';
import NewStudyList from './components/StudyList/NewStudyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SubjectsList/>
        <StudyList />
        <NewStudyList />
      </div>
    );
  }
}

export default App;
