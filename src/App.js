import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import SubjectsList from './components/Subject/SubjectsList';
import StudyListPage from './pages/StudyListPage'
import SubjectPage from './pages/SubjectPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <SubjectsList/>
        <SubjectPage />
        <StudyListPage />
      </div>
    );
  }
}

export default App;
