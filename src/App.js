import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CoursesList from './components/Course/CoursesList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CoursesList />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Olá! Essa é sua página principal. Bons estudos :)
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
