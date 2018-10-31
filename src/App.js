import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SubjectsList from './components/Subject/SubjectsList';
import StudyList from './components/StudyList/StudyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SubjectsList/>
        <StudyList />
      </div>
    );
  }
}

export default App;
