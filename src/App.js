import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SubjectsList from './components/Subject/SubjectsList';
import StudyListPage from './pages/StudyListPage'
import NewStudyList from './components/StudyList/NewStudyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SubjectsList/>
        <StudyListPage />
        <NewStudyList />
      </div>
    );
  }
}

export default App;
