import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './routes/Router';

class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
          <Router />
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
