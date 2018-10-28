import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Cards from './components/Card/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Cards />
      </div>
    );
  }
}

export default App;
