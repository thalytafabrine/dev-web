import React, { Component } from 'react'
import NavBar from '../components/NavBar/NavBar'
import SubjectsPage from '../pages/SubjectsPage'

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <SubjectsPage />
      </div>
    );
  }
}

export default HomePage;
